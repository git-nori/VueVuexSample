<template>
  <div>
    Form page
    <HeadComp />
    <!-- 適切なコンポーネントをisComponentに格納して描写 -->
    <component :is="isComponent"></component>
    <ButtonComp />
  </div>
</template>

<script>
import HeadComp from "@/components/modules/HeadComp";
import TextareaComp from "@/components/modules/TextareaComp";
import StringComp from "@/components/modules/StringComp";
import ButtonComp from "@/components/modules/ButtonComp";
import { mapGetters } from "vuex";
export default {
  name: "form",
  computed: mapGetters("Form", {
    isComponent: "getComponent"
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp,
    ButtonComp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
