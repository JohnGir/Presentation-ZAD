<template>
  <div
    class="column no-wrap flex-center"
    :style="'height:' + cheight + '; width:' + cwidth"
  >
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default defineComponent({
  name: "ChartsView",
  setup() {},
  mounted() {
    Chart.defaults.font.size = 16;
    Chart.defaults.color = "#f0f0f5";
    let ctx = this.$refs.chart;
    new Chart(ctx, this.data);
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
    cwidth: {
      type: String,
      default: "80%",
    },
    cheight: {
      type: String,
      default: "70%",
    },
  },
});
</script>

<style scoped>
@font-face {
  font-family: "Canal";
  src: local("Canal"),
    url(../assets/Canal-DINNextLTPro-BoldCond.ttf) format("truetype");
}

.mtitle {
  font-family: "Canal", Helvetica, Arial;
  font-size: 100px;
}
</style>
