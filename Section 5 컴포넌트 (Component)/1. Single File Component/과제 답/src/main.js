import { createApp } from "vue";
import root from "./app.vue";

// 전역 등록 방법
// import SiteHeader from "./components/SiteHeader.vue";
// import SiteMain from "./components/SiteMain.vue";
// import SiteFooter from "./components/SiteFooter.vue";

const app = createApp(root);

// app.component("SiteHeader", SiteHeader);
// app.component("SiteMain", SiteMain);
// app.component("SiteFooter", SiteFooter);

app.mount("#app");
