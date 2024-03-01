<template>
  <q-layout view="hHh lpR fFf" class="text-white">
    <video id="background-video" autoplay loop muted>
      <source src="../assets/fd.mp4" type="video/mp4" />
    </video>

    <q-header class="head-custom text-white description">
      <q-toolbar>
        <q-toolbar-title>
          <img src="../assets/logo.png" @click="full" width="50" />

          {{ ctitle }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view :key="$route.fullPath" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">


import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ctitle } from "src/consts/title"

function full() {
      console.log("JL");
      document.documentElement.requestFullscreen();
    }

</script>

<style>
.bg-image {
  background-image: url(../assets/bg.webp);
}
#background-video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.head-custom {
  backdrop-filter: blur(7px);
  background-color: #0000001a;
}

body  {
  font-family: "Canal", Helvetica, Arial;
}

@font-face {
  font-family: "Canal";
  src: local("Canal"),
    url(../assets/Canal-DINNextLTPro-BoldCond.ttf) format("truetype");
}

.description {
  font-family: "Canal", Helvetica, Arial;
  font-size: 30px;
}
</style>
