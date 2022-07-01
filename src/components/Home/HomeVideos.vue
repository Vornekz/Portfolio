<template>
  <section class="videos">
    <h3 class="videos__subtitle">LATEST VIDEOS FROM ME AND MY COLLEAGUES</h3>
    <h2 class="videos__title">RECENT VIDEOS</h2>
    <div class="videos__main">
      <iframe
          :src="video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>

      </iframe>
      <ul class="videos__main-list video-list">
        <li
            class="video-list__li"
            :class="{'video-hover': data.selected}"
            v-for="(data, i) in videData"
            :key="`video-${i}`"
            @click="onVideoClick(videos[data.alt], i);"
        >
          <div class="video-list__li-img">
            <img :src="data.imgSource" :alt="data.alt">
          </div>
          <h4 class="video-list__li-about">{{ data.about }}</h4>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';

interface Video {
  video1: string,
  video2: string,
  video3: string,
  video4: string,
  video5: string
}

interface VideoData {
  imgSource: string
  about: string
  alt: string,
  selected: boolean
}


@Component({
  name: "HomeVideos"
})

export default class HomeVideos extends Vue {
  private video: string = "";

  private videData: VideoData[] = [
    {
      imgSource: "./assets/img/video-01-min.jpg",
      about: "Armin van Buuren Live at Tomorrowland 2015",
      alt: "video1",
      selected: true
    },
    {
      imgSource: "./assets/img/video-02-min.jpg",
      about: "Juicy M - Live at MEO Sudoeste Festival",
      alt: "video2",
      selected: false
    },
    {
      imgSource: "./assets/img/video-03-min.jpg",
      about: "Armin van Buuren feat. Angel Taylor - Make It Right",
      alt: "video3",
      selected: false
    },
    {
      imgSource: "./assets/img/video-04-min.jpg",
      about: "Armin Only crew taking over Sydney! Armin Only VLOG",
      alt: "video4",
      selected: false
    },
    {
      imgSource: "./assets/img/video-05-min.jpg",
      about: "Armin Only crew taking over San Francisco!",
      alt: "video5",
      selected: false
    }
  ]
  private readonly videos: Video = {
    video1: "https://www.youtube.com/embed/4gRjnaitguQ",
    video2: "https://www.youtube.com/embed/mfMR-URQl80",
    video3: "https://www.youtube.com/embed/xweHsBLcqp4",
    video4: "https://www.youtube.com/embed/V3pPMUmIxAc",
    video5: "https://www.youtube.com/embed/N1DEOCUujUg"
  }
  private lastVideoSelected: number = 0;

  mounted() {
    this.video = this.videos.video1;
  }


  onVideoClick(video: string, indexToSelect: number) {
    this.video = video;

    this.videData[this.lastVideoSelected].selected = false;
    this.videData[indexToSelect].selected = true;
    this.lastVideoSelected = indexToSelect;
  }
}

</script>

<style lang="scss">
@import "~@/assets/mixins";
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

    @media screen and (max-width: 1200px) {
      height: 1000px;
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: 768px) {
      height: 750px;
    }

    iframe {
      width: 60%;
      height: 100%;
      @media screen and (max-width: 1200px) {
        width: 800px;
        height: 600px;
        margin-bottom: 30px;
      }
      @media screen and (max-width: 992px) {
        width: 600px;
      }
      @media screen and (max-width: 768px) {
        width: 450px;
        height: 350px;
      }
      @media screen and (max-width: 520px) {
        max-width: 100vw;
      }

    }

    .video-list {
      width: 40%;
      overflow: auto;

      @media screen and (max-width: 1200px) {
        width: 800px;
      }
      @media screen and (max-width: 992px) {
        width: 600px;
      }
      @media screen and (max-width: 768px) {
        width: 440px;
      }
      @media screen and (max-width: 520px) {
        max-width: 300px;
      }

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

        @media screen and (max-width: 1200px) {
          width: 80%;
        }
        @media screen and (max-width: 768px) {
          width: 100%;
          padding: 0 20px;
        }

        &:last-child {
          margin-bottom: 0;
        }

        &-img {
          width: 150px;
          height: 85px;
          margin-right: 30px;
          transition: .2s;

          @media screen and (max-width: 1200px) {
            height: 100%;
          }

          @media screen and (max-width: 768px) {
          }

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

          @media screen and (max-width: 520px) {
            font-size: 12px;
          }
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

.video-hover {
  .video-list__li-img {
    box-sizing: unset !important;
    border-bottom: 3px solid #4ac3ce !important;
    border-right: 3px solid #4ac3ce !important;
  }

  .video-list__li-about {
    color: #4ac3ce !important;
  }

}
</style>