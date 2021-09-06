!<template>
  <header>
    <v-app-bar app dense dark>
      <v-container class="d-flex align-center">
        <v-toolbar-title>Legging's store</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-account-outline</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>Logout</v-list-item>
            <v-list-item>Logout</v-list-item>
            <v-list-item>Logout</v-list-item>
          </v-list>
        </v-menu>

        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-cart</v-icon></v-btn
        >
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      class="drawer"
      v-model="drawer"
      app
      right
    >
    <v-container>
     <h2 class="pa-2">Your Cart</h2>

      <v-divider></v-divider>
   <!--  <v-card>
      <h3>Crazy leggins</h3>
      <h5>Amount: 2</h5>
      <h4>Price: $80</h4>
      <b-btn><v-icon>mdi-delete</v-icon></b-btn>
      </v-card> -->
      <v-card
    class="mx-auto"
  
    outlined v-for="(product, i) in cartProducts"  :key="i"
  >
   <v-card-text>{{product.name}}</v-card-text>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        <v-icon>mdi-delete</v-icon>Delete</v-btn>
        <h3 class="ma-auto">$100</h3>
    </v-card-actions>
  </v-card>


      <h3 class="pa-2">Total: $160</h3>
      </v-container>
    

    </v-navigation-drawer>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed:{
    ...mapGetters(["cartProducts"])
  }
};
</script>

<style lang="scss" scoped>
.drawer {
 /* color: white; */
}

</style>