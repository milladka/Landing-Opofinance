<template>
  <div>
    <div>
      <div :class="$vuetify.theme.dark ? 'title-auth-dark' : 'title-auth-light'">{{$t('CreateYourAccountNow')}}</div>
    </div>
    <div
      class="mt-10 auth-page"
      :class="$vuetify.theme.dark ? 'dark' : ''"
    >
      <div
        class="red pa-2 mb-4"
        :class="$vuetify.theme.dark ? 'darken-3' : 'lighten-4'"
        v-if="errors.length && !loadInsert"
      >
        <ul>
          <li
            v-for="(error,index) in errors"
            :key="index"
            class="caption"
            :class="$vuetify.theme.dark ? 'white--text' : 'red--text text--darken-3'"
          >
            {{error}}
          </li>
        </ul>
      </div>
      <v-form
        v-model="valid"
        @submit.prevent="register"
      >
        <v-text-field
          v-model="firstName"
          :error-messages="errorFirstName"
          :rules="[(v) => !!v || $t('errorNullField')]"
          :label="$t('FirstName')"
          autocomplete="new-password"
          outlined
          clearable
          dense
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          :error-messages="errorLastName"
          :rules="[(v) => !!v || $t('errorNullField')]"
          :label="$t('LastName')"
          autocomplete="new-password"
          outlined
          clearable
          dense
        ></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="birthDate"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :error-messages="errorBirthDate"
              v-model="birthDate"
              append-icon="mdi-calendar"
              :rules="[(v) => !!v || $t('errorNullField')]"
              :label="$t('BirthdayDate')"
              outlined
              readonly
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="birthDate"
            no-title
            dark
            scrollable
            color="primary"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              {{$t('Cancel')}}
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(birthDate)"
            >
              {{$t('OK')}}
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-autocomplete
          v-model="country"
          :label="$t('Country')"
          :rules="[(v) => !!v || $t('errorNullField')]"
          :items="countries"
          :error-messages="errorCountry"
          clearable
          outlined
          item-text="name"
          autocomplete="new-password"
          item-value="code"
          dense
        ></v-autocomplete>
        <v-text-field
          v-model="phone"
          :error-messages="errorPhone"
          @keypress="validate"
          autocomplete="new-password"
          :rules="[(v) => !!v || $t('errorNullField')]"
          class="number-input"
          :label="$t('Phone')"
          outlined
          clearable
          dense
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="errorEmail"
          autocomplete="new-password"
          :rules="[(v) => !!v || $t('errorNullField') ]"
          :label="$t('Email')"
          outlined
          clearable
          dense
        ></v-text-field>
        <v-text-field
          v-model="password"
          :error-messages="errorPassword"
          autocomplete="new-password"
          :rules="[(v) => !!v || $t('errorNullField')]"
          :label="$t('Password')"
          outlined
          type="password"
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
          @click="register"
        >
          {{$t('CreateAccount')}}
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import CountryCodes from '~/static/CountryCodes.json';
export default {
    props:['userId','state'],
    data(){
        return {
            valid:false,
            loadInsert:false,
            firstName:'',
            lastName:'',
            country:'',
            password:'',
            phone:'',
            email:'',
            terms:false,
            menu: false,
            birthDate: '',
            countries:CountryCodes,
            errors:[],
            errorEmail:'',
            errorFirstName: '',
            errorLastName: '',
            errorBirthDate: '',
            errorCountry: '',
            errorPhone: '',
            errorPassword: ''
        }
    },
    watch:{
      birthDate:function(){
        this.errorBirthDate = '';
      },
      firstName:function(){
        this.errorFirstName = '';
      },
      lastName:function() {
        this.errorLastName = '';
      },
      password:function(){
        this.errorPassword = '';
      },
      phone: function(){
        this.errorPhone = '';
      },
      email: function(){
        this.errorEmail = '';
      },
      country: function(val) {
          this.errorCountry = '';
          const country = this.countries.find(item => item.code == val);
          if(country){
              this.phone = country.dial_code; 
          } else {
              this.phone = '';
          }
      }
    },
    methods:{
        validate(evt){
          var data = evt.target.value;
          if((evt.charCode>= 48 && evt.charCode <= 57) || evt.charCode == 46 ||evt.charCode == 0){
              if(data.indexOf('.') > -1){
                  if(evt.charCode== 46){
                      evt.preventDefault();
                  }
              }
          }else{
              evt.preventDefault();
          }
        },
        async register(){
            if(!this.loadInsert) this.loadInsert = true;
            this.errors = []
            await this.$axios.post('/client-api/registration?version=1.0.0',
            {
                firstName: this.firstName,
                lastName: this.lastName,
                country: this.country,
                phone: this.phone,
                email: this.email,
                password: this.password,
                birthDate: this.birthDate,
                clientType: "Individual",
                notificationPreferences :[ "applications", "documents", "helpdesk", "ib-new-reg", "marketing", "payment-methods", "transactions", "transfer" ]
            })
            .then(res => {
                if(res.status == 200){
                    this.$emit('update:state',2);
                    this.$emit('update:userId',res.data.id);
                }
                this.loadInsert = false;
            })
            .catch(err => {
                let SELF = this;
                const isEmpty = obj => !Object.values(obj).filter(e => typeof e !== 'undefined').length;
                if (err.response.status == 400) {
                    if(!isEmpty(err.response.data.errors)){
                        if(!isEmpty(err.response.data.errors.children.email)){
                          this.errorEmail = err.response.data.errors.children.email.errors.join('-');
                        }
                        if(!isEmpty(err.response.data.errors.children.firstName)){
                          this.errorFirstName = err.response.data.errors.children.firstName.errors.join('-');
                        }
                        if(!isEmpty(err.response.data.errors.children.lastName)){
                          this.errorLastName = err.response.data.errors.children.lastName.errors.join('-');
                        }
                        if(!isEmpty(err.response.data.errors.children.country)){
                          this.errorCountry = err.response.data.errors.children.country.errors.join('-');
                        }
                        if(!isEmpty(err.response.data.errors.children.phone)){
                          this.errorPhone = err.response.data.errors.children.phone.errors.join('-');
                        }
                        if(!isEmpty(err.response.data.errors.children.password)){
                          this.errorPassword = err.response.data.errors.children.password.errors.join('-');
                        }
                        if(!isEmpty(err.response.data.errors.children.birthDate)){
                          this.errorBirthDate = err.response.data.errors.children.birthDate.errors.join('-');
                        }
                    }
                }
                this.loadInsert = false;
            })
        }
    }
}
</script>