<template>
  <div class="game-output">
    <section class="output-items">
      <output-item
        v-for="(task, id) in tasks"
        :key="id"
        :task="task"
      />
    </section>
  </div>
</template>

<script>
import OutputItem from "@/components/OutputItem.vue";

export default {
  name: "GameOutput",
  components: {
    OutputItem
  },
  computed: {
    tasks() {
      return this.$store.state.tasks.slice();
    }
  }
};
</script>

<style scoped>
section {
  margin: 20px 0;
}

.task-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
