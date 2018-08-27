<template>
  <main id="app">
    <TaskAdd />
    <TaskList />
  </main>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import TaskAdd from "@/components/TaskAdd.vue";

export default {
  name: "app",
  components: {
    TaskAdd,
    TaskList
  }
};
</script>

<style>
#app {
}

html {
  box-sizing: border-box;
  height: 100%;
  background: #111;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
  font-size: 0.8em;
  border: none;
  background: none;
  border-radius: 3px;
}
</style>
