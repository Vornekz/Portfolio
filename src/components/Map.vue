<template>
  <gmap-map
      :zoom="12"
      :center="center"
      style="width:100%;  height: 100%;"
  >
  </gmap-map>
</template>

<script>
import Vue from "vue"
import {Component, Prop, Watch} from 'vue-property-decorator';
import * as VueGoogleMaps from "vue2-google-maps"


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBKHnfB2_V4mBbsjNe9Zm04KFmHjgh7s4Q',
    libraries: 'places',
  },
  installComponents: true
})


@Component({
  name: "Map"
})

export default class Map extends Vue {
  center = {
    lat: 50.45725152096439,
    lng: 30.517922205908384
  }

  mounted() {
    this.locateGeoLocation();
  }

  locateGeoLocation() {
    navigator.geolocation.getCurrentPosition(res => {
      this.center = {
        lat: res.coords.latitude,
        lng: res.coords.longitude
      };
    });
  }
}

</script>

<style lang="scss">
</style>