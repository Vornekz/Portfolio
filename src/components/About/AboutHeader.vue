<template>
  <section class="about-header">
    <div class="about-header__main">
      <h2 class="about-header__main-title">
        About
      </h2>
    </div>
    <footer class="about-header__footer">
      <a href="/">
        Home
      </a>
      <h3 class="about-header__footer-about">
        About
      </h3>
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from 'vue-property-decorator';

@Component({
  name: "AboutHeader",

})

export default class AboutHeader extends Vue {

}
</script>

<style lang="scss">
@import "~@/assets/mixins";
@import "~@/assets/vars";

.about-header {
  background: url("~@/assets/img/aboutHeader.jpg") center no-repeat;
  background-size: cover;
  text-align: center;

  &__main {
    @include flexSettings(column, center);
    height: 45vh;

    &-title {
      font-family: SourceCodePro-Medium, sans-serif;
      font-size: 55px;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: $textCommonColor;
    }
  }

  &__footer {
    @include flexSettings(row, center);
    padding: 20px 0;
    background-color: rgba(0, 0, 0, 0.3);
    font-family: SourceCodePro-Bold, sans-serif;
    letter-spacing: 3px;
    color: $textCommonColor;
    text-transform: uppercase;

    a {
      position: relative;
      margin-right: 30px;
      text-decoration: none;
      font-size: 14px;
      color: #4ac3ce;

      &:hover {
        color: $textCommonColor;
      }

      &:after {
        content: "/";
        position: absolute;
        right: -20px;
      }
    }
  }
}
</style>