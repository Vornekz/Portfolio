<template>
  <section class="news">
    <h3 class="news__subtitle">
      FROM MY BLOG
    </h3>
    <h2 class="news__title">
      LATEST NEWS
    </h2>
    <div class="news__main">
      <div class="news__main-info main-info">
        <div class="main-info__img">
          <img src="@/assets/img/home-news-1-min.jpg" alt="news">
        </div>
        <article class="main-info__article">
          <h4 class="main-info__article-subtitle">Dec 31, 2021</h4>
          <h3 class="main-info__article-title">
            TEASING THE DEMO OF MY NEW TRACK ‘I NEED YOU’
          </h3>
          <router-link to="/" class="main-info__article-link">Read More</router-link>
        </article>
      </div>
      <div class="news__main-info main-info">
        <div class="main-info__img">
          <img src="@/assets/img/home-news-2-min.jpg" alt="news">
        </div>
        <article class="main-info__article">
          <h4 class="main-info__article-subtitle">Dec 31, 2021</h4>
          <h3 class="main-info__article-title">
            BRING YOUR FAVORITE ARTIST TO YOUR CITY!
          </h3>
          <router-link to="/" class="main-info__article-link">Read More</router-link>
        </article>
      </div>
      <div class="news__main-info main-info">
        <div class="main-info__img">
          <img src="@/assets/img/home-news-3-min.jpg" alt="news">
        </div>
        <article class="main-info__article">
          <h4 class="main-info__article-subtitle">Dec 31, 2021</h4>
          <h3 class="main-info__article-title">
            NEW SINGLE: ‘RAVE ON’ (RAVERZ 2019 ANTHEM)
          </h3>
          <router-link to="/" class="main-info__article-link">Read More</router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';

@Component({
  name: 'HomeNews',
})

export default class HomeNews extends Vue {

}
</script>

<style lang="scss">
@import "~@/assets/mixins";
@import "~@/assets/vars";

.news {
  padding: 100px $calcPadding;
  color: $textCommonColor;
  background-color: #222d4f;

  @media screen and (max-width: 992px) {
    padding: 40px 0;
  }

  &__subtitle {
    @include subtitles();
  }

  &__title {
    @include titles();
  }

  &__main {
    @include flexSettings(row, space-between);
    align-items: center;
    color: #000;

    @media screen and (max-width: 1200px) {
      width: 800px;
      margin: 0 auto;
    }

    @media screen and (max-width: 992px) {
      @include flexSettings(column, space-between);
      width: 100%;
    }

    .main-info {
      position: relative;
      z-index: 0;
      background-color: #fff;
      width: 30%;
      margin-right: 20px;

      @media screen and (max-width: 992px) {
        width: 500px;
        margin-bottom: 40px;
      }

      @media screen and (max-width: 520px) {
        width: 300px;
      }

      @media screen and (max-width: 350px) {
        width: 250px;

      }

      &:last-child {
        margin-right: 0;

        @media screen and (max-width: 992px) {
          margin-right: 20px;
        }
      }

      &__img {
        height: 50%;
        width: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__article {
        position: relative;
        padding: 40px;
        text-align: center;

        &-subtitle {
          position: absolute;
          top: -20px;
          right: 20%;
          padding: 5px;
          width: 60%;
          height: 30px;
          border-radius: 50px;
          background-color: #4ac4cf;
          text-transform: uppercase;
          color: $textCommonColor;
        }

        &-title {
          margin-bottom: 55px;
          font-family: SourceCodePro-Bold, sans-serif;
          font-size: 18px;
          line-height: 1.5;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.2s;

          &:hover {
            color: #4ac4cf;
          }
        }

        &-link {
          position: relative;
          color: #151515;
          text-transform: uppercase;
          transition: 0.2s;

          &:before {
            content: "";
            display: block;
            position: absolute;
            top: -30px;
            left: -35px;
            width: 150px;
            height: 1px;
            background-color: #e1e1e1;
          }

          &:hover {
            color: #4ac4cf;
          }
        }
      }

      &:after {
        content: '';
        display: block;
        width: 85%;
        height: 110%;
        position: absolute;
        z-index: -1;
        border: 7px solid rgba(255, 255, 255, 0.1);
        top: -22px;
        left: 20px;
        transition: 0.5s;

        @media screen and (max-width: 992px) {
          display: none;
        }
      }

      &:hover {
        &:after {
          width: 110%;
          left: -25px;
        }
      }
    }
  }
}
</style>
