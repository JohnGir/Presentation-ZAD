<template>
  <div>
    <div id="map" style="height: 60vh; width: 60vw"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';

import { addressPoints } from './markerDemo';
import icon from './icon.png';
import markerShadow from './marker-shadow.png';

export default {
  name: 'MyLeafletMap',
  data() {
    return {
      map: null,
    };
  },
  setup() {
    const initialMap = ref(null);

    const myIcon = L.icon({
      iconUrl:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAfElEQVR42mP8/wQAKCAAwAYsHg9QAAAABJRU5ErkJggg==', // Image transparente,
      iconSize: [30, 30], // Taille très petite pour être pratiquement invisible
      iconAnchor: [0, 0],
      popupAnchor: [0, 0],
    });

    onMounted(() => {
      initialMap.value = L.map('map', {
        zoomControl: true,
        zoom: 1,
        zoomAnimation: false,
        fadeAnimation: true,
        markerZoomAnimation: true,
      }).setView([2.5468545, -2.547099500000002], 2);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 12,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(initialMap.value);

      // Charge le GeoJSON du Maroc (fichier GeoJSON)
      fetch('src/consts/Maroc.json')
        .then((response) => response.json())
        .then((geojson) => {
          // Ajoute une couche GeoJSON avec une couleur rouge
          L.geoJSON(geojson, {
            style: {
              fillColor: '#FF0000',
              color: 'black',
              weight: 2,
            },
          }).addTo(initialMap.value);
        });

      // Charge le GeoJSON du Afrique du Sud (fichier GeoJSON)
      fetch('src/consts/Afrique du sud.json')
        .then((response) => response.json())
        .then((geojson) => {
          // Ajoute une couche GeoJSON avec une couleur rouge
          L.geoJSON(geojson, {
            style: {
              fillColor: '#FF0000',
              color: 'black',
              weight: 2,
            },
          }).addTo(initialMap.value);
        });


      // Charge le GeoJSON du Asie (fichier GeoJSON)
      fetch('src/consts/Asie.json')
        .then((response) => response.json())
        .then((geojson) => {
          // Ajoute une couche GeoJSON avec une couleur rouge
          L.geoJSON(geojson, {
            style: {
              fillColor: '#FF0000',
              color: 'black',
              weight: 2,
            },
          }).addTo(initialMap.value);
        });

        
      // Charge le GeoJSON du Amérique du nord (fichier GeoJSON)
      fetch('src/consts/Amerique du nord.json')
        .then((response) => response.json())
        .then((geojson) => {
          // Ajoute une couche GeoJSON avec une couleur rouge
          L.geoJSON(geojson, {
            style: {
              fillColor: '#FF0000',
              color: 'black',
              weight: 2,
            },
          }).addTo(initialMap.value);
        });

      // Ajoute le marqueur avec l'icône noire et circulaire pour l'Asie
      const markerAsia = L.marker([34.0479, 100.6197]).addTo(initialMap.value);
      markerAsia
        .bindPopup(
          '<strong>Asie</strong><br><span style="color: #FF0000; text-align: center; display: block;">325</span>'
        )
        .openPopup();

      // Ajoute le marqueur avec l'icône noire et circulaire pour l'Amérique du Nord
      const markerNorthAmerica = L.marker([47.1304, -100.3468]).addTo(
        initialMap.value
      );
      markerNorthAmerica
        .bindPopup(
          '<strong>Amérique du Nord</strong><br><span style="color: #FF0000; text-align: center; display: block;">156</span>'
        )
        .openPopup();

      // Ajouter un marqueur pour l'Afrique du Sud avec le chiffre 2
      const markerSouthAfrica = L.marker([-30.5595, 22.9375]).addTo(
        initialMap.value
      );
      markerSouthAfrica
        .bindPopup(
          '<strong>Afrique du Sud</strong><br><span style="color: #FF0000; text-align: center; display: block;">2</span>'
        )
        .openPopup();

      // Ajouter un marqueur pour le Maroc avec le chiffre 1
      const markerMorocco = L.marker([31.7917, -7.0926]).addTo(
        initialMap.value
      );
      markerMorocco
        .bindPopup(
          '<strong>Maroc</strong><br><span style="color: #FF0000; text-align: center; display: block;">1</span>'
        )
        .openPopup();
    });

    /*   L.marker([-33.1706317646544,23.317015544952604]).addTo(initialMap.value);
      L.marker([-32.1706317646544,22.317015544952604]).addTo(initialMap.value);
      L.marker([26.28312733619157,-9.500799034024471]).addTo(initialMap.value);

      const markers = L.markerClusterGroup();
 */
    /* addressPoints.forEach((element, index) => {
        const each_marker = new L.marker(
          [element.latitude, element.longitude],
          { icon: myIcon }
        ).bindPopup(
          `<strong> Hello Bangladesh! </strong> <br> I am a popup number ${index}`
        );
        markers.addLayer(each_marker);
      }); */
  },
};
</script>

<style scoped>
.popup-number {
  color: red;
}
#map {
  height: 100px;
}
</style>
