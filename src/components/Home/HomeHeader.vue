<template>
  <section class="home">
    <div class="home__sliders">
      <div class="home__sliders-slider first-slide">
        <div class="slider">
          <h3 class="slider__subtitle animate__animated animate__fadeInUp">
            IT’S NOT JUST LOVE FOR MUSIC
          </h3>
          <h1 class="slider__title animate__animated animate__fadeInUp">
            It’s My Passion
          </h1>
          <button class="slider__button animate__animated animate__fadeInUp" @click="scrollTo()">
            See All Events
          </button>
        </div>
      </div>
      <div class="home__sliders-slider  second-slide">
        <div class="slider">
          <h3 class="slider__subtitle ">
            I MAKE MUSIC TO FEEL & ENJOY
          </h3>
          <h1 class="slider__title ">
            Your #1 DJ
          </h1>
          <button class="slider__button " @click="scrollTo()">
            See All Events
          </button>
        </div>
      </div>
      <div class="home__sliders-slider  third-slide">
        <div class="slider">
          <h3 class="slider__subtitle ">
            I INTRODUCE NEW STYLE OF DJING
          </h3>
          <h1 class="slider__title ">
            Top DJing Skills
          </h1>
          <button class="slider__button" @click="scrollTo()">
            See All Events
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import $ from "jquery"
import Vue from "vue"
import {Component} from 'vue-property-decorator';

@Component({
  name: 'HomeHeader',
})

export default class HomeHeader extends Vue {
  scrollTo() {
    const homeEl = document.querySelector(".home") as HTMLDivElement;
    let homeEnd: number = homeEl.scrollHeight;
    window.scroll(0, homeEnd);
  }
}
</script>

<style lang="scss">
@import "~@/assets/mixins";
@import "~@/assets/vars";

.home {
  height: 100vh;
  background-color: #92909f;

  &__sliders {
    height: 100%;
    width: 100%;

    .slick-list {
      height: 100%;
    }

    .slick-track {
      height: 100%;
    }

    .slick-slide > div {
      height: 100%;
    }

    .slick-dots {
      position: absolute;
      top: 50%;
      left: auto;
      right: 80px;
      bottom: auto;
      transform: translateY(-50%);
      width: auto;
      display: flex;
      flex-direction: column;
      counter-reset: li;

      button {
        display: none;
      }

      li {
        width: 11px;
        height: 11px;
        margin: 10px 0;
        display: inline-block;
        border-radius: 100%;
        transition: .5s;
        background-color: #abb8cd;
        cursor: pointer;

        &:before {
          content: counter(li, decimal);
          counter-increment: li;
          position: absolute;
          transform: translateY(-25%);
          left: -20px;
          color: $textCommonColor;
          transition: .4s;
          opacity: 0;
        }

        &:after {
          content: "";
          position: absolute;
          left: 15px;
          transform: translateY(500%);
          display: block;
          width: 75px;
          height: 1px;
          background-color: #fff;
          opacity: 0;
        }
      }

      li.slick-active {
        background: #fff;

        &:before {
          opacity: 1;
        }

        &:after {
          opacity: 1;
        }

      }
    }

    &-slider {
      height: 100%;

      .slider {
        height: 100%;
        @include flexSettings(column, center);
        align-items: center;
        color: $textCommonColor;

        &__subtitle {
          font-family: "SourceCodePro-Medium", sans-serif;
          font-weight: 500;
          margin-bottom: 40px;
          font-size: 18px;
          text-transform: uppercase;
          opacity: 0;

        }

        &__title {
          font-family: NothingYouCouldDo-Regular, sans-serif;
          margin-bottom: 40px;
          text-align: center;
          font-size: 100px;
          opacity: 0;

        }

        &__button {
          position: relative;
          @include buttons();
          transition: 1.6s;
          opacity: 0;

          &:before {
            content: "";
            position: absolute;
            top: -7px;
            left: -7px;
            display: block;
            opacity: 0;
            width: 230px;
            height: 70px;
            border: 5px solid rgba(74, 195, 206, 0.72);
            border-radius: 50px;
            transition: 1.4s;
          }

          &:after {
            content: "";
            position: absolute;
            top: -12px;
            left: -12px;
            display: block;
            opacity: 0;
            width: 240px;
            height: 80px;
            border: 5px solid rgba(74, 195, 206, 0.45);
            border-radius: 55px;
            transition: 1s;
          }

          &:hover {
            background-color: #4ac3ce;
            border-color: transparent;

            &:after, &:before {
              opacity: 1;
            }
          }
        }
      }
    }

    .first-slide {
      background: url("~@/assets/img/homeHeader1-01-min.jpg") center no-repeat;
      background-size: cover;
    }

    .second-slide {
      background: url("~@/assets/img/homeHeader1-02-min.jpg") center no-repeat;
      background-size: cover;
    }

    .third-slide {
      background: url("~@/assets/img/homeHeader1-03-min.jpg") center no-repeat;
      background-size: cover;
    }
  }
}
</style>