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
          <main-title
            :title="ctitle"
            icon="fa-solid fa-graduation-cap"
            class="custom-title"
          ></main-title>
        </q-carousel-slide>

        <q-carousel-slide name="S3" class="column no-wrap flex-center">
          <h1 style="font-size: 50px; text-align: center">
            <q-icon name="fa-solid fa-graduation-cap" /> &nbsp;Proportion de
            diplômés trouvant un emploi
          </h1>
          <q-img
            src="src/assets/Blanc.png"
            style="width: 900px; height: auto"
          />
        </q-carousel-slide>

        <q-carousel-slide name="S4" class="column no-wrap flex-center">
          <h1 style="font-size: 50px; text-align: center">
            <q-icon name="fa-solid fa-graduation-cap" /> &nbsp;Proportion de
            diplômés trouvant un emploi
          </h1>
          <q-img src="src/assets/Euro.png" style="width: 900px; height: auto" />
        </q-carousel-slide>

        <q-carousel-slide name="S5" class="column no-wrap flex-center">
          <h1 style="font-size: 50px; text-align: center">
            <q-icon name="fa-solid fa-graduation-cap" /> &nbsp;Proportion de
            diplômés trouvant un emploi
          </h1>
          <q-img src="src/assets/afeu.png" style="width: 900px; height: auto" />
        </q-carousel-slide>

        <q-carousel-slide name="S2" class="column no-wrap flex-center">
          <h1 style="font-size: 75px; text-align: center">
            <q-icon name="fa-solid fa-graduation-cap" /> &nbsp;1,5 millions de
            diplômés
            <p>sortis de l’enseignement supérieur</p>
            <p>en 2023 en Afrique</p>
          </h1>
        </q-carousel-slide>

        <q-carousel-slide name="S6" class="column no-wrap flex-center">
          <h1 style="font-size: 50px; text-align: center">
            <q-icon name="fa-solid fa-graduation-cap" /> &nbsp;Répartition des
            diplômés selon le domaine d’études
            <p>au Burkina Faso en 2020</p>
          </h1>
          <charts-view :data="RptDiplome" cwidth="1300px"></charts-view>
        </q-carousel-slide>

        <q-carousel-slide name="S9" class="column no-wrap flex-center">
          <h1
            class="agnes"
            style="font-size: 45px; position: relative; opacity: 1"
          >
            <q-avatar> </q-avatar>
            <q-icon name="fa-solid fa-graduation-cap" />
            &nbsp;Déficit en ingénieurs sur le continent
          </h1>
          <dyn-counter
            :value="4.3"
            unit="Millions"
            :round="10"
            style="margin-bottom: 20px; margin-top: 20px"
          ></dyn-counter>
          <p style="font-size: 80px; opacity: 0">Capacité de former</p>
          <div
            class="agne2"
            style="
              font-size: 120px;
              display: flex;
              align-items: baseline;
              opacity: 0;
            "
          >
            <p style="margin-right: 10px">300 000</p>
            &nbsp;
            <p style="font-size: 70px">ingénieurs / an</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="S10" class="column no-wrap flex-center">
          <h1
            class="agnes"
            style="font-size: 45px; position: relative; opacity: 1"
          >
            <q-avatar> </q-avatar>
            <q-icon name="fa-solid fa-graduation-cap" />
            &nbsp;Déficit en ingénieurs sur le continent
          </h1>
          <p style="font-size: 115px; margin: -20px">4,3 Millions</p>
          <p style="font-size: 80px">Capacité de former</p>
          <div
            class="agne2"
            style="font-size: 120px; display: flex; align-items: baseline"
          >
            <p style="margin-right: 10px">300 000</p>
            &nbsp;
            <p style="font-size: 70px">ingénieurs / an</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="S7" class="column no-wrap flex-center">
          <h1 style="font-size: 45px; position: relative; top: -60px">
            <q-avatar> </q-avatar>
            <q-icon name="fa-solid fa-graduation-cap" />
            &nbsp;Perspectives d'emplois 2050
          </h1>
          <dyn-counter
            :value="26"
            unit="millions"
            :round="1"
            style="margin-bottom: 20px"
          ></dyn-counter>
          <p style="font-size: 60px">
            Dans le secteur de la transition énergétique
          </p>
          <p style="font-size: 30px">
            Selon le rapport de l'Agence internationale des énergies
            renouvelables de la BAD
          </p>
        </q-carousel-slide>

        <q-carousel-slide name="S8" class="column no-wrap flex-center">
          <h1
            style="
              font-size: 45px;
              position: relative;
              opacity: 1;
              transition: opacity 2s ease-in;
            "
          >
            <q-avatar> </q-avatar>
            <q-icon name="fa-solid fa-graduation-cap" />
            &nbsp;Le cas du Burkina Faso
          </h1>
          <dyn-counter
            :value="7218"
            unit="postes"
            :round="10"
            style="margin-bottom: 20px; margin-top: 20px"
          ></dyn-counter>
          <p style="font-size: 80px">créés pour</p>
          <div style="font-size: 120px; display: flex; align-items: baseline">
            <p style="font-size: 120px">1 969 736</p>
            &nbsp;
            <p style="font-size: 70px">candidats</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <!--HOME-->
          <main-title
            :title="ctitle"
            icon="fa-solid fa-graduation-cap"
            class="custom-title"
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
          transparentize('red', 0.2),
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

/* Slide 9 */
.agnes,
.agnes2 {
  opacity: 0;
  transition: opacity 2s ease-in;
}

.agnes.active,
.agnes2.active {
  opacity: 1;
}

.agnes {
  transition-delay: 1s; /* Ajoutez un délai de 1 seconde pour la classe 'agnes' */
}

.agnes2 {
  transition-delay: 2s; /* Ajoutez un délai de 2 secondes pour la classe 'agnes2' */
}
</style>
