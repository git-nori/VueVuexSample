<template>
  <div>
    <button @click="buttonAction">{{ button }}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "button",
  // mapActions => vuexのactionを使用するために使用
  methods: mapActions("Button", {
    buttonAction: "buttonAction"
  }),
  computed: mapGetters("Button", {
    button: "getButton"
  })
};
</script>