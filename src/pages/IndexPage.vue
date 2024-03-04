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
            src="src/assets/icone RSE.webp"
            style="height: 500px; width: 500px"
          />
        </q-carousel-slide>

        <q-carousel-slide name="S2" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-hand-holding-dollar" /> &nbsp;Aliko
            Dangote
          </h1>
          <div class="grid-container">
            <div class="grid-item content">
              <q-img
                src="src/assets/aliko dangote.webp"
                basic
                style="
                  width: 600px;
                  height: auto;
                  border: 2px solid white;
                  border-radius: 10px;
                "
              />
            </div>
            <p style="font-size: 70px">
              $ 1,25 milliards de dollars dans la fondation
            </p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="S3" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-hand-holding-dollar" /> &nbsp;Mo Ibrahim
          </h1>
          <q-img
            src="src/assets/mo ibrahim.jpeg"
            basic
            style="
              width: 600px;
              height: auto;
              border: 2px solid white;
              border-radius: 10px;
            "
          />
        </q-carousel-slide>

        <q-carousel-slide name="S4" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-hand-holding-dollar" /> &nbsp;Les
            philantropes
          </h1>
          <p style="font-size: 45px">
            Depuis 2014, les philantropes africains ont alloués entre
          </p>
          <b></b>
          <p style="font-size: 35px">7 et 10 milliards de dollars</p>
        </q-carousel-slide>

        <q-carousel-slide name="S5" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-hand-holding-dollar" /> &nbsp; Tony
            Elumelu
          </h1>
          <q-img
            src="src/assets/tony elumelu.jpeg"
            basic
            style="
              width: 700px;
              height: auto;
              border: 2px solid white;
              border-radius: 10px;
            "
          />
        </q-carousel-slide>

        <q-carousel-slide name="S6" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-hand-holding-dollar" /> &nbsp;Tony Elumelu
          </h1>
          <q-img
            src="src/assets/Tonyfoundation.png"
            basic
            style="
              width: 1500px;
              height: auto;
              border: 2px solid white;
              border-radius: 10px;
            "
          />
        </q-carousel-slide>

        <q-carousel-slide name="S7" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-hand-holding-dollar" /> &nbsp;Bilan de la
            fondation Tony Elumelu après 10 ans
          </h1>
          <div class="custom-grid-container">
            <div class="custom-grid-item">
              <q-icon name="fa-solid fa-coins" size="3em" color="yellow" />
              <p style="font-size: 35px">Investissement sur le continent</p>
            </div>
            <div class="custom-grid-item">
              <q-icon name="fas fa-dollar-sign" size="3em" color="green" />
              <p style="font-size: 35px">
                Avec 100 millions de dollars misés sur le continent
              </p>
            </div>
            <div class="custom-grid-item">
              <q-icon name="fas fa-lightbulb" size="3em" color="yellow" />
              <p style="font-size: 35px">
                18,000 projets d'entrepreneurs financés
              </p>
            </div>
            <div class="custom-grid-item">
              <q-icon name="fas fa-users" size="3em" />
              <p style="font-size: 35px">400,000 emplois créés</p>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <!--HOME-->
          <q-avatar></q-avatar>
          <main-title
            :title="ctitle"
            icon="fa-solid fa-hand-holding-dollar"
          ></main-title>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import MainTitle from '../components/MainTitle.vue';
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
        label: 'Les marques',
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

        data: [9.7, 9.5, 9, 8.5, 8, 7.5, 7.3, 6.5, 6, 5.5, 5],
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

const nbrFort = ref({
  type: 'bar',
  data: {
    labels: ['2020', '2023', '2032'],
    datasets: [
      {
        label: '',
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
  font-size: 100px;
  text-align: center;
}

.custom-title {
  font-size: 24px; /* Remplace cette valeur par celle que tu souhaites */
}

/* Slide 2 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px; /* Espace entre les cellules */
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  text-align: center; /* Centrer le texte dans la cellule du contenu */
}

/* Slide 7 */

.custom-grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px; /* Espace entre les cellules */
}

.custom-grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 10px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
}

.custom-grid-item q-icon {
  margin-bottom: 10px;
}

.custom-grid-item p {
  font-size: 16px;
  margin: 0;
}
</style>
