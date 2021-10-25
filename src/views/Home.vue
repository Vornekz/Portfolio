<template>
  <section>
    <HomeHeader/>
    <HomeFeatured/>
    <HomeVideos/>
    <HomePhoto/>
    <HomeNews/>
  </section>
</template>

<script lang="ts">
import HomeHeader from '@/components/Home/HomeHeader.vue';
import HomeFeatured from "@/components/Home/HomeFeatured.vue";
import HomeVideos from "@/components/Home/HomeVideos.vue";
import HomePhoto from "@/components/Home/HomePhoto.vue";
import HomeNews from "@/components/Home/HomeNews.vue";
import Vue from "vue";
import {Component} from 'vue-property-decorator';

@Component ({
  name: 'Home',
  components: {
    HomeHeader,
    HomeFeatured,
    HomeVideos,
    HomePhoto,
    HomeNews
  },
})

export default class Home extends Vue {

}

</script>

<style lang="scss">

</style>