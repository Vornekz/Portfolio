<template>
  <section class="about-me">
    <div class="about-me__main">
      <div class="about-me__main-info me-info">
        <h2 class="me-info__title_mega">
          DJ Fox
        </h2>
        <h2 class="me-info__title">
          About Me
        </h2>
        <h3 class="me-info__subtitle">
          HOW IT ALL BEGAN
        </h3>
        <p class="me-info__text">
          I have been involved in music since I remember myself as my parents were rock musicians. After discovering
          House and Dubstep in 2008, I realized what my future should be connected with.
        </p>
        <p class="me-info__text">
          I took my current alias DJ Fox when I signed my first release in June 2010. Since then, I’ve been
          experimenting a lot with many genres of bass music and EDM until I’ve found the style I really like - Bass
          House. I started DJing in 2012 when I was invited to a local EDM festival. In my sets I combine Dubstep and
          Bass House with Drum & Bass while also doing occasional vocals in the studio.
        </p>
        <button class="me-info__button" @click="changeShowSlide">
          view my awards
        </button>
      </div>
      <div class="about-me__main-img">
        <img src="@/assets/img/aboutMe.jpg" alt="aboutMe">
      </div>
    </div>

    <div class="hide" :class="{'showSlide': this.showSlide === true}">
      <div  class="about-me__awards">
        <div class="about-me__awards-slider awards-slider">
          <time class="awards-slider__year">
            2011
          </time>
          <div class="awards-slider__info">
            <h3 class="awards-slider__info-title">
              CLUB MUSIC AWARDS – BEST NEW PRODUCER
            </h3>
            <p class="awards-slider__info-text">
              I got my first award in 2011, a few years after my professional career of EDM producer began.
            </p>
          </div>
        </div>
        <div class="about-me__awards-slider awards-slider">
          <time class="awards-slider__year">
            2012
          </time>
          <div class="awards-slider__info">
            <h3 class="awards-slider__info-title">
              DANCE MUSIC AWARDS - BEST SINGLE
            </h3>
            <p class="awards-slider__info-text">
              I dropped my first international single in 2012 and it got instant recognition as the best single.
            </p>
          </div>
        </div>
        <div class="about-me__awards-slider awards-slider">
          <time class="awards-slider__year">
            2013
          </time>
          <div class="awards-slider__info">
            <h3 class="awards-slider__info-title">
              IBIZA DANCE AWARDS - BEST HOUSE DJ
            </h3>
            <p class="awards-slider__info-text">
              In 2013, I was recognized as the Best House DJ. It was the result of releasing my first album.
            </p>
          </div>
        </div>
        <div class="about-me__awards-slider awards-slider">
          <time class="awards-slider__year">
            2015
          </time>
          <div class="awards-slider__info">
            <h3 class="awards-slider__info-title">
              DJ AWARDS – BEST FEMALE PRODUCER
            </h3>
            <p class="awards-slider__info-text">
              2015 was a breakthrough year for me as I became officially known as the Best Female EDM Producer.
            </p>
          </div>
        </div>
        <div class="about-me__awards-slider awards-slider">
          <time class="awards-slider__year">
            2019
          </time>
          <div class="awards-slider__info">
            <h3 class="awards-slider__info-title">
              INTERNATIONAL EDM AWARDS - BEST ALBUM
            </h3>
            <p class="awards-slider__info-text">
              My second album, on which I worked for a long time, was awarded “Best Album 2019” title.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from 'vue-property-decorator';

@Component({
  name: "AboutMe",

})

export default class AboutMe extends Vue {
  private showSlide: boolean = false;

  changeShowSlide():boolean {
    return this.showSlide = !this.showSlide
  }

}
</script>

<style lang="scss">
@import "~@/assets/mixins";
@import "~@/assets/vars";

.about-me {
  background-color: #222d4f;
  color: $textCommonColor;

  &__main {
    @include flexSettings(row, space-between);
    padding: 100px $calcPadding;

    @media screen and (max-width: 1200px) {
      padding: 50px;
    }

    @media screen and (max-width: 992px) {
      flex-direction: column;
      padding: 30px;
    }

    .me-info {
      position: relative;
      width: 50%;
      @media screen and (max-width: 992px) {
        order: 2;
        width: 100%;
        margin-top: 30px;
      }

      &__title {
        font-family: SourceCodePro-Medium, sans-serif;
        position: absolute;
        top: 40px;
        left: 20px;
        font-size: 50px;
        text-transform: uppercase;

        @media screen and (max-width: 1200px) {
          font-size: 40px;
          top: 20px;
        }

        &_mega {
          margin-bottom: 50px;
          font-family: SourceCodePro-Medium, sans-serif;
          font-size: 130px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.1);

          @media screen and (max-width: 1200px) {
            font-size: 80px;
          }
        }
      }

      &__subtitle {
        margin-bottom: 20px;
        font-family: SourceCodePro-Bold, sans-serif;
        font-size: 24px;
        text-transform: uppercase;

        &:before {
          content: "";
          display: inline-block;
          position: relative;
          bottom: 7px;
          width: 70px;
          height: 3px;
          background-color: #4ac3ce;
        }
      }

      &__text {
        margin-bottom: 30px;
        line-height: 1.5;
      }

      &__button {
        @include buttons();
        height: 60px;
        border: none;
        background-color: #4ac3ce;
        transition: .5s;

        &:hover {
          background-color: #fff;
          color: #4ac3ce;
        }
      }
    }

    &-img {
      position: relative;
      z-index: 0;
      width: 40%;
      max-width: 500px;

      @media screen and (max-width: 1200px) {
        height: 450px;
      }

      @media screen and (max-width: 992px) {
        order: 1;
        width: 350px;
        margin: 0 auto;
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        top: 5%;
        right: -10%;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        transition: .4s;
      }

      &:hover {
        &:after {
          top: -3%;
          right: 3%;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .hide {
    position: absolute;
    z-index: -1 ;
    width: 90%;
    margin: 0 auto;
    opacity: 0;
  }

  .about-me__awards {
    height: 330px;
    padding: 40px 0 70px;
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100vw;
      bottom: 80px;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.25);
    }

    .slick-list {
      height: 100%;
    }

    .slick-track {
      height: 100%;
    }

    .slick-slide > div {
      height: 100%;
    }

    .slick-arrow {
      position: absolute;
      bottom: 20px;
      @include flexSettings(row, center);
      align-items: center;
      height: 40px;
      width: 60px;
      border: none;
      font-size: 0;
      background: transparent;
      color: #ffffff;

    }

    .slick-next {
      right: 0;

      &:before {
        content: '\261B';
        font-size: 30px;
        right: 0;
      }
    }

    .slick-prev {
      left: 0;

      &:before {
        content: '\261A';
        font-size: 30px;
        right: 0;
      }
    }

    .awards-slider {
      display: flex !important;
      height: 100%;
      position: relative;
      padding: 0 20px 20px;

      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #4ac3ce;
      }

      &__year {
        margin-right: 20px;
        color: #4ac3ce;

        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 20px;
          left: -10px;
          transform: translateX(50%);
          width: 40px;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.25);
        }

        &:after {
          content: "";
          display: block;
          position: absolute;
          top: 20px;
          left: 9px;
          transform: translateX(50%);
          width: 1px;
          height: 80%;
          background-color: rgba(255, 255, 255, 0.25);
        }
      }

      &__info {
        height: 140px;

        &-title {
          margin-bottom: 20px;
          font-family: SourceCodePro-Bold, sans-serif;
          font-size: 18px;
          text-transform: uppercase;
          line-height: 1.3;
          letter-spacing: 2px;
          color: $textCommonColor;
        }

        &-text {
          color: #404d76;
          font-size: 15px;
          letter-spacing: 1px;
        }
      }
    }
  }

  .showSlide {
    position: relative;
    z-index: 0;
    opacity: 1;
  }
}
</style>