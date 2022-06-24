<template>
  <div class="d-flex justify-center">
    <div
      class="white pa-5 px-10"
      :class="[step == 1 ? 'wrapper-login' : 'wrapper-register',type == 'crypto' ? null : 'mt-md-16']"
      style="min-width: 20vw;"
    >
      <div
        class="d-flex flex-column h-100 justify-space-between"
        v-if="step == 1"
      >
        <div
          class="text-center headline pt-5"
          :class="type == 'crypto' ? 'primary--text' :'color-shares'"
        >{{$t('Login')}}</div>
        <div>
          <v-text-field
            outlined
            :label="$t('username')"
          ></v-text-field>
          <v-text-field
            outlined
            :label="$t('password')"
            type="password"
          ></v-text-field>
          <v-btn
            depressed
            large
            rounded
            block
            :class="type == 'crypto' ? 'btn-register-crypto' : 'btn-register'"
          >{{$t('Login')}}</v-btn>
        </div>
        <div>
          <span class="caption">{{$t('NotAmemeberyet')}}</span>
          <v-btn
            depressed
            class="caption"
            link
            text
            @click="step = 2"
          ><span class="primary--text ">{{$t('CreateYourAccountNow')}}</span>
          </v-btn>
        </div>
      </div>

      <div
        class="d-flex flex-column h-100 justify-space-between"
        v-if="step == 2"
      >
        <div
          class="text-center headline py-5"
          :class="type == 'crypto' ? 'primary--text' :'color-shares'"
        >{{$t('CreateYourAccountNow')}}</div>
        <div>
          <v-text-field
            outlined
            class="mb-4"
            hide-details
            dense
            :label="$t('firstName')"
          ></v-text-field>
          <v-text-field
            outlined
            class="mb-4"
            hide-details
            dense
            :label="$t('lastName')"
          ></v-text-field>
          <v-text-field
            outlined
            class="mb-4"
            hide-details
            :name="`username_${Math.random()}`"
            v-model="username"
            autocomplete="false"
            dense
            :label="$t('username')"
          ></v-text-field>
          <v-text-field
            outlined
            class="mb-4"
            hide-details
            dense
            :label="$t('password')"
            type="password"
          ></v-text-field>
          <v-text-field
            class="mb-4"
            outlined
            hide-details
            dense
            :label="$t('Re-enterPassword')"
          ></v-text-field>
          <v-text-field
            outlined
            class="mb-4"
            hide-details
            dense
            :label="$t('email')"
          ></v-text-field>
          <v-btn
            depressed
            large
            rounded
            block
            :class="type == 'crypto' ? 'btn-register-crypto' : 'btn-register'"
          >{{$t('SignUp')}}</v-btn>
        </div>
        <div class="mt-2 px-6">
          <span class="caption">{{$t('Doyouhaveanaccount')}}</span>
          <v-btn
            depressed
            class="caption"
            link
            text
            @click="step = 1"
          ><span class="primary--text ">{{$t('Login')}}</span>
          </v-btn>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      props:['type'],
      data(){
        return{
          step:2,
          username:''
        }
      }
    }
</script>