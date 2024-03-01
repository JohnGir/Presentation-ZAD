<template>
  <q-icon :name="icon" size="56px" />
  <h1 class="mtitle" style="max-width: 80vw">{{ text }}</h1>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconIllu",
  props: {
    text: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
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
