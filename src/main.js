import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faTrash, faPenToSquare]);

createApp(App).component("f-icon", FontAwesomeIcon).use(store).mount("#app");
