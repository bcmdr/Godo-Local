<template>
  <div class="game-output" @click="handleClick">
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
      line: 0
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
    handleClick() {
      this.$store.dispatch("clearOutput");
    }
  },
  created() {
    console.log(Content.story.chapter.one);
    if (this.outputs.length === 0)
      this.$store.dispatch("addOutput", Content.story.chapter.one[this.line]);
    // this.$store.dispatch("loadOutput", Content.story.chapter.one);
  }
};
</script>

<style scoped>
section {
  margin: 20px 20px;
}
</style>
