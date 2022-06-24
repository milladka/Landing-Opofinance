<template>
  <div>
    <v-btn
      @click="resendCode"
      :disabled="timerCount != 0"
      :loading="loadingInsert"
      text
      class="mt-5"
      color="#0A9AF6"
    >
      {{$t('ResendEmailVerificationCode')}} {{timerCount > 0 ? '('+showTimerCount+')' : null}}
    </v-btn>
  </div>
</template>

<script>
export default {
    props:['userId'],
    data(){
        return{
            timerCount: 60,
            loadingInsert:false
        }
    },
    computed:{
        showTimerCount(){
            if(this.timerCount < 10){
                return '0'+this.timerCount;
            }else{
                return this.timerCount;
            }            
        }
    },
    watch: {
        timerCount: {
            handler(value) {
                if (value > 0) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }

            },
            immediate: true
        }
    },
    methods:{
        async resendCode(){
            this.loadingInsert = true;
            await this.$axios.post('/client-api/registration/send-pin?version=1.0.0',
            {
                userId: this.userId
            })
            .then(res => {
                if(res.data.result){
                    this.timerCount = 60;
                }
                this.$toast.success(this.$t('CodeSended'));
                this.loadingInsert = false;
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
                    }
                }
                this.loadingInsert = false;
            })
        }
    }
}
</script>