<template>
  <div>
    <p class="error">{{ error }}</p>
    <textarea v-model="impression"></textarea>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "textareaComp",
  computed: {
    impression: {
      get() {
        return this.$store.state.impression; // storeにあるstateのimpressionの値を取得
      },
      set(value) {
        this.$store.commit("updateImpression", value); // storeのmutationsの"updateImpression"を呼び出す
      }
    },
    // computedに別メソッドがあるためスプレッド演算子を用いてオブジェクトを返すように...を使用
    ...mapGetters("Textarea", {
      error: "getError"
    })
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>