import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";

// const AsyncComp = defineAsyncComponent(() =>
//   import("@/components/Test.vue")
// );

createApp(App)
  // .component("AsyncComp", AsyncComp)
  .mount("#app");
