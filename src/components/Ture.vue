<template>
  <section class="tour">
    <div class="tour__map">
      <Map/>
    </div>
    <div class="tour__date">
      <h3 class="tour__date-title">Tour Date</h3>
      <div class="tour__date-main date-main">
        <div class="date-main__block" v-for="(data, i) in tureDateBlocks" :key="`ture-${i}`">
          <p class="date-main__block-time" v-html="data.time"/>
          <p class="date-main__block-info" v-html="data.info"/>
          <button class="date-main__block-button">
            {{ data.button }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
import Map from "@/components/Map.vue";

interface TureDate {
  time: string;
  info: string;
  button: string
}

@Component ({
  name:"Ture",
  components: {
    Map
  }
})
export default class Ture extends Vue {

  private tureDateBlocks: TureDate[] = [
    {
      time: "25 <br> <span>Feb</span>",
      info: "ULTRA MUSIC FESTIVAL <br> <span>Miami, USA</span>",
      button: "buy tickets",
    },
    {
      time: "12 <br> <span>Mart</span>",
      info: "EDC ORLANDO <br> <span>Tinkler Field, Orlando, USA</span>",
      button: "buy tickets",
    },
    {
      time: "24 <br> <span>Apr</span>",
      info: "ELECTRIC ZOO <br> <span>Randall’s, Island Park, New York, USA</span>",
      button: "buy tickets",
    },
    {
      time: "17 <br> <span>Jul</span>",
      info: "NOCTURNAL WONDERLAND <br> <span>Glen Helen National Park, USA</span>",
      button: "buy tickets",
    },
    {
      time: "18 <br> <span>Aug</span>",
      info: "COACHELLA <br> <span>Empire Polo Club, Indio, USA</span>",
      button: "buy tickets",
    },
    {
      time: "12 <br> <span>Oct</span>",
      info: "LET IT ROLL <br> <span>Milovice, Czech Republic</span>",
      button: "buy tickets",
    }
  ]
}
</script>

<style lang="scss">
@import "~@/assets/mixins";
@import "~@/assets/vars";

.tour {
  @include flexSettings(row, flex-start);
  height: 500px;
  background-color: #222d4f;

  @media screen and (max-width: 992px) {
    height: auto;
    flex-direction: column;
  }


  &__map {
    width: 50%;
    @media screen and (max-width: 1200px) {
      width: 600px;
    }

    @media screen and (max-width: 992px) {
      height: 400px;
      width: 100%;
    }
  }

  &__date {
    width: 80%;
    max-width: 800px;
    padding: 40px;

    @media screen and (max-width: 1200px) {
      width: 600px;
      padding: 30px;
    }

    @media screen and (max-width: 1200px) {
      margin: 0 auto;
    }
    @media screen and (max-width: 768px) {
      width: 400px;
      padding: 20px 0;
    }
    @media screen and (max-width: 520px) {
      width: 300px;
      padding: 20px 0;
    }


    &-title {
      margin-bottom: 30px;
      font-family: SourceCodePro-Bold, sans-serif;
      font-size: 30px;
      text-align: center;
      text-transform: uppercase;
      color: $textCommonColor;
    }

    .date-main {
      overflow: auto;
      height: 395px;

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

          @media screen and (max-width: 1200px) {
            width: 80px;
          }

          span {
            position: relative;
            top: -10px;
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

            @media screen and (max-width: 1200px) {
              display: none;
            }
          }
        }

        &-info {
          padding-top: 20px;
          width: 55%;
          font-family: SourceCodePro-Bold, sans-serif;
          font-size: 18px;

          @media screen and (max-width: 1200px) {
            padding-top: 15px;
            font-size: 15px;
          }


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

          @media screen and (max-width: 768px) {
            width: 150px;
          }

          &:hover {
            color: $textCommonColor;
            background-color: #4ac4cf;
          }
        }
      }
    }
  }
}
</style>