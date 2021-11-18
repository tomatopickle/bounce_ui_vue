import { createApp} from 'vue';
import App from './App.vue';
import "./styles/utilities.min.css";
import bounceUI from "./plugins/bounce_ui/index";
const app = createApp(App)
app.use(bounceUI)
app.mount("#app");