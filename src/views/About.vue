<template>
  <section>
    <AboutHeader :slider="slider"/>
    <AboutMe/>
  </section>
</template>

<script lang="ts">
import AboutHeader from "@/components/About/AboutHeader.vue";
import AboutMe from "@/components/About/AboutMe.vue";
import Vue from "vue";
import {Component, Prop} from 'vue-property-decorator';

@Component({
  name: "About",
  components: {
    AboutHeader,
    AboutMe
  }
})

export default class About extends Vue {
  @Prop({type: Function, required: true}) readonly slider: Function | undefined
}
</script>

<style lang="scss">

</style>