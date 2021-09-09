!<template>
 <div class="container">
   <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
            <th class="text-left">
            Price
          </th>
            <th class="text-left">
            Size
          </th>
          <th class="text-left">
           Quantity
          </th>
          <th class="text-left">
            Description
          </th>
        
           
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.name"
        >
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.size }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.description }}</td>
          
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <h2 class="my-3">Total: $1010</h2>
 <v-btn class="my-3" block  color="#275660" dark>
   Confirm
   </v-btn>
</div>
</template>

<script>
    export default {
         data () {
      return {
         products: [
          {
            name: 'Jean loco',
            price: "$500",
            size: "XL",
            description: "Una jean de la hostia que no se rompe con nada",
            quantity: 2,
          }]
      }
    }}
</script>

<style lang="scss" scoped>
.container {
    padding:75px 0 230px 0;
}

</style>