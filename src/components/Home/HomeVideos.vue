<template>
  <section class="videos">
    <h3 class="videos__subtitle">LATEST VIDEOS FROM ME AND MY COLLEAGUES</h3>
    <h2 class="videos__title">RECENT VIDEOS</h2>
    <div class="videos__main">
      <iframe
          v-bind:src="video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>

      </iframe>
      <ul class="videos__main-list video-list">
        <li class="video-list__li">
          <div class="video-list__li-img">
            <img src="@/assets/img/video-01-min.jpg" alt="video-01">
          </div>
          <h4 class="video-list__li-about">Armin van Buuren Live at Tomorrowland 2015</h4>
        </li>
        <li class="video-list__li" @click="videoLoad">
          <div class="video-list__li-img">
            <img src="@/assets/img/video-02-min.jpg" alt="video-02">
          </div>
          <h4 class="video-list__li-about">Juicy M - Live at MEO Sudoeste Festival</h4>
        </li>
        <li class="video-list__li" @click="videoLoad">
          <div class="video-list__li-img">
            <img src="@/assets/img/video-03-min.jpg" alt="video-03">
          </div>
          <h4 class="video-list__li-about">Armin van Buuren feat. Angel Taylor - Make It Right</h4>
        </li>
        <li class="video-list__li">
          <div class="video-list__li-img">
            <img src="@/assets/img/video-04-min.jpg" alt="video-04">
          </div>
          <h4 class="video-list__li-about">Armin Only crew taking over Sydney! Armin Only VLOG</h4>
        </li>
        <li class="video-list__li">
          <div class="video-list__li-img">
            <img src="@/assets/img/video-05-min.jpg" alt="video-05">
          </div>
          <h4 class="video-list__li-about">Armin Only crew taking over San Francisco!</h4>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import {Component, Prop, Watch} from 'vue-property-decorator';
interface Video {
  video1: string,
  video2: string,
  video3: string,
  video4: string,
  video5: string
}

@Component ({
  name: "HomeVideos"
})

export default class HomeVideos extends Vue{
  private video: string = "";
  private readonly videos: Video = {
    video1: "https://www.youtube.com/embed/4gRjnaitguQ",
    video2: "https://www.youtube.com/embed/mfMR-URQl80",
    video3: "https://www.youtube.com/embed/xweHsBLcqp4",
    video4: "https://www.youtube.com/embed/V3pPMUmIxAc",
    video5: "https://www.youtube.com/embed/N1DEOCUujUg"
  }

  mounted() {
    this.video = this.videos.video1;
  }

  videoLoad() {
    this.video = this.videos.video3;
  }
}

</script>

<style lang="scss">
@import "~@/assets/mixins";
@import "~@/assets/fonts";
@import "~@/assets/vars";

.videos {
  padding: 100px $calcPadding;
  color: $textCommonColor;
  background-color: #222d4f;

  &__subtitle {
    @include subtitles();
  }

  &__title {
    @include titles();
  }

  &__main {
    @include flexSettings(row, space-between);
    height: 400px;

    iframe {
      width: 60%;
      height: 100%;
    }

    .video-list {
      width: 40%;
      overflow: auto;

      &::-webkit-scrollbar {
        background-color: #2d3858;
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #4c5a86;
      }

      &__li {
        padding: 0 40px;
        margin-bottom: 30px;
        @include flexSettings(row, flex-start);
        align-items: center;

        &:last-child {
          margin-bottom: 0;
        }

        &-img {
          width: 150px;
          height: 85px;
          margin-right: 30px;
          transition: .2s;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &-about {
          width: 200px;
          font-family: SourceCodePro-Bold, sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          line-height: 1.6;
          transition: .2s;
        }

        &:hover {
          .video-list__li-img {
            box-sizing: unset;
            border-bottom: 3px solid #4ac3ce;
            border-right: 3px solid #4ac3ce;
          }

          .video-list__li-about {
            color: #4ac3ce;
          }
        }
      }


    }
  }
}
</style>