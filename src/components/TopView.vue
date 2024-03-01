<template>
  <div class="row" style="width: 50vw;">
  <q-list
    class="list-big full-width"
    dark
    bordered
    separator
    v-for="i in items"
    :key="i.value"
  >
    <q-item clickable v-ripple class="full-width">
      <q-item-section avatar>
        <q-chip size="xl" text-color="white" color="warning" :label="i.rank" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ i.name }}</q-item-label>
        <q-item-label caption>{{ i.desc }}</q-item-label>
      </q-item-section>

      <q-item-section avatar>
        <q-avatar square>
          <country-flag :country="i.flag" size="medium" />
        </q-avatar>
      </q-item-section>
    </q-item>
  </q-list>
</div>
</template>

<script>
import { defineComponent } from "vue";
import CountryFlag from "vue-country-flag-next";

export default defineComponent({
  name: "TopView",
  components: {
    CountryFlag,
  },
  props: {
    items: {
      type: Object,
      required: true,
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

.list-big {
  font-family: "Canal", Helvetica, Arial;
  font-size: 30px;
}
</style>
