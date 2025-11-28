import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./router";

const app = createApp(App);

// 抑制网易云播放器的跨域警告（仅在生产环境）
if (import.meta.env.PROD) {
  globalThis.addEventListener(
    "error",
    (event) => {
      // 忽略来自网易云的跨域错误
      if (
        event.message?.includes("Permission denied") ||
        event.message?.includes("cross-origin") ||
        event.message?.includes("artists") ||
        event.filename?.includes("music.126.net") ||
        event.filename?.includes("music.163.com")
      ) {
        event.preventDefault();
        return true;
      }
    },
    true
  );

  // 抑制unhandledrejection事件
  globalThis.addEventListener("unhandledrejection", (event) => {
    if (
      event.reason?.message?.includes("Permission denied") ||
      event.reason?.message?.includes("cross-origin")
    ) {
      event.preventDefault();
    }
  });
}

app.use(router).mount("#app");
