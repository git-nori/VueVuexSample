<template>
  <div>
    <p class="error">{{ error }}</p>
    <textarea></textarea>
  </div>
</template>

<script>
export default {
  name: "textareaComp",
  data() {
    return {
      error: "required input"
    };
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>