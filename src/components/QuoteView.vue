<template>
  <div class="row">
    <div class="col self-center">
  <q-img
    :src="src"
    :style="'width:' + cwidth"
    :class="{ border: border }"
  ></q-img></div>
  <div class="col  self-center">
  <h3><blockquote>{{quote}}</blockquote></h3>


<q-img
    :src="logo"
    :style="('width:100px')"

  ></q-img>
</div>
</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuoteView",
  computed: {},
  props: {
    src: {
      type: String,
      required: true,
    },

    logo: {
      type: String,
      default: "",
    },
    quote: {
      type: String,
      default: "75wv;",
    },
    cwidth: {
      type: String,
      default: "75wv;",
    },
    border: {
      type: Boolean,
      default: true,
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

.border {
  border-block-color: red;
  border: 5px solid white;
  border-radius: 13px;
}

.mtitle {
  font-family: "Canal", Helvetica, Arial;
  font-size: 100px;
}
blockquote {
  font-family: "Canal";
  src: local("Canal"),
    url(../assets/Canal-DINNextLTPro-BoldCond.ttf) format("truetype");
  border-left: 12px solid rgb(255, 255, 255);
  padding-left: 16px;
}
@supports ( hanging-punctuation: first) {
  blockquote {
    text-indent: 0;

    hanging-punctuation: first;
  }
}

blockquote::before {
    content: open-quote;
}
blockquote::after {
    content: close-quote;
}
blockquote {
    quotes: "« " " »" "‘" "’";
}
</style>
