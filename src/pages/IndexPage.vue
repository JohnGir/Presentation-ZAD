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
          <q-avatar></q-avatar>
          <main-title
            :title="ctitle"
            icon="fa-solid fa-syringe"
            class="custom-tittle"
          ></main-title>
        </q-carousel-slide>

        <q-carousel-slide name="q1" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-syringe" /> &nbsp;Depuis 2001, chaque Etat
            s’engage à allouer à la santé
          </h1>
          <dyn-counter
            :value="15"
            unit="%"
            :round="10"
            style="font-size: 100px"
          ></dyn-counter>
          />
        </q-carousel-slide>

        <q-carousel-slide name="q2" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-syringe" /> &nbsp;Pourcentage de
            population bénéficiant de la couverture santé universelle
          </h1>
          <h1 class="mtitle">Le Rwanda</h1>
          <dyn-counter
            :value="90"
            unit="%"
            :round="10"
            style="font-size: 100px"
          ></dyn-counter>
        </q-carousel-slide>

        <q-carousel-slide name="q3" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-syringe" /> &nbsp; Couverture maladie
            universelle et cotisations
          </h1>
          <charts-view :data="cmu" cwidth="1000px;"></charts-view>
        </q-carousel-slide>

        <q-carousel-slide name="q4" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-syringe" /> &nbsp;Rapport inégal
          </h1>
          <div class="grid-container">
            <div class="grid-item arrow-up">
              <q-icon name="fas fa-arrow-up" size="3x" color="green" />
            </div>
            <div class="grid-item text-up">
              <q-icon name="fas fa-arrow-down" size="2x" color="red" />
            </div>
            <div class="grid-item arrow-down">
              <p style="font-size: 30px">
                Plus le soin pris en charge est coûteux
              </p>
            </div>
            <div class="grid-item text-down">
              <p style="font-size: 30px">Moins la CSU est efficace</p>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <!--HOME-->
          <main-title :title="ctitle" icon="fa-solid fa-syringe"></main-title>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import MainTitle from '../components/MainTitle.vue';
import DynCounter from '../components/DynCounter.vue';
import ChartsView from 'src/components/ChartsView.vue';
import { transparentize } from '../consts/Utils';
import { ctitle } from 'src/consts/title';
import { QAvatar } from 'quasar';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const slide = ref('style');

const cmu = ref({
  type: 'bar',
  data: {
    labels: ['Rwanda', "Côte d'Ivoire"],
    datasets: [
      {
        label: 'Couverture Maladie Universelle',
        fill: false,
        tension: 0.1,
        backgroundColor: [
          transparentize('white', 0.2),
          transparentize('white', 0.2),
        ],
        borderWidth: 2, // Épaisseur de la ligne
        yAxisID: 'cmu', // ID de l'axe Y pour la couverture maladie universelle
        data: [90, 30], // Ajoutez les valeurs de couverture pour le Rwanda et la Côte d'Ivoire
      },
      {
        label: 'Cotisations',
        fill: false,
        tension: 0.1,
        backgroundColor: [
          transparentize('red', 0.2),
          transparentize('red', 0.2),
        ],
        yAxisID: 'coverage', // ID de l'axe Y pour le taux de couverture
        data: [1444, 1000], // Ajoutez les valeurs des cotisations pour le Rwanda et la Côte d'Ivoire
      },
    ],
  },
  options: {
    legend: {
      display: true,
      labels: {
        text: 'Les pays',
      },
    },
    title: {
      display: true,
      text: '% / Cotisations',
    },
    scales: {
      y: [
        {
          id: 'cmu', // ID de l'axe Y pour la couverture maladie universelle
          type: 'linear',
          position: 'right',
          beginAtZero: true,
          max: 110, // Ajustez en fonction de vos besoins
          ticks: {
            stepSize: 10,
          },
          callback: (value) => value + '%',
        },
        {
          id: 'coverage', // ID de l'axe Y pour le taux de couverture
          type: 'linear',
          position: 'left',
          beginAtZero: true,
          max: 2500, // Ajustez en fonction de vos besoins
          ticks: {
            stepSize: 200,
          },
        },
      ],
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      datalabels: {
        display: true,
        color: 'black',
        align: 'top',
        offset: 8,
        formatter: (value, context) => {
          if (context.dataset.label === 'Couverture Maladie Universelle') {
            return value + '%';
          }
          return value;
        },
      },
    },
    tooltips: {
      enabled: false,
      custom: (tooltipModel) => {
        const dataset = cmu.value.data.datasets[tooltipModel.datasetIndex];
        const index = tooltipModel.dataIndex;
        const value = dataset.data[index];
        const label = dataset.label;

        // Personnaliser le texte de l'infobulle en fonction du dataset
        const tooltipText =
          dataset.label === 'Couverture Maladie Universelle'
            ? `CMU: ${value}%`
            : `Cotisations: ${value}`;

        const tooltip = document.getElementById('custom-tooltip');
        tooltip.innerHTML = tooltipText;
        tooltip.style.opacity = '1';
      },
    },
  },
});

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
  font-size: 75px;
  text-align: center;
}

.custom-tittle {
  font-size: 24px; /* Remplace cette valeur par celle que tu souhaites */
}

/* Rapport inégal */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px; /* Espace entre les cellules */
}

.arrow-up,
.arrow-down {
  transition-delay: 0.2s;
}

.text-up,
.text-down {
  transition-delay: 0.4s;
}

.votreSlide-enter-active .grid-item {
  opacity: 1;
  transform: translateY(0);
}

.grid-item {
  font-size: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  /*  animation: rotateIcon 1s ease-in-out; */
}

@keyframes rotateIcon {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
