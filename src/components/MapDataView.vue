<template>
  <div class="row" style="width:90vw">
    <div id="content" class="col-8">
      <svg width="600" height="600">
        <g class="map"></g>
        <g class="bounding-box">
          <rect></rect>
        </g>
        <g class="centroid">
          <circle r="4"></circle>
        </g>
      </svg>
    </div>

    <div class="col-2">
      <h1 class="mapTitle" v-if="CurrentPays != null">
        {{ CurrentPaysName }}
      </h1>
      <h3 v-if="CurrentPays != null"><DynCounter :value="CurrentPaysData" :round="false"></DynCounter></h3>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref, nextTick, onUnmounted } from "vue";
import * as d3 from "d3";
import { PAYS } from "../consts/pays.js";
import chroma from "chroma-js";
import DynCounter from "./DynCounter.vue";

const props = defineProps({
  unit: String,
  data: Object,
});

var CurrentPaysName = computed(() => {
  return PAYS[CurrentPays.value.properties.postal];
});

var CurrentPaysData = computed(() => {
  return props.data[CurrentPays.value.properties.postal];
});

const CurrentPays = ref();

const alreadyIndom = ref(false);

const sc = chroma.scale(["yellow", "red"]);

var max = 0;

function percentageToColor(percentage, maxHue = 120, minHue = 0) {
  const hue = percentage * (maxHue - minHue) + minHue;
  return `hsl(${hue}, 100%, 50%)`;
}

onMounted(() => {
  nextTick((e) => {
    console.log("Mounted");
    let values = [];

    if (props.data) {
    Object.keys(props.data).forEach((c) => {
        values.push(props.data[c]);
    });
    };

    max = Math.max(...values);

    if (alreadyIndom.value === false) {
      console.log("Updated");
      d3.json("africa-outline-with-countries_6.geojson").then(function (json) {
        update(json);
        alreadyIndom.value = true;
      });
    }

    // REQUEST DATA

    //CurrentPays.value = null;
  });
});

onUnmounted(() => {
  let element = document.getElementsByTagName("path"),
    index;
  for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
  }
});

let projection = d3
  .geoMercator()
  .scale(400)
  .translate([200, 280])
  .center([0, 5]);

let geoGenerator = d3.geoPath().projection(projection);

function update(geojson) {
  let u = d3.select("#content g.map").selectAll("path").data(geojson.features);

  u.enter()
    .append("path")
    .attr("d", geoGenerator)
    .on("click", handleClick)
    .style("stroke", "white")
    .style("fill", function (d) {
      return color(d);
    });
}

function color(p) {
  let val = props.data[p.properties.postal];
  return sc(val / max).hex();
}

function handleClick(e, d) {
  console.log("clicked",d);
  CurrentPays.value = d;
}

function handleMouseover(e, d) {
  let pixelArea = geoGenerator.area(d);
  let bounds = geoGenerator.bounds(d);
  let centroid = geoGenerator.centroid(d);
  let measure = geoGenerator.measure(d);

  d3.select("#content .info").text(
    PAYS[d.properties.postal] +
      " (path.area = " +
      pixelArea.toFixed(1) +
      " path.measure = " +
      measure.toFixed(1) +
      ")"
  );

  d3.select("#content .bounding-box rect")
    .attr("x", bounds[0][0])
    .attr("y", bounds[0][1])
    .attr("width", bounds[1][0] - bounds[0][0])
    .attr("height", bounds[1][1] - bounds[0][1]);

  d3.select("#content .centroid")
    .style("display", "inline")
    .attr("transform", "translate(" + centroid + ")");
}
</script>

<style>
.mapTitle {
  font-family: "Canal", Helvetica, Arial;
  font-size: 70px;
}

#content .info {
  height: 20px;
}

#content .bounding-box rect {
  fill: none;
  stroke: #333;
  stroke-dasharray: 2, 1;
}

#content .centroid {
  display: none;
}

#content .centroid circle {
  fill: rgb(81, 0, 255);
}
</style>
