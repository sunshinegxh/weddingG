import Vue from "vue";
import toast from "./toast.vue";

const ToastConstructor = Vue.extend(toast);
let toastPool = [];

let getAnInstance = () => {
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    instance.visible = false;
    return instance;
  }
  let instance = new ToastConstructor({
    el: document.createElement("div")
  });
  toastPool.push(instance);
  return instance;
};
let Toast = (options = {}) => {
  let duration = options.duration || 3000;

  let message = typeof options === "string" ? options : options.message;
  let position = options.position || "middle";

  let instance = getAnInstance();
  clearTimeout(instance.timer);
  instance.message = message;
  instance.position = position;
  document.body.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.visible = true;
    instance.timer = setTimeout(() => {
      instance.visible = false;
    }, duration);
  });
};

export default Toast;
