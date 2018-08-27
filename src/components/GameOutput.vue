<template>
  <div class="game-output" @click="handleClick">
    <section class="output-items">
      <output-item
        v-for="(output, id) in inputs"
        :key="id"
        :output="output"
      />
    </section>
  </div>
</template>

<script>
import OutputItem from "@/components/OutputItem.vue";
import Content from "@/content";

export default {
  name: "GameOutput",
  components: {
    OutputItem
  },
  computed: {
    story() {
      return Content.story.chapter.one;
    },
    tasks() {
      return this.$store.state.tasks.slice();
    },
    outputs() {
      return this.$store.state.outputs.slice();
    },
    inputs() {
      return this.$store.state.inputs.slice().reverse();
    }
  },
  methods: {
    handleClick() {
      this.$store.dispatch("clearOutput");
    }
  },
  created() {
    console.log(this.story);
  }
};
</script>

<style scoped>
section {
  margin: 20px 20px;
}
</style>
