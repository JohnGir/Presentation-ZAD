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
            icon="fa-regular fa-gem"
            style="size: 2rem"
            class="custom-title"
          ></main-title>
        </q-carousel-slide>

        <q-carousel-slide name="q1" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp;Le quizz
          </h1>
          <q-img
            src="src/assets/brieflogosemissionluxe/gucci.png"
            basic
            style="width: 30%; height: 45%"
          />
        </q-carousel-slide>

        <q-carousel-slide name="q2" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp;Le quizz
          </h1>
          <q-img
            src="src/assets/brieflogosemissionluxe/vuitton.png"
            basic
            style="width: 25%; height: 45%"
          />
        </q-carousel-slide>

        <q-carousel-slide name="q3" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp;Le quizz
          </h1>
          <q-img
            src="src/assets/brieflogosemissionluxe/dior.png"
            basic
            style="width: 25%; height: 45%"
          />
        </q-carousel-slide>

        <q-carousel-slide name="q4" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp;Le quizz
          </h1>
          <q-img
            src="src/assets/brieflogosemissionluxe/chanel.png"
            basic
            style="width: 25%; height: 45%"
          />
        </q-carousel-slide>

        <q-carousel-slide name="q5" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp;Le quizz
          </h1>
          <q-img
            src="src/assets/brieflogosemissionluxe/polo ralph lauren.png"
            basic
            style="width: 25%; height: 45%"
          />
        </q-carousel-slide>

        <q-carousel-slide name="loved brand" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp; Marques préférées sur le
            continent
          </h1>
          <charts-view :data="brand" cwidth="1000px;"></charts-view>
        </q-carousel-slide>

        <q-carousel-slide
          name="worlMap-vuitton"
          class="column no-wrap flex-center"
        >
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp; Magasins Gucci
          </h1>
          <q-img src="src/assets/4.jpg" />
        </q-carousel-slide>

        <q-carousel-slide
          name="worlMap-vuitton-2"
          class="column no-wrap flex-center"
        >
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp; Magasins Gucci
          </h1>
          <q-img src="src/assets/5.jpg" />
        </q-carousel-slide>

        <q-carousel-slide
          name="worlMap-vuitton-3"
          class="column no-wrap flex-center"
        >
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp; Magasins Gucci
          </h1>
          <q-img src="src/assets/6.jpg" />
        </q-carousel-slide>

        <q-carousel-slide
          name="worlMap-vuitton-4"
          class="column no-wrap flex-center"
        >
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp; Magasins Gucci
          </h1>
          <q-img src="src/assets/7.jpg" />
        </q-carousel-slide>

        <q-carousel-slide name="vuitton" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp; Magasins Louis Vuitton
          </h1>
          <q-img src="src/assets/8.jpg" />
        </q-carousel-slide>

        <q-carousel-slide name="vuitton-2" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp; Magasins Louis Vuitton
          </h1>
          <q-img src="src/assets/9.jpg" />
        </q-carousel-slide>

        <q-carousel-slide name="vuitton-3" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" /> &nbsp; Magasins Louis Vuitton
          </h1>
          <q-img src="src/assets/10.jpg" />
        </q-carousel-slide>

        <q-carousel-slide name="partLuxe" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-regular fa-gem" />&nbsp;Part de l’Afrique dans le
            marché mondial du luxe en 2022
          </h1>
          <charts-view :data="luxe" cwidth="1000px;"></charts-view>
        </q-carousel-slide>

        <q-carousel-slide name="moneyE" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-avatar> </q-avatar>
            <q-icon name="fa-regular fa-gem" />
            &nbsp;Part d’exportation de Champagne vers Afrique en 2019
          </h1>
          <dyn-counter :value="1.8" unit="%" :round="10"></dyn-counter>
        </q-carousel-slide>

        <q-carousel-slide name="licornes4" class="q-mx-auto q-my-4">
          <h4>
            <q-icon name="fa-regular fa-gem" /> &nbsp;Nombre de fortunes de plus
            de 100 000 000 de dollars en Afrique
          </h4>
          <charts-view :data="nbrFort" :round="1"></charts-view>
        </q-carousel-slide>
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <!--HOME-->
          <main-title :title="ctitle" icon="fa-regular fa-gem"></main-title>
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

const slide = ref('style');

// Hook pour exécuter une action après le montage du composant
onMounted(() => {});

const brand = ref({
  type: 'bar',
  data: {
    labels: [
      'Nike',
      'Adidas',
      'Samsung',
      'Coca Cola',
      'Apple',
      'Tecno',
      'Gucci',
      'Toyota',
      'Puma',
      'MTN',
      'Zara',
    ],
    datasets: [
      {
        label: 'Rang de la marque',
        fill: false,
        tension: 0.1,
        backgroundColor: [
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('red', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
        ],
        data: [11, 10.5, 9.5, 9, 8.5, 8, 7, 6, 5, 4, 3],
      },
    ],
  },
  options: {
    legend: {
      display: true,
      labels: {
        text: '', // Libellé de la légende
      },
    },
    title: {
      display: true,
      text: '%',
    },
    scales: {
      x: {
        ticks: {
          display: true, // Masquer les étiquettes de l'axe des abscisses
        },
      },

      y: {
        display: false, // Masquer l'axe des ordonnées
      },
    },
  },
});

const nbrFort = ref({
  type: 'bar',
  data: {
    labels: ['2020', '2023', '2032'],
    datasets: [
      {
        label: 'Selon le rapport Africa Wealth',
        fill: false,
        tension: 0.1,
        backgroundColor: [
          transparentize('white', 0.2),
          transparentize('white', 0.2),
          transparentize('white', 0.2),
        ],
        data: [125000, 138000, 195000],
      },
    ],
  },
  options: {
    legend: {
      display: true,
      labels: {
        text: '', // Libellé de la légende
      },
    },
    title: {
      display: true,
      text: '%',
    },
  },
});

const luxe = ref({
  type: 'pie',
  data: {
    labels: ['En Afrique', 'Le reste du monde'],
    datasets: [
      {
        label: 'en % ',

        fill: false,

        tension: 0.1,
        backgroundColor: [
          transparentize('red', 0.2),
          transparentize('white', 0.2),
        ],

        data: [3, 97],
        hoverOffset: 45,
      },
    ],
  },
  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide

    responsive: true,
    legend: {
      display: false, //This will do the task
    },
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
  font-size: 50px;
}

.mtitle {
  font-family: 'Canal', Helvetica, Arial;
  font-size: 50px;
}

.custom-title {
  font-size: 24px; /* Remplace cette valeur par celle que tu souhaites */
}
</style>
