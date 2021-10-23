<template>
  <div id="app">
    <header class="header">
      <div class="header__logo" v-on:click="homeSlider">
        <router-link to="/">
          <img src="./assets/img/logo.png" alt="logo">
        </router-link>
      </div>
      <ul class="header__menu menu">
        <li class="menu__list" id="Home" :class="{ 'hover':$route.name === 'Home' }" v-on:click="homeSlider">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li class="menu__list" id="About" :class="{ 'hover':$route.name === 'About' }">
          <router-link to="/About">
            About
          </router-link>
        </li>
        <li class="menu__list" id="Contacts" :class="{ 'hover':$route.name === 'Contacts' }">
          <router-link to="/Contacts">
            Contacts
          </router-link>
        </li>
      </ul>
      <div class="header__social social">
        <a href="" class="social__link">
          <svg class="social__link-svg">
            <use xlink:href="./assets/sprite.svg#facebook"></use>
          </svg>
        </a>
        <a href="" class="social__link">
          <svg class="social__link-svg">
            <use xlink:href="./assets/sprite.svg#twitter"></use>
          </svg>
        </a>
        <a href="" class="social__link">
          <svg class="social__link-svg">
            <use xlink:href="./assets/sprite.svg#instagram"></use>
          </svg>
        </a>
      </div>
    </header>

    <router-view/>

    <section class="tour">
      <div class="tour__map">
        <Map/>
      </div>
      <div class="tour__date">
        <h3 class="tour__date-title">Tour Date</h3>
        <div class="tour__date-main date-main">
          <div class="date-main__block">
            <p class="date-main__block-time">25 <br> <span>Feb</span></p>
            <p class="date-main__block-info">ULTRA MUSIC FESTIVAL <br> <span>Miami, USA</span></p>
            <button class="date-main__block-button">Bue tickets</button>
          </div>
          <div class="date-main__block">
            <p class="date-main__block-time">12 <br> <span>Mar</span></p>
            <p class="date-main__block-info">EDC ORLANDO <br> <span>Tinkler Field, Orlando, USA</span></p>
            <button class="date-main__block-button">Bue tickets</button>
          </div>
          <div class="date-main__block">
            <p class="date-main__block-time">24 <br> <span>Apr</span></p>
            <p class="date-main__block-info">ELECTRIC ZOO <br> <span>Randall’s, Island Park, New York, USA</span></p>
            <button class="date-main__block-button">Bue tickets</button>
          </div>
          <div class="date-main__block">
            <p class="date-main__block-time">17 <br> <span>Jul</span></p>
            <p class="date-main__block-info">NOCTURNAL WONDERLAND <br> <span>Glen Helen National Park, USA</span></p>
            <button class="date-main__block-button">Bue tickets</button>
          </div>
          <div class="date-main__block">
            <p class="date-main__block-time">18 <br> <span>Aug</span></p>
            <p class="date-main__block-info">COACHELLA <br> <span>Empire Polo Club, Indio, USA</span></p>
            <button class="date-main__block-button">Bue tickets</button>
          </div>
          <div class="date-main__block">
            <p class="date-main__block-time">12 <br> <span>Oct</span></p>
            <p class="date-main__block-info">LET IT ROLL <br> <span>Milovice, Czech Republic</span></p>
            <button class="date-main__block-button">Bue tickets</button>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p class="footer__text">
        DJ FOX © 2021 \ ALL RIGHTS RESERVED
      </p>
      <router-link to="/Contacts" class="footer__link">
        <svg class="footer__link-svg">
          <use xlink:href="./assets/sprite.svg#mail"></use>
        </svg>
        <p>Contact Me</p>
      </router-link>
    </footer>

  </div>
</template>

<script lang="ts">
import $, {ready} from "jquery"
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'animate.css/animate.min.css';
import Map from "@/components/Map.vue";
import Vue from "vue"
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component({
  name: "App",
  components: {
    Map
  }
})

export default class App extends Vue {
  mounted() {
    this.homeSlider()
    $(window).scroll(() => {
      if (pageYOffset === 0) {
        $(".header").removeClass("scroll")
      } else {
        $(".header").addClass("scroll")
      }
    })
  }

  homeSlider() {
    $(".home__sliders").slick({
      lazyLoad: "ondemand",
      arrows: false,
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 7000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    })
    $('.home__sliders').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      let slide = $(".slider");
      slide.eq(nextSlide).children().addClass("animate__animated animate__fadeInUp");
      slide.eq(currentSlide).children().removeClass("animate__animated animate__fadeInUp");
    })
  }

}

</script>

<style lang="scss">
@import "assets/fonts";
@import "assets/mixins";
@import "assets/vars";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  font-family: SourceCodePro-Regular, sans-serif;
  font-size: 14px;

  .header {
    @include flexSettings(row, space-between);
    position: fixed;
    z-index: 2;
    width: 100%;
    align-items: center;
    padding: 20px $calcPadding;
    font-family: SourceCodePro-Bold, sans-serif;
    line-height: 1.2;
    letter-spacing: 3px;
    transition: .4s;

    &__logo {
      width: 150px;
      height: 25px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .menu {
      @include flexSettings(row, space-evenly);
      flex-basis: 40%;

      &__list {
        position: relative;
        list-style: none;

        &:after {
          content: "";
          display: block;
          width: 100%;
          margin-top: 10px;
          height: 2px;
          background-color: #4ac4cf;
          transition: .5s;
          opacity: 0;

        }

        &:before {
          content: "";
          position: absolute;
          top: 20px;
          right: 0;
          display: block;
          width: 100%;
          height: 2px;
          background-color: #4ac4cf;
          transition: .5s;
          opacity: 0;
        }

        &:hover, {
          &:after {
            width: 60%;
            opacity: 1;
          }

          &:before {
            width: 80%;
            opacity: 1;
          }
        }


        a {
          text-decoration: none;
          text-transform: uppercase;
          color: $textCommonColor;
        }
      }

    }

    .social {
      @include flexSettings(row, space-between);
      align-items: center;
      width: 100px;

      &__link {
        @include flexSettings(row, center);
        align-items: center;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        transition: .5s;

        &:hover {
          background-color: #fff;

          svg {
            fill: #4ac4cf;
          }
        }

        svg {
          width: 20px;
          height: 20px;
          fill: $textCommonColor;
        }
      }
    }
  }
}

.tour {
  @include flexSettings(row, flex-start);
  height: 500px;
  background-color: #222d4f;

  &__map {
    width: 50%;
  }

  &__date {
    width: 80%;
    max-width: 800px;
    padding: 40px 40px;

    &-title {
      margin-bottom: 30px;
      font-family: SourceCodePro-Bold, sans-serif;
      font-size: 30px;
      text-transform: uppercase;
      color: $textCommonColor;
    }

    .date-main {
      overflow: auto;
      height: 370px;

      &::-webkit-scrollbar {
        background-color: #2d3858;
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #4c5a86;
      }

      &__block {
        @include flexSettings(row, space-between);
        margin-bottom: 20px;
        min-height: 80px;
        width: 95%;
        background-color: #fff;

        &-time {
          position: relative;
          padding-top: 15px;
          text-align: center;
          width: 15%;
          color: #4ac4cf;
          font-size: 30px;

          span {
            position: relative;
            top: -20px;
            text-transform: uppercase;
            color: #000;
            font-size: 14px;
          }

          &:after {
            content: "";
            display: block;
            position: absolute;
            top: 20%;
            right: 15px;
            width: 1px;
            height: 60%;
            background-color: #4ac4cf;
          }
        }

        &-info {
          padding-top: 20px;
          width: 55%;
          font-family: SourceCodePro-Bold, sans-serif;
          font-size: 18px;

          span {
            font-family: SourceCodePro-Regular, sans-serif;
            font-size: 14px;
            color: #4ac4cf;
          }
        }

        &-button {
          @include buttons();
          margin: auto 10px;
          height: 50px;
          color: #4ac4cf;
          border-color: #4ac4cf;
          transition: 1s;

          &:hover {
            color: $textCommonColor;
            background-color: #4ac4cf;
          }
        }
      }
    }
  }
}

.footer {
  @include flexSettings(row, space-between);
  align-items: center;
  padding: 30px $calcPadding;
  background-color: #222d4f;
  color: #37549f;
  font-family: SourceCodePro-Bold, sans-serif;
  text-align: center;

  &__text {
  }

  &__link{
    text-decoration: none;
    color: #37549f;
    transition: .4s;

    &-svg {
      width: 20px;
      height: 20px;
      fill: #37549f;
      transition: .4s;
    }

    &:hover {
      color: #4ac3ce;

      .footer__link-svg {
        fill: #4ac3ce;
      }
    }
  }
}

.hover {
  &:after {
    width: 60% !important;
    opacity: 1 !important;
  }

  &:before {
    width: 80% !important;
    opacity: 1 !important;
  }
}

.scroll {
  background-color: #1c2748;
  border-bottom: 2px solid #fff;
}
</style>
