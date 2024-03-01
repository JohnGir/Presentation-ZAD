<template>
<div class="row">
  <div class="col self-center">
  <q-img
    :src="src"
    :style="'width:' + cwidth"
    :class="{ border: border }"
  ></q-img>
</div>
  <div class="col" v-if="title !=''">


    <h4 class="mtitle2">{{title}}</h4>
    <div class="mtitle3">Nationalité</div>
    <div>
      <country-flag :country="pays" size="big" /></div>
<div>

  <div v-if="(logo!=undefined)"  class="mtitle3">Société</div>
  <q-img
    style="width: 200px;"
    :src="logo"

  ></q-img>
</div>

  </div>

</div>
</template>

<script>
import { defineComponent } from "vue";
import CountryFlag from "vue-country-flag-next";

export default defineComponent({
  name: "ImageViewTitle",
  components: {
    CountryFlag,
  },
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
    title: {
      type:String,
    },
    pays: {
      type:String,
    },
    logo: {
      type:String,
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
.mtitle2 {
  font-family: "Canal", Helvetica, Arial;
  font-size: 70px;
}
.mtitle3 {
  font-family: "Canal", Helvetica, Arial;
  font-size: 30px;
}
</style>
