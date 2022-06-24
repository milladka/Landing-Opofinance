<template>
  <div>
    <div>
      <div class="primary--text" :class="$vuetify.theme.dark ? 'title-auth-dark' : 'title-auth-light'">{{$t('CONFIRMATION')}}</div>
      <p :class="$vuetify.theme.dark ? 'subtitle-login-dark' : 'subtitle-login-light'">{{$t('WehavesentaconfirmationPINtotheemailaddressyouspecified')}}</p>
    </div>
    <div
      class="mt-10 auth-page"
      :class="$vuetify.theme.dark ? 'dark' : ''"
    >
      <v-form
        v-model="valid"
        @submit.prevent="Confirm"
      >
        <v-text-field
          v-model="pin"
          :rules="[(v) => !!v || $t('errorNullField')]"
          label="PIN"
          autocomplete="new-password"
          outlined
          clearable
          dense
        ></v-text-field>
        <v-btn
          depressed
          color="#0A9AF6"
          rounded
          :disabled="!valid"
          :loading="loadInsert"
          block
          class="white--text"
          large
          @click="Confirm"
        >
          {{$t('Confirm')}}
        </v-btn>
        <ResendCode :userId="userId" />
      </v-form>
    </div>
  </div>
</template>

<script>
import ResendCode from '~/components/register/ResendCode';
export default {
    props:['userId'],
    data(){
        return{
            pin:'',
            valid:false,
            loadInsert:false
        }
    },
    components:{
        ResendCode
    },
    methods:{
        async Confirm(){
            if(!this.loadInsert) this.loadInsert = true;
            await this.$axios.post('/client-api/registration/confirmation?version=1.0.0',
            {
                userId: this.userId,
                pin: this.pin
            })
            .then(res => {
                if(res.data.result){
                    if (res.data.message) {
                        this.$toast.success(res.data.message);
                    } else {
                        this.$toast.success(this.$t('EmailConfirmed'));                        
                    }                    
                    window.location.replace('https://client.opofinance.com/login');
                }else{
                    this.$toast.error(res.data.message);
                }
                this.loadInsert = false;
            })
            .catch(err => {
                let SELF = this;
                const isEmpty = obj => !Object.values(obj).filter(e => typeof e !== 'undefined').length;
                if (err.response.status == 400) {
                    if(!isEmpty(err.response.data.errors)){
                        if(!isEmpty(err.response.data.errors.children.userId)){
                            err.response.data.errors.children.userId.errors.map(er => {
                                SELF.$toast.error(er);
                            })
                        }
                        if(!isEmpty(err.response.data.errors.children.pin)){
                            err.response.data.errors.children.pin.errors.map(er => {
                                SELF.$toast.error(er);
                            })
                        }
                    }
                }
                this.loadInsert = false;
            })
        }
    }
}
</script>