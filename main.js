console.warn("main ok");

// destrutturo "Vue"
const { createApp } = Vue;

createApp({
  data() {
    return {
      textDisplay: "hello world",
    };
  },
}).mount("#app");
