<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        swipeable
        animated
        navigation
        padding
        arrows
        style="width: 95vw; height: 90vh"
        class="rounded-borders text-white transparent"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <!--HOME-->
          <main-title :title="ctitle" class="custom-title"></main-title>
          <q-img
            src="src/assets/icone education.png"
            style="height: 500px; width: 500px"
          />
        </q-carousel-slide>

        <q-carousel-slide name="S2" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-graduation-cap" /> &nbsp;1,5 millions de
            diplômés sortis de l’enseignement supérieur en 2023 en Afrique
          </h1>
          <map-view></map-view>
        </q-carousel-slide>

        <q-carousel-slide name="S3" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-graduation-cap" /> &nbsp;Répartition des
            diplômés selon le domaine d’études au Burkina Faso en 2020
          </h1>
          <charts-view :data="RptDiplome" cwidth="1300px"></charts-view>
        </q-carousel-slide>

        <q-carousel-slide name="S4" class="column no-wrap flex-center">
          <h1 style="font-size: 60px">
            <q-avatar> </q-avatar>
            <q-icon name="fa-solid fa-graduation-cap" />
            &nbsp;Perspectives d'emplois 2050
          </h1>
          <dyn-counter :value="26" unit="millions" :round="1"></dyn-counter>
          <p style="font-size: 30px">
            Dans le secteur de la transition énergétique
          </p>
          <p style="font-size: 30px">
            Agence internationale des énergies renouvelables de la BAD
          </p>
        </q-carousel-slide>

        <q-carousel-slide name="S5" class="column no-wrap flex-center">
          <h1 style="font-size: 60px">
            <q-avatar> </q-avatar>
            <q-icon name="fa-solid fa-graduation-cap" />
            &nbsp;le cas du Burkina Faso
          </h1>
          <dyn-counter
            :value="7218"
            unit="postes créés"
            :round="1"
          ></dyn-counter>
          <p style="font-size: 30px">pour</p>
          <b></b>
          <p style="font-size: 50px">1 969 736 candidats</p>
        </q-carousel-slide>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <!--HOME-->
          <main-title
            :title="ctitle"
            icon="fa-solid fa-graduation-cap"
          ></main-title>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import MainTitle from '../components/MainTitle.vue';
import DynCounter from '../components/DynCounter.vue';
import ChartsView from 'src/components/ChartsView.vue';
import { transparentize } from '../consts/Utils';
import { ctitle } from 'src/consts/title';
import { QAvatar } from 'quasar';
import MyLeafletMap from 'src/components/MyLeafletMap.vue';
import MapView from 'src/components/MapView.vue';

const slide = ref('style');

// Hook pour exécuter une action après le montage du composant
onMounted(() => {});

const RptDiplome = ref({
  type: 'pie',
  data: {
    labels: [
      'Lettres et Sciences Sociales',
      'Ingénierie et Industries de Transformation',
      'Filières Agricoles',
      'Education',
      'Sciences',
      'Santé et Protection Sociale',
      'Service',
    ],
    datasets: [
      {
        label: 'en % ',

        fill: false,

        tension: 0.1,
        backgroundColor: [
          transparentize('red', 0.2),
          transparentize('red', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
        ],

        data: [56.7, 11.8, 1.9, 15, 8.7, 3.4, 3],
        hoverOffset: 45,
      },
    ],
  },
  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide

    responsive: true,

    tooltips: {
      callbacks: {
        label: function (tooltipItem: { yLabel: any }) {
          console.log(tooltipItem);
          return tooltipItem.yLabel;
        },
      },
    },
  },
});
</script>

<style scoped>
@font-face {
  font-family: 'Canal';
  src: local('Canal'),
    url(../assets/Canal-DINNextLTPro-BoldCond.ttf) format('truetype');
}

.test1 {
  font-family: 'Canal', Helvetica, Arial;
  font-size: 120px;
}

.mtitle {
  font-family: 'Canal', Helvetica, Arial;
  font-size: 30px;
  text-align: center;
}

.custom-title {
  font-size: 24px; /* Remplace cette valeur par celle que tu souhaites */
  text-align: center;
}
</style>
