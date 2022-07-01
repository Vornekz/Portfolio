<template>
  <section class="featured">
    <h3 class="featured__subtitle">
      TRIDENT FESTIVAL IN DUCHONKA, SLOVAKIA - december 31, 2022
    </h3>
    <h2 class="featured__title">
      FEATURED EVENT
    </h2>
    <div class="featured__main">
      <span class="timer">{{timeUntilEvent}}</span>
      <img class="featured__main-img" src="@/assets/img/homeFeatured-event-min.jpg" alt="background">
      <button class="featured__main-button">Buy Tickets</button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
import moment from "moment"

@Component ({
  name: 'HomeFeatured',
})

export default class HomeFeatured extends Vue {

  private event = moment("2023-01-01");
  private now = moment();
  private updateMoment: number = 0;

  mounted() {
    this.updateMoment = setInterval(() => {
      this.now = moment()
    }, 1000)
  }

  beforeDestroy() {
    clearInterval(this.updateMoment)
  }

  get timeUntilEvent():string {
    let seconds: number = this.event.diff(this.now, "seconds")
    let days: number = Math.floor(seconds / 86400);
    let hours: number = Math.floor((seconds % 86400) / 3600);
    let minutes: number = Math.floor((seconds % 86400 % 3600) / 60);
    let second: number = Math.floor(seconds % 86400 % 3600 % 60);
    return `${days}  :  ${hours}  :  ${minutes}  :  ${second}`
  }
}
</script>

<style lang="scss">
@import "~@/assets/mixins";
@import "~@/assets/vars";
.featured {
  padding: 100px $calcPadding;
  background: url("~@/assets/img/homeFeatured1-01-min.jpg") center no-repeat;
  background-size: cover;
  margin: 0 auto;
  color: $textCommonColor;

  @media screen and (max-width: 768px) {
    padding: 80px;
  }

  @media screen and (max-width: 520px) {
    padding: 30px;
  }

  &__subtitle {
    @include subtitles();
  }

  &__title {
    @include titles();
  }
  &__main {
    @include flexSettings(column, center);
    position: relative;
    padding-top: 70px;
    align-items: center;

    .timer {
      font-size: 45px;
      position: absolute;
      top: -50px;
      color: #4ac3ce;

      @media screen and (max-width: 768px) {
        font-size: 30px;
        top: -30px;
      }

      @media screen and (max-width: 520px) {
        font-size: 24px;
      }

      &:after {
        content: "day hour min sec";
        display: block;
        width: 110%;
        height: 100%;
        position: absolute;
        right: -20px;
        text-align: center;
        text-transform: capitalize;
        font-size: 43px;
        color: #4c5a86;

        @media screen and (max-width: 768px) {
          font-size: 30px;
        }

        @media screen and (max-width: 520px) {
          font-size: 24px;
        }
      }
    }

    &-img {
      width: 600px;
      height: 300px;
      object-fit: cover;
      @media screen and (max-width: 768px) {
        width: 400px;
        height: 250px;
      }

      @media screen and (max-width: 520px) {
        max-width: 300px;
      }
    }
    &-button {
      position: relative;
      z-index: 1;
      top: -40px;
      @include buttons();
      background-color: #4ac3ce;
      transition: .5s;

      &:hover {
        background-color: #fff;
        color: #4ac3ce;
      }
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 20px;
      width: 80%;
      height: 40%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 14%, transparent 14%, transparent 86%, rgba(255, 255, 255, 0.1) 86%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(to right, rgba(255, 255, 255, 0.1) 6px, rgba(255, 255, 255, 0.1) 17%, transparent 17%, transparent 83%, rgba(255, 255, 255, 0.1) 83%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%, transparent 100%, transparent 100%), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%, transparent 100%, transparent 100%);
      background-size: 100% 6px, 98.9% 6px, 6px 100%, 6px 100%;
      background-position: 0 0, 6px 100%, 0 6px, 100% 6px;
      background-repeat: no-repeat;

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
}
</style>
