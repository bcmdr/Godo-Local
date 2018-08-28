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
      action: null,
      room: null,
      prompts: null,
      line: null,
      interval: null
    };
  },
  computed: {
    outputs() {
      return this.$store.state.outputs.slice().reverse();
    },
    inputs() {
      return this.$store.state.inputs.slice();
    }
  },
  methods: {
    clearInputs() {
      this.$store.dispatch("clearInputs");
    },
    clearOutputs() {
      this.$store.dispatch("clearOutputs");
    },
    handleAction(action) {
      if (this.inputs.length > 0 && this.inputs.reverse()[0].includes(action)) {
        this.action = action;
        this.prompts = Content.rooms[this.room].actions[this.action];
      }
    },
    nextInterval() {
      console.log(this.inputs);
      this.handleAction("follow");
      this.handleAction("wait");
      this.$store.dispatch("addOutput", this.prompts.shift());
    }
  },
  created() {
    this.clearInputs();
    this.clearOutputs();
    this.room = "one";
    this.action = "none";
    this.prompts = Content.rooms[this.room].actions[this.action];
    this.interval = setInterval(this.nextInterval, 5000);
  }
};
</script>

<style scoped>
section {
  margin: 20px 20px;
}
</style>
