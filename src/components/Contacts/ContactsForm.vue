<template>
  <section class="contacts-main">
    <div class="contacts-main__details">
      <h3 class="contacts-main__title">
        CONTACT DETAILS
      </h3>
      <p class="contacts-main__text">
        On this page you can find all necessary contacts to get in touch with me if you would like to collaborate, book
        a live event or ask a question.
      </p>
      <div class="contacts-main__details-contact details-contact">
        <div class="details-contact__block">
          <svg class="details-contact__block-svg">
            <use xlink:href="@/assets/sprite.svg#mobile"></use>
          </svg>
          <h4 class="details-contact__block-title">Phone</h4>
          <a href="#" class="details-contact__block-link">
            <p>Phone 01: +1 (409) 987–5874</p>
          </a>
          <a href="#" class="details-contact__block-link">
            <p>Phone 02: +1 (409) 987–5874</p>
          </a>
        </div>
        <div class="details-contact__block">
          <svg class="details-contact__block-svg">
            <use xlink:href="@/assets/sprite.svg#map"></use>
          </svg>
          <h4 class="details-contact__block-title">Address</h4>
          <a href="#" class="details-contact__block-link">
            <p>6036 Richmond hwy.,
              Alexandria, VA, 2230</p>
          </a>
        </div>
        <div class="details-contact__block">
          <svg class="details-contact__block-svg">
            <use xlink:href="@/assets/sprite.svg#mail"></use>
          </svg>
          <h4 class="details-contact__block-title">E-MAILS</h4>
          <a href="#" class="details-contact__block-link">
            <p>info@demolink.org</p>
          </a>
          <a href="#" class="details-contact__block-link">
            <p>mail@demolink.org</p>
          </a>
        </div>
      </div>
    </div>
    <form method="get" class="contacts-main__form">
      <h3 class="contacts-main__title">GET IN TOUCH WITH ME</h3>
      <p class="contacts-main__text">Feel free to drop a line or ask a question using the contact form below.</p>
      <div class="contacts-main__form-date form-date">
        <input required name="name" type="text" placeholder="NAME" class="form-date__input">
        <input required name="phone" type="tel" placeholder="PHONE" class="form-date__input">
        <input required name="e-mail" type="email" placeholder="E-MAIL" class="form-date__input">
      </div>
      <textarea name="massage" id="massage" placeholder="MASSAGE" class="contacts-main__form-textarea"></textarea>
      <button class="contacts-main__form-button" type="submit">
        Send message
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from 'vue-property-decorator';


@Component({
  name: "ContactsForm",
})

export default class ContactsForm extends Vue {

}
</script>

<style lang="scss">
@import "~@/assets/mixins";
@import "~@/assets/vars";

.contacts-main {
  background-color: #222d4f;
  padding: 100px $calcPadding;
  color: #4c5a86;

  @media screen and (max-width: 1200px) {
    padding: 100px 80px;
  }

  @media screen and (max-width: 768px) {
    padding: 60px 40px;
    text-align: center;
  }

  &__title {
    margin-bottom: 30px;
    font-family: SourceCodePro-Bold, sans-serif;
    font-size: 30px;
    color: $textCommonColor;
  }

  &__text {
    margin-bottom: 50px;
    max-width: 50%;
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }

  &__details {
    margin-bottom: 100px;

    .details-contact {
      @include flexSettings(row, space-between);

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      &__block {
        width: 30%;
        position: relative;
        padding: 30px 70px;
        @media screen and (max-width: 1200px) {
          padding: 20px 50px;
        }

        @media screen and (max-width: 768px) {
          width: 100%;
        }

        &:before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.1);

          @media screen and (max-width: 768px) {
            display: none;
          }
        }

        &-svg {
          margin-bottom: 20px;
          width: 40px;
          height: 40px;
          fill: #4ac3ce;
        }

        &-title {
          margin-bottom: 20px;
          font-family: SourceCodePro-Bold, sans-serif;
          font-size: 18px;
          text-transform: uppercase;
          color: $textCommonColor;
        }

        &-link {
          text-decoration: none;
          color: #4c5a86;

          p {
            margin-bottom: 10px;
            transition: .5s;

            &:hover {
              color: #4ac3ce;
            }
          }
        }

      }
    }
  }

  &__form {
    .form-date__input, &-textarea {
      width: 100%;
      display: block;
      min-height: 50px;
      padding: 10px 0;
      margin-bottom: 30px;
      font-family: SourceCodePro-Medium, sans-serif;
      font-size: 18px;
      letter-spacing: 1px;
      color: #ffffff;
      background-color: transparent;
      -webkit-appearance: none;
      border: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      resize: none;

      &::placeholder {
        color: #4c5a86;
      }

      &:hover {
        border-color: #9b3f3f;

        &::placeholder {
          color: #9b3f3f;
        }
      }
    }

    .form-date {
      @include flexSettings(row, space-between);

      @media screen and (max-width: 768px) {
        @include flexSettings(column, space-around);
      }

      &__input {
        width: 30%;

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }

    &-button {
      @include buttons();
      height: 50px;
      border: none;
      background-color: #4ac3ce;
      transition: .5s;

      &:hover {
        background-color: #fff;
        color: #4ac3ce;
      }
    }
  }
}


</style>