<template>
  <section>
    <ContactsHeader
      :slider="slider"
    />
    <ContactsForm/>
  </section>
</template>

<script lang="ts">
import ContactsHeader from "@/components/Contacts/ContactsHeader.vue";
import ContactsForm from "@/components/Contacts/ContactsForm.vue";
import Vue from "vue";
import {Component, Prop} from 'vue-property-decorator';

@Component({
  name: "Contacts",
  components: {
    ContactsHeader,
    ContactsForm
  }
})

export default class Contacts extends Vue {
  @Prop({type: Function, required: true}) readonly slider: Function | undefined
}
</script>

<style lang="scss">

</style>