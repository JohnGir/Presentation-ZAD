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
          <p style="font-size: 100px; text-align: center">
            Couverture sanitaire universelle, <br />où en est-on ?
          </p>
          <q-icon name="fa-solid fa-syringe" size="10rem"></q-icon>
        </q-carousel-slide>

        <q-carousel-slide name="q1" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-syringe" /> &nbsp;Depuis 2001, chaque Etat
            s’engage
            <p>à allouer à la santé</p>
          </h1>
          <dyn-counter
            :value="15"
            unit="%"
            :round="10"
            style="font-size: 100px"
          ></dyn-counter>
          <p style="font-size: 70px">du budget national</p>
        </q-carousel-slide>

        <!-- <q-carousel-slide name="q6" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-syringe" /> &nbsp;Budgets nationaux
            alloués à la santé
          </h1>
          <map-view></map-view>
        </q-carousel-slide> -->

        <q-carousel-slide name="q7" class="column no-wrap flex-center">
          <h1 class="mtitle">
            <q-icon name="fa-solid fa-syringe" /> &nbsp;Budgets nationaux
            alloués à la santé
          </h1>
          <map-view></map-view>

          <div class="circles-container">
            <!-- Pastille rouge pour le Rwanda -->
            <div class="circle red"></div>
            <p>Le Rwanda 15%</p>

            <!-- Pastille avec la couleur #c7c583 pour Mali, Namibie et Niger -->
            <div class="circle" style="background-color: #c7c583"></div>
            <p>Le Niger 2,3%</p>

            <div class="circle" style="background-color: #c7c583"></div>
            <p>La Namibie 4,4%</p>

            <div class="circle" style="background-color: #c7c583"></div>
            <p>Le Mali 1,5%</p>

            <div class="circle" style="background-color: #c7c583"></div>
            <p>Le Lesotho 6,1%</p>
          </div>
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
            style="font-size: 130px"
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
          <h1 class="mtitle" style="position: relative; top: -50px">
            <q-icon name="fa-solid fa-syringe" /> &nbsp;Des choix à faire
          </h1>
          <div class="grid-container" style="position: relative; top: -60px">
            <div class="grid-item arrow-up fade-in">
              <q-icon name="fas fa-arrow-up" size="6rem" color="green" />
            </div>
            <div class="grid-item text-up fade-in">
              <q-icon name="fas fa-arrow-down" size="6rem" color="red" />
            </div>
            <div class="grid-item arrow-down fade-in">
              <p style="font-size: 50px">Plus les soins pris en charge</p>
              <b style="font-size: 50px">sont coûteux</b>
            </div>
            <div class="grid-item text-down fade-in">
              <p style="font-size: 50px">Moins la CSU est efficace</p>
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
import 'chartjs-plugin-annotation';
import MapView from 'src/components/MapView.vue';

const slide = ref('style');

const DATA_COUNT = 7;

const labels = ['1444', '1000'];

const datasets = [
  {
    label: 'CMU Rwanda',
    data: [80, 30],
    backgroundColor: ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.8)'],
    borderWidth: 2,
  },
  {
    label: "CMU Côte d'Ivoire",
    data: [1000, 1444],
    backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(255, 0, 0, 0.8)'],
    borderWidth: 2,
  },
];

const config = {
  type: 'bar',
  data: {
    labels: labels,
    datasets: datasets,
  },
  options: {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: "Couverture maladie universelle Rwanda Côte d'ivoire",
      },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  },
};

const cmu1 = ref({
  type: 'bar',
  data: {
    labels: ['30%', '80%'],
    datasets: [
      {
        label: 'Rwanda',
        fill: false,
        tension: 0.1,
        backgroundColor: [
          transparentize('white', 0.2),
          transparentize('white', 0.2),
        ],
        borderWidth: 2, // Épaisseur de la ligne
        xAxisID: 'cmu', // ID de l'axe X pour la couverture maladie universelle
        data: [1000, 1444], // Ajoutez les valeurs de couverture pour le Rwanda et la Côte d'Ivoire
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
      x: [
        {
          id: 'cmu1', // ID de l'axe X pour la couverture maladie universelle
          type: 'linear',
          position: 'bottom',
          beginAtZero: true,
          max: 100, // Ajustez en fonction de vos besoins
          ticks: {
            stepSize: 10,
          },
        },
      ],
      y: {
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
          if (context.dataset.label === 'Rwanda') {
            return value + 'F';
          }
          return value;
        },
      },
    },
    tooltips: {
      enabled: false,
      custom: (tooltipModel) => {
        const dataset = cmu1.value.data.datasets[tooltipModel.datasetIndex];
        const index = tooltipModel.dataIndex;
        const value = dataset.data[index];
        const label = dataset.label;

        // Personnaliser le texte de l'infobulle en fonction du dataset
        const tooltipText = `Cotisations: ${value}F`;

        const tooltip = document.getElementById('custom-tooltip');
        tooltip.innerHTML = tooltipText;
        tooltip.style.opacity = '1';
      },
    },
  },
});

// Créez le graphique

const cmu = ref({
  type: 'line',
  data: {
    labels: [''],
    datasets: [
      {
        label: "Côte d'ivoire",
        borderColor: 'rgba(255, 255, 255)',
        data: [
          { x: 0, y: 1000 },
          { x: 0.7, y: 1000 },
        ],
        fill: true, // Activer le remplissage
        backgroundColor: 'rgba(255, 255, 255)', // Couleur de remplissage
      },
      {
        label: 'Rwanda',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [
          { x: 0, y: 1444 },
          { x: 0.9, y: 1444 },
        ],
        fill: true, // Activer le remplissage
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Couleur de remplissage
      },
      {
        label: 'Vertical 1',
        borderColor: 'rgba(255, 255, 255)', // Couleur transparente
        data: [
          { x: 0.3, y: 0 },
          { x: 0.3, y: 1000 },
        ],
        fill: false,
        hidden: true, // Masquer le dataset
      },
      {
        label: 'Vertical 2',
        borderColor: 'rgba(255, 99, 132, 1)', // Couleur transparente
        data: [
          { x: 0.9, y: 0 },
          { x: 0.9, y: 1444 },
        ],
        fill: false,
        hidden: true, // Masquer le dataset
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          max: 1,
          callback: (value) => value * 100 + '%',
        },
        title: {
          display: true,
          text: 'Pourcentage de couverture',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Montant en Fcfa',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          filter: function (legendItem, chartData) {
            return (
              legendItem.text !== 'Vertical 1' &&
              legendItem.text !== 'Vertical 2'
            );
          },
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
  opacity: 0; /* Initial opacity set to 0 */
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in {
  animation: fade 1s ease-in-out forwards; /* Utilisez une animation de fondu personnalisée */
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Délais d'animation pour chaque élément */
.arrow-up {
  animation-delay: 0.5s;
}

.text-up {
  animation-delay: 1s;
}

.arrow-down {
  animation-delay: 1.5s;
}

.text-down {
  animation-delay: 2s;
}
/* Slide 2 */
.circles-container {
  display: flex;
  align-items: center;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px;
}

.red {
  background-color: red;
}
</style>
