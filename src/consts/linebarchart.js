
const cmu = ref({
  type: "bar",
  data: {
    labels: ["Rwanda", "Côte d'Ivoire"],
    datasets: [
      {
        label: "Couverture Maladie Universelle",
        fill: false,
        tension: 0.1,
        type: 'line', // Ajoutez cette ligne pour spécifier le type de graphique
        backgroundColor: [
          transparentize('white', 0.2),
          transparentize('white', 0.2),
        ],
        borderColor: [
          'blue', // Couleur de la ligne de couverture maladie universelle
          'blue',
        ],
        borderWidth: 2, // Épaisseur de la ligne
        yAxisID: 'couverture', // ID de l'axe Y pour la couverture maladie universelle
        data: [90, 30], // Ajoutez les valeurs de couverture pour le Rwanda et la Côte d'Ivoire
      },
      {
        label: "Cotisations",
        fill: false,
        tension: 0.1,
        backgroundColor: [
          transparentize('red', 0.2),
          transparentize('red', 0.2),
        ],
        yAxisID: 'cotisations', // ID de l'axe Y pour les cotisations
        data: [1444, 1000], // Ajoutez les valeurs des cotisations pour le Rwanda et la Côte d'Ivoire
      },
    ],
  },
  options: {
    legend: {
      display: true,
      labels: {
        text: "Les pays",
      },
    },
    title: {
      display: true,
      text: "% / Cotisations",
    },
    scales: {
      y: [
        {
          id: 'couverture', // ID de l'axe Y pour la couverture maladie universelle
          type: 'linear',
          position: 'right',
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
          },
        },
        {
          id: 'cotisations', // ID de l'axe Y pour les cotisations
          type: 'linear',
          position: 'left',
          beginAtZero: true,
          max: 2500,
          ticks: {
            stepSize: 500,
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
        anchor: 'end',
        align: 'top',
        formatter: (value, context) => {
          if (context.dataset.label === "Couverture Maladie Universelle") {
            return value + "%";
          }
          return value; // Laissez les cotisations telles quelles
        },
      },
    },
  },
});
