<template>
  <div class="game-output">
    <section class="output-items">
      <output-item
        v-for="(item, id) in outputs"
        :key="id"
        :text="item.text"
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
  data() {
    return {
      line: 0,
      interval: null
    };
  },
  computed: {
    outputs() {
      return this.$store.state.outputs.slice().reverse();
    },
    inputs() {
      return this.$store.state.inputs.slice().reverse();
    }
  },
  methods: {
    clearInputs() {
      this.$store.dispatch("clearInputs");
    },
    clearOutputs() {
      this.$store.dispatch("clearOutputs");
    },
    nextLine() {
      this.$store.dispatch("addOutput", Content.story.chapter.one[this.line++]);
    },
    nextInterval() {
      console.log(this.inputs);
      if (this.line + 1 > Content.story.chapter.one.length) return;
      this.nextLine();
    }
  },
  created() {
    this.clearInputs();
    this.clearOutputs();
    this.interval = setInterval(this.nextInterval, 5000);
  }
};
</script>

<style scoped>
section {
  margin: 20px 20px;
}
</style>
