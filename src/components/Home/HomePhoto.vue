<template>
  <section class="photos">
    <div class="photos__photo">
      <div class="photos__photo-img">
        <img src="@/assets/img/home-photo-1-min.jpg" alt="photo-1">
      </div>
      <div class="photos__photo-about photo-about">
        <h4 class="photo-about__title">
          Dream Village
        </h4>
        <time class="photo-about__subtitle">Dec 31, 2021</time>
      </div>
    </div>
    <div class="photos__photo">
      <div class="photos__photo-img">
        <img src="@/assets/img/home-photo-2-min.jpg" alt="photo-2">
      </div>
      <div class="photos__photo-about photo-about">
        <h4 class="photo-about__title">
          ULTRA MUSIC FESTIVAL
        </h4>
        <time class="photo-about__subtitle">Dec 31, 2021</time>
      </div>
    </div>
    <div class="photos__photo">
      <div class="photos__photo-img">
        <img src="@/assets/img/home-photo-3-min.jpg" alt="photo-3">
      </div>
      <div class="photos__photo-about photo-about">
        <h4 class="photo-about__title">
          electric Zoo
        </h4>
        <time class="photo-about__subtitle">Dec 31, 2021</time>
      </div>
    </div>
    <div class="photos__photo">
      <div class="photos__photo-img">
        <img src="@/assets/img/home-photo-4-min.jpg" alt="photo-4">
      </div>
      <div class="photos__photo-about photo-about">
        <h4 class="photo-about__title">
          life in color festival
        </h4>
        <time class="photo-about__subtitle">Dec 31, 2021</time>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component ({
  name: "HomePhoto"

})
export default class HomePhoto extends Vue{

}
</script>

<style lang="scss">
@import "~@/assets/mixins";
@import "~@/assets/fonts";
@import "~@/assets/vars";

.photos {
  display: grid;
  grid-template:minmax(auto, 300px) / 1fr 1fr 1fr 1fr;
  &__photo {
    height: 100%;
    position: relative;
    &-img {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .photo-about {
      @include flexSettings(column, center);
      align-items: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(28, 39, 72, 0.68);
      color: $textCommonColor;
      opacity: 0;
      transition: 1s;

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 20px;
        left: 20px;
        width: 90%;
        height: 90%;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 8%, transparent 8%, transparent 92%, rgba(255, 255, 255, 0.5) 92%, rgba(255, 255, 255, 0.5) 100%), linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 8%, transparent 8%, transparent 92%, rgba(255, 255, 255, 0.5) 92%, rgba(255, 255, 255, 0.5) 100%), linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 11%, transparent 11%, transparent 89%, rgba(255, 255, 255, 0.5) 89%, rgba(255, 255, 255, 0.5) 100%), linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 11%, transparent 11%, transparent 89%, rgba(255, 255, 255, 0.5) 89%, rgba(255, 255, 255, 0.5) 100%);
        background-size: 100% 2px, 100% 2px, 2px 100%, 2px 100%;
        background-position: 0 0, 0 100%, 0 0, 100% 0;
        background-repeat: no-repeat;
      }

      &__title {
        margin-bottom: 30px;
        width: 260px;
        text-align: center;
        position: relative;
        font-family: SourceCodePro-Bold, sans-serif;
        font-size: 18px;
        text-transform: uppercase;

        &:after {
          content: "";
          display: block;
          width: 50px;
          height: 3px;
          position: absolute;
          top: 35px;
          left: 40%;
          background-color: #4ac3ce;
        }
      }

      &__subtitle {
        text-transform: uppercase;
      }
    }
    &:hover {
      .photo-about {
        opacity: 1;
      }
    }
  }

}
</style>