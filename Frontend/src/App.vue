<template>
  <v-app>
    <Header />

    <router-view></router-view>
    
  </v-app>
</template>

<script>
import Header from "./components/layout/Header.vue"

export default {
  components: {
        Header,
        
  }
}
</script>

<style lang="scss" scoped>
</style>