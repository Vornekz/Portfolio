<template>
  <section class="contacts-header">
    <div class="contacts-header__main">
      <h2 class="contacts-header__main-title">
        contacts
      </h2>
    </div>
    <footer class="contacts-header__footer">
      <div class="contacts-header__footer-home" @click="slider">
        <router-link to="/">
          Home
        </router-link>
      </div>
      <h3 class="contacts-header__footer-contacts">
        contacts
      </h3>
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from 'vue-property-decorator';

@Component({
  name: "ContactsHeader",

})

export default class ContactsHeader extends Vue {
  @Prop({type: Function, required: true}) readonly slider: Function | undefined

}
</script>

<style lang="scss">
@import "~@/assets/mixins";
@import "~@/assets/vars";

.contacts-header {
  background: url("~@/assets/img/contactsHeader.jpg") center no-repeat;
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

      @media screen and (max-height: 550px) {
        padding-top: 40px;
      }

      @media screen and (max-width: 320px) {
        padding-top: 80px;
      }
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

    &-home {
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
}
</style>