<template>
  <article>
    <section>
      <p class="title">{{output.text}}</p>
    </section>
  </article>
</template>

<script>
export default {
  name: "OutputItem",
  props: {
    output: Object
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    console.log(this.output.text);
  }
};
</script>

<style scoped>
article {
  color: white;
}
</style>
