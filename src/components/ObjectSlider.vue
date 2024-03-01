<template>

<div class="row items-center" style="width: 90vw; height: 300px;">

<div class="col-6 text-center">

 <div>  <q-slider vertical thumb-size="50px" track-size="10px"  reverse color="red"
   :min="1" :max="8" v-model="value"></q-slider>
</div>

</div>
<div class="col-6 items-center">
  <div>
 <q-icon name="fa-solid fa-sack-dollar" :size="calc + 'px'" ></q-icon>
</div>

</div>


</div>

<div class="row"  style="width: 90vw;">
  <div class="col-6 text-center">
  <h3>Prix</h3>
</div>
<div class="col-6 ">
  <h3>Salaire</h3>
</div>
</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';


const value = ref(4)

const calc = computed(()=>{
  return (11 - value.value) * 32;
})

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
