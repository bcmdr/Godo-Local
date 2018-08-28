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
    clearLines() {
      this.$store.dispatch("clearOutput");
    },
    nextLine() {
      this.$store.dispatch("addOutput", Content.story.chapter.one[this.line++]);
    }
  },
  created() {
    this.clearLines();
    this.interval = setInterval(() => {
      if (this.line + 1 > Content.story.chapter.one.length)
        return clearInterval(this.interval);
      this.nextLine();
    }, 5000);
  }
};
</script>

<style scoped>
section {
  margin: 20px 20px;
}
</style>
