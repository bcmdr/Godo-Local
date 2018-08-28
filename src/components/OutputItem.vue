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
  }
};
</script>

<style scoped>
article {
  color: white;
}
</style>
