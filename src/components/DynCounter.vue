<template>
  <h1 class="test1">
    <b>{{ currentValue.value }} {{ unit }} </b> <br />{{ text }}
  </h1>
</template>

<script>
var container = {
  value: 0,
};
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DynCounter",

  methods: {
    visibilityChanged() {
      console.log("entered");
      this.currentValue.value = 0;
      this.$nextTick(() => {
        this.$anime({
          targets: this.currentValue,
          round: this.round,
          value: this.value,
          easing: "linear",
        });
      });
    },
  },

  setup() {
    return {
      currentValue: ref(container),
    };
  },
  watch: {
    value: function(v) {
      console.log(v)
      this.visibilityChanged();
    }
  },
  mounted() {
    this.visibilityChanged();
  },
  props: {
    round: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },

    value: {
      type: Number,
      default: 0,
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
