<template>
  <p>{{ string }}</p>
</template>

<script>
export default {
  name: "StringComp",
  data() {
    return {
      string: "入力された感想を出力する"
    };
  }
};
</script>