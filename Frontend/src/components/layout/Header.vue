!<template>
<header>
    <v-app-bar app dense dark>

    <v-container class="d-flex align-center">
     
      <v-toolbar-title>Legging's store</v-toolbar-title>

      <v-spacer></v-spacer>
   
        
    <v-menu offset-y>

      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs"
          v-on="on">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
      </template>
     
      <v-list>
        <v-list-item >Logout</v-list-item>
        <v-list-item >Logout</v-list-item>
        <v-list-item >Logout</v-list-item>
      </v-list>

    </v-menu>
      
    <v-btn icon @click.stop="drawer = !drawer">  <v-icon>mdi-cart</v-icon></v-btn>   
      
    

      </v-container>

    </v-app-bar>
    
          <v-navigation-drawer
      v-model="drawer"
      absolute
      app
      right
      temporary
    >
    
    </v-navigation-drawer>
    </header>
</template>

<script>
    export default {
        data() {
          return {
            drawer: false
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>