export default function ({ app }) {
    app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, context) => {
      var dir = context.i18n.locales.find((x) => x.code === newLocale)?.dir;
      console.log(dir);
      if(dir == 'rtl'){
        context.$vuetify.rtl  = true
      }else{
        context.$vuetify.rtl  = false
      }
    }
    app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {}
}