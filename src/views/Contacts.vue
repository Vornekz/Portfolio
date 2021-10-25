<template>
  <section>
    <ContactsHeader/>
    <ContactsForm/>
  </section>
</template>

<script lang="ts">
import ContactsHeader from "@/components/Contacts/ContactsHeader.vue";
import ContactsForm from "@/components/Contacts/ContactsForm.vue";
import Vue from "vue";
import {Component} from 'vue-property-decorator';

@Component({
  name: "Contacts",
  components: {
    ContactsHeader,
    ContactsForm
  }
})

export default class Contacts extends Vue {

}
</script>

<style lang="scss">

</style>