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
            <v-list-item><a href="/"> Home </a></v-list-item>
            <v-list-item><a href="/register"> Register </a></v-list-item>
            <v-list-item><a href="/login">Login </a> </v-list-item>
            <v-list-item><a href="/cart"> Your cart </a></v-list-item>
            <v-list-item><a href="/admin"> Admin </a></v-list-item>
          </v-list>
        </v-menu>

        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-cart</v-icon></v-btn
        >
      </v-container>
    </v-app-bar>

    <v-navigation-drawer class="drawer" v-model="drawer" app right>
      <v-container>
        <h2 class="pa-2">Your Cart</h2>

        <v-divider></v-divider>

        <v-card
          class="mx-auto"
          outlined
          v-for="(product, i) in cartProducts"
          :key="i"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h7 mb-1">
                {{ product.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                product.description
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80">
              <v-img :src="product.img"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
              @click="$store.dispatch('REMOVE_PRODUCT_FROM_CART', product._id)"
            >
              Remove
            </v-btn>
            <h4 class="ml-4">Price: ${{ product.price }}</h4>
          </v-card-actions>
        </v-card>

        <h3 class="pa-2">Total: ${{ cartTotal }}</h3>
      </v-container>
    </v-navigation-drawer>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters(["cartProducts", "cartTotal"]),
  },
};
</script>

<style lang="scss" scoped>
.drawer {
  /* color: white; */
}
a {
  text-decoration: none;
}
</style>