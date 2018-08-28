<template>
  <article>
    <p class="title">{{text}}</p>
  </article>
</template>

<script>
export default {
  name: "OutputItem",
  props: {
    text: String
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    console.log(this.text);
  }
};
</script>

<style scoped>
article {
  color: white;
}
</style>
