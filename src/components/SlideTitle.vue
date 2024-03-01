<template>
  <h3 class="mtitle" style="max-width: 80vw">{{ title }}</h3>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SlideTitle",
  props: {
    text: {
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
