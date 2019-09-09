<template>
  <div>
    Form page
    <HeadComp />
    <!-- 適切なコンポーネントをisComponentに格納して描写 -->
    <component :is="isComponent"></component>
    <button @click="buttonAction">{{ button }}</button>
  </div>
</template>

<script>
import HeadComp from "@/components/modules/HeadComp";
import TextareaComp from "@/components/modules/TextareaComp";
import StringComp from "@/components/modules/StringComp";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "form",
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  },
  // mapActions => vuexのactionを使用するために使用
  methods: mapActions("Form", {
    buttonAction: "buttonAction"
  }),
  computed: mapGetters("Form", {
    button: "getButton",
    isComponent: "getComponent"
  })
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
