import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { router } from "@/router";
import vuetify from "@/vuetify";
import App from "@/App.vue";

const head = createHead();
const app = createApp(App);

app.use(head);
app.use(vuetify)
app.use(router);

router.isReady().then(() => {
    app.mount("#app");
});
