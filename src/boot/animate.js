import { boot } from "quasar/wrappers";
import vueNextAnimejs from "@maybecode/vue-next-animejs";


import VueObserveVisibility from "vue-observe-visibility";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(vueNextAnimejs);
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)

  app.use(VueObserveVisibility);
});
