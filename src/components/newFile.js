import { ref, onMounted, onUnmounted } from 'vue';
import * as L from 'leaflet';
import { addressPoints } from './markerDemo';
import icon from './icon.png';
import markerShadow from './marker-shadow.png';

export default (await import('vue')).defineComponent({
name: 'MyLeafletMap',
data() {
return {
map: null,
};
},
setup() {
const initialMap = ref(null);

const myIcon = L.icon({
iconUrl: icon,
iconSize: [30, 30],
iconAnchor: [22, 94],
popupAnchor: [-3, -76],
shadowUrl: markerShadow,
shadowSize: [60, 30],
shadowAnchor: [22, 94],
});

onMounted(() => {
initialMap.value = L.map('map', {
zoomControl: true,
zoom: 1,
zoomAnimation: false,
fadeAnimation: true,
markerZoomAnimation: true,
}).setView([2.5468545, -2.547099500000002], 3);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 12,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(initialMap.value);

L.marker([-33.1706317646544, 23.317015544952604]).addTo(initialMap.value);
L.marker([-32.1706317646544, 22.317015544952604]).addTo(initialMap.value);
L.marker([26.28312733619157, -9.500799034024471]).addTo(initialMap.value);

const markers = L.markerClusterGroup();

addressPoints.forEach((element, index) => {
const each_marker = new L.marker(
[element.latitude, element.longitude],
{ icon: myIcon }
).bindPopup(
`<strong> Hello Bangladesh! </strong> <br> I am a popup number ${index}`
);
markers.addLayer(each_marker);
});

initialMap.value.addLayer(markers);
});

onUnmounted(() => {
beforeDestroy();
// Supprime la première carte lorsque le composant est détruit
this.map.remove();
}
),
        ;
}
});
