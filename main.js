console.warn("main ok");

// destrutturo "Vue"
const { createApp } = Vue;

createApp({
  data() {
    return {
      textDisplay: "hello world",
      imageDisplay: "./GettyImages-1254324768-e1620072877829.jpg",
    };
  },
}).mount("#app");
