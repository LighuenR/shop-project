!<template>
    <div class="container">
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-list flat >
      <v-list-item-group
      
        v-model="selectedItem"
        color="indigo"
      >
        <v-list-item
          v-for="(product, i) in products"
          :key="i"
          :value="product.text"
        >
          <v-list-item-icon>
            <v-icon v-text="product.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="product.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
 
  <v-card v-if="selectedItem === 'products'"><h1>asdasdasdasd</h1></v-card>
    </div>
</template>

<script>
    export default {
    data: () => ({
      products: [
        {
          icon: 'mdi-wifi',
          text: 'products',
        },
        {
          icon: 'mdi-bluetooth',
          text: 'Bluetooth',
        },
        {
          icon: 'mdi-chart-donut',
          text: 'Data Usage',
        },
      ],
      selectedItem: null,
    }),
    }
</script>

<style lang="scss" scoped>
.container {
    padding:75px 0 230px 0;
}

</style>