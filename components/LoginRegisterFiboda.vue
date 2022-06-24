<template>
  <div class="d-flex justify-center">
    <div
      class="white pa-5 px-10"
      :class="step == 1 ? 'wrapper-login' : 'wrapper-register'"
      style="min-width: 20vw;"
    >
      <div
        class="d-flex flex-column h-100 justify-space-between"
        v-if="step == 1"
      >
        <div class="text-center headline pt-5 fiboda-color">{{$t('Login')}}</div>
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
            class="btn-register-fidibo"
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
          ><span class="fiboda-color">{{$t('CreateYourAccountNow')}}</span>
          </v-btn>
        </div>
      </div>

      <div
        class="d-flex flex-column h-100 justify-space-between"
        v-if="step == 2"
      >
        <div class="text-center headline py-5 fiboda-color">{{$t('CreateYourAccountNow')}}</div>
        <div>
          <v-text-field
            outlined
            :label="$t('firstName')"
            class="mb-4"
            hide-details
            dense
          ></v-text-field>
          <v-text-field
            outlined
            :label="$t('lastName')"
            class="mb-4"
            hide-details
            dense
          ></v-text-field>
          <v-text-field
            outlined
            :label="$t('username')"
            class="mb-4"
            hide-details
            dense
          ></v-text-field>
          <v-text-field
            outlined
            :label="$t('password')"
            class="mb-4"
            hide-details
            dense
            type="password"
          ></v-text-field>
          <v-text-field
            outlined
            :label="$t('Re-enterPassword')"
            class="mb-4"
            hide-details
            dense
          ></v-text-field>
          <v-text-field
            outlined
            :label="$t('email')"
            class="mb-4"
            hide-details
            dense
          ></v-text-field>
          <v-btn
            depressed
            large
            rounded
            block
            class="btn-register-fidibo"
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
          ><span class=" fiboda-color">{{$t('Login')}}</span>
          </v-btn>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          step:2
        }
      }
    }
</script>