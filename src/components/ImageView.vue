<template>

  <q-img
    :src="src"
    :style="'width:' + cwidth"
    :class="{ border: border }"
  ></q-img>

</template>

<script>
import { defineComponent } from "vue";
import CountryFlag from "vue-country-flag-next";

export default defineComponent({
  name: "ImageView",
  computed: {},
  props: {
    src: {
      type: String,
      required: true,
    },
    cwidth: {
      type: String,
      default: "75wv;",
    },
    border: {
      type: Boolean,
      default: true,
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

.border {
  border-block-color: red;
  border: 5px solid white;
  border-radius: 13px;
}

.mtitle {
  font-family: "Canal", Helvetica, Arial;
  font-size: 100px;
}
</style>
