<template>
  <div>
    Thanks Page
    <HeadComp></HeadComp>
    <p>送信完了</p>
    <ButtonComp></ButtonComp>
  </div>
</template>

<script>
import HeadComp from "@/components/modules/HeadComp";
import ButtonComp from "@/components/modules/ButtonComp";
export default {
  name: "thanks",
  components: {
    HeadComp,
    ButtonComp
  }
};
</script>