<template>
  <v-app :rtl = 'isrtl'>
    <Nav/>
    <router-view/>
  </v-app>
</template>

<script>
import Nav from "./components/nav/Nav";

export default {
  name: 'App',


  components: {
    Nav
  },

  data: () => ({
    isrtl: true
  }),
  methods:{
    changeRtl(){

      console.log(this.$vuetify.rtl,'rtl')
    }
  }
};
</script>
