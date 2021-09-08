!<template>
 <div class="container">
  <v-data-table
    :headers="headers"
    :items="products"
    :items-per-page="5"
    class="elevation-1"

  ></v-data-table>
</div>
</template>

<script>
    export default {
         data () {
      return {
          headers: [
            {
            text: 'Products',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Price', value: 'price' },
          { text: 'Size', value: 'size' },
          { text: 'Description', value: 'description' },
          { text: 'Cantidad', value: 'cantidad' },
          { text: 'Total', value: 'total'}
       ],
         products: [
          {
            name: 'Jean loco',
            price: "$500",
            size: "XL",
            description: "Una jean de la hostia que no se rompe con nada",
            cantidad: 2,
            total: "$1000"
          }]
      }
    }}
</script>

<style lang="scss" scoped>
.container {
    padding:75px 0 300px 0;
}
.cart {
  display: grid;
  place-items: center;
  text-align: center;
}

</style>