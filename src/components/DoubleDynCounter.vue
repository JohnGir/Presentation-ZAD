<template>
  <h1 class="test1">
    <b
      >{{ pretext }} {{ currentValue.value }} {{ unit }} {{ text1 }}
      {{ currentValue2.value }} {{ unit }}</b
    >
    <br />{{ text2 }}
  </h1>
</template>

<script>
var container = {
  value: 0,
};
var container2 = {
  value: 0,
};
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DoubleDynCounter",

  methods: {
    visibilityChanged() {
      console.log("entered");
      this.currentValue.value = 0;
      this.$nextTick(() => {
        this.$anime({
          targets: this.currentValue,
          round: this.round,
          value: this.value1,
          easing: "linear",
        });
        this.$anime({
          targets: this.currentValue2,
          round: this.round,
          value: this.value2,
          easing: "linear",
        });
      });
    },
  },

  setup() {
    return {
      currentValue: ref(container),
      currentValue2: ref(container2),
    };
  },
  mounted() {
    this.visibilityChanged();
  },
  props: {
    round: {
      type: Boolean,
      default: true,
    },
    text1: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },

    value1: {
      type: Number,
      default: 0,
    },
    value2: {
      type: Number,
      default: 0,
    },
    pretext: {
      type: String,
      default: "",
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

.test1 {
  font-family: "Canal", Helvetica, Arial;
  font-size: 100px;
}
</style>
