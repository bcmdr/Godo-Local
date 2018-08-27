<template>
  <form @submit.prevent="addTask()">
    <input type="text" v-model="title" placeholder="Type Here..." class="go-input">
    <button @click.prevent="handleSubmitClick" type="submit" :class="{ active: title }">Enter</button>
  </form>
</template>

<script>
export default {
  name: "TaskAdd",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    handleSubmitClick() {
      if (this.title) {
        this.addTask();
      } else {
        document.querySelector(".go-input").focus();
      }
    },
    addTask() {
      // Trim Whitespace and cancel if empty
      let formattedTitle = this.title.trim();
      if (!formattedTitle) return;

      this.$store.dispatch("addTask", formattedTitle);

      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  color: white;
  display: flex;
  padding: 8px;
  border-bottom: 1px solid white;
}

input[type="text"] {
  color: white;
  flex-grow: 1;
  padding: 10px;
  border: none;
  margin-right: 10px;
  font-size: 1rem;
  background: transparent;
}

button {
  color: #111;
  border: 1px solid white;
  background: #eee;
}
</style>
