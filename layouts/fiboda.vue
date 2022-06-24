<template>
  <v-app>
    <v-app-bar
      height="80"
      class="bg-appbar"
      fixed
      elevate-on-scroll
    >
      <v-toolbar-title>
        <img
          :src="windowTop > 30 ? '/logo-light-fiboda.png' : '/logo-fiboda.svg'"
          alt="Opofinance logo"
          srcset=""
          :width="windowTop > 30 ? '' : '80'"
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        text
        link
        href="https://www.opoforex.com/en/contact-us/"
      >
        {{ $t('Contact') }}
      </v-btn>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        text
        link
      > {{ $t('LiveChat') }}</v-btn>
      <v-menu
        offset-y
        open-on-hover
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            depressed
            v-bind="attrs"
            v-on="on"
            text
            small
          >
            <v-icon small>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(locale, index) in availableLocales"
            :key="index"
            :to="switchLocalePath(locale.code)"
            nuxt
          >
            <v-list-item-title>{{ locale.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  head () {
    return this.$nuxtI18nHead();
  },
  data () {
    return { windowTop:0}
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  },
  mounted(){
    window.addEventListener("scroll", this.onScroll, { passive: true });
    var dir = this.$i18n.locales.find((x) => x.code === this.$i18n.locale)?.dir;
    if(dir == 'rtl'){
      this.$vuetify.rtl  = true;
    }else{
      this.$vuetify.rtl  = false;
    }
  }
}
</script>