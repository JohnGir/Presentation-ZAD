<template>
  <h1 class="mtitle" style="max-width: 80vw">{{ title }}</h1>

  <q-img
    v-if="image != undefined"
    class="q-gutter-md"
    style="width: 400px; filter: invert(1)"
    src="../assets/airplane.svg"
  ></q-img>
  <q-icon v-if="icon != undefined" :name="icon" size="200px"></q-icon>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainTitle",
  props: {
    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: undefined,
    },
    icon: {
      type: String,
      default: undefined,
    },
  },
});
</script>

<style scoped>
@font-face {
  font-family: "Canal";
  src: local("Canal"),
    url(../assets/Canal-DINNextLTPro-BoldCond.ttf) format("truetype");
}

.mtitle {
  font-family: "Canal", Helvetica, Arial;
  font-size: 100px;
}
</style>
