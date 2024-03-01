<template>    
    <div id="map"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    name: 'LeafletMap',
  data() {
    return {
      map: null,
    };
  },
    mounted() {
      // Création de la carte Leaflet
      this.map = L.map('map').setView([0, 0], 2); // Centre la carte sur le monde entier
  
      // Ajout d'une couche de tuiles OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
  
      // Ajout des marqueurs pour les pays spécifiques
      this.addMarker([31.7917, -7.0926], 'Maroc', 1); // Coordonnées approximatives du Maroc
      this.addMarker([-30.5595, 22.9375], 'Afrique du Sud', 2); // Coordonnées approximatives de l'Afrique du Sud
    },
    methods: {
      addMarker(coords, country, count) {
        // Création d'un marqueur avec un badge personnalisé
        const marker = L.marker(coords).addTo(this.map);
        marker.bindPopup(`<b>${country}</b><br>Nombre: ${count}`).openPopup();
      }
    },
    beforeUnmount() {
    // Supprime la première carte lorsque le composant est détruit
    this.map.remove();
  },
  }
  </script>
  
  <style scoped>
  #map {
    height: 180px;
  }
  </style>
  