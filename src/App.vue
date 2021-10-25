<template>
  <div id="app">
    <header class="header">
      <div class="header__logo" @click="homeSlider">
        <router-link to="/" >
          <img src="./assets/img/logo.png" alt="logo">
        </router-link>
      </div>
      <div class="header__burger" :class="{'burger-exit': burgerShow}" @click="burgerMenuShow"></div>
      <ul class="header__menu menu" :class="{'burger-show': burgerShow}">
        <li class="menu__list" id="Home" :class="{ 'hover':$route.name === 'Home' }" @click="homeSlider">
          <router-link to="/" >
            Home
          </router-link>
        </li>
        <li class="menu__list" id="About" :class="{ 'hover':$route.name === 'About' }"  @click="aboutSlider">
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
        <a href="https://www.facebook.com/" target="_blank" class="social__link">
          <svg class="social__link-svg">
            <use xlink:href="./assets/sprite.svg#facebook"></use>
          </svg>
        </a>
        <a href="https://twitter.com/" target="_blank" class="social__link">
          <svg class="social__link-svg">
            <use xlink:href="./assets/sprite.svg#twitter"></use>
          </svg>
        </a>
        <a href="https://www.instagram.com/" target="_blank" class="social__link">
          <svg class="social__link-svg">
            <use xlink:href="./assets/sprite.svg#instagram"></use>
          </svg>
        </a>
      </div>
    </header>

    <router-view/>

    <Ture/>

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
import $ from "jquery"
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'animate.css/animate.min.css';
import Ture from "@/components/Ture.vue";
import Vue from "vue"
import {Component} from 'vue-property-decorator';

@Component({
  name: "App",
  components: {
    Ture
  }
})

export default class App extends Vue {
  private burgerShow: boolean = false;

  mounted() {
    this.homeSlider();
    this.aboutSlider();


    $(window).scroll(() => {
      if (pageYOffset === 0) {
        $(".header").removeClass("scroll")
      } else {
        $(".header").addClass("scroll")
      }
    })
  }



  burgerMenuShow() {
    this.burgerShow = !this.burgerShow
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
      slidesToScroll: 1,
      pauseOnHover: false,
      "responsive": [
        {
          "breakpoint": 992,
          "settings": {
            dots: false
          }
        }
      ]
    })

    $('.home__sliders').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      let slide = $(".slider");
      slide.eq(nextSlide).children().addClass("animate__animated animate__fadeInUp");
      slide.eq(currentSlide).children().removeClass("animate__animated animate__fadeInUp");
    })
  }

  aboutSlider() {
    $(".about-me__awards").slick({
      slidesToShow: 4,
      lazyLoad: "ondemand",
      dots: false,
      infinite: true,
      speed: 1000,
      "responsive": [
        {
          "breakpoint": 1200,
          "settings": {
            slidesToShow: 3,
          }
        },
        {
          "breakpoint": 992,
          "settings": {
            slidesToShow: 2,
          }
        },
        {
          "breakpoint": 768,
          "settings": {
            slidesToShow: 1,
          }
        }
      ]
    })
  }

}

</script>

<style lang="scss">
@import "assets/fonts";
@import "assets/mixins";
@import "assets/vars";
@import "assets/reset";

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

    @media screen and (max-width: 1200px) {
      padding: 30px 100px;
    }

    @media screen and (max-width: 992px) {
      padding: 23px 60px;
    }

    @media screen and (max-width: 768px) {
      padding: 23px 20px;
      background-color: #1c2748;
      border-bottom: 2px solid #fff;
    }

    &__burger {
      display: none;

      @media screen and (max-width: 768px) {
        position: absolute;
        left: 200px;
        z-index: 3;
        display: block;
        width: 30px;
        height: 30px;

        &:before {
          position: relative;
          top: 10px;
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background-color: #fff;
          transition: 1s;

        }
        &:after {
          position: relative;
          top: 20px;
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background-color: #fff;
          transition: 1s;

        }

      }
    }

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

      @media screen and (max-width: 768px) {
        background-color: #1c2748;
        flex-direction: column;
        justify-content: flex-start;
        height: 100vh;
        position: absolute;
        z-index: -1;
        top: 0;
        border-right: 2px solid #fff;
        left: -50vw;
        padding: 125px 40px 0;
        transition: 1s;

      }

      &__list {
        position: relative;
        list-style: none;
        @media screen and (max-width: 763px) {
          margin-bottom: 20px;
          height: 40px;
        }

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



.footer {
  @include flexSettings(row, space-between);
  align-items: center;
  padding: 30px $calcPadding;
  background-color: #222d4f;
  color: #37549f;
  font-family: SourceCodePro-Bold, sans-serif;
  text-align: center;

  @media screen and (max-width: 1200px) {
    padding: 30px 100px;
  }

  &__text {
  }

  &__link {
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

.burger-show {
  left: 0 !important;
}

.burger-exit {
  &:before {
    top: 16px !important;
    transform: rotate(226deg) !important;
  }

  &:after {
    top: 14px !important;
    transform: rotate(-226deg) !important;
  }

}

.scroll {
  background-color: #1c2748;
  border-bottom: 2px solid #fff;
}
</style>
