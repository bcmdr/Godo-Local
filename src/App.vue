<template>
  <main id="app">
    <user-input />
    <game-output />
  </main>
</template>

<script>
import UserInput from "@/components/UserInput.vue";
import GameOutput from "@/components/GameOutput.vue";

export default {
  name: "app",
  components: {
    UserInput,
    GameOutput
  },
  created() {
    console.log("Hello World");
  }
};
</script>

<style>
#app {
  font-size: 1rem;
}

html {
  box-sizing: border-box;
  height: 100%;
  background: #111;
}

body {
  margin: 0;
  padding: 0;
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

a {
  color: inherit;
}

button {
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  background: none;
  border-radius: 3px;
}
</style>
