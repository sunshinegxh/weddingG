const Utils = {
  isApp() {
    let u = navigator.userAgent;
    return u.indexOf("_weibo_") > -1;
  },
  getUrlParam(name) {
    let url = location.href;
    let pattern = new RegExp("[?&]" + name + "=([^&]+)", "g");
    let matcher = pattern.exec(url);
    let items = null;
    if (matcher != null) {
      try {
        items = decodeURIComponent(decodeURIComponent(matcher[1]));
      } catch (e) {
        try {
          items = decodeURIComponent(matcher[1]);
        } catch (e) {
          items = matcher[1];
        }
      }
    }
    return items;
  },
  api() {
    return "customer.banhunli.net";
    // return "customertest.banhunli.net";
  }
};

export default Utils;
