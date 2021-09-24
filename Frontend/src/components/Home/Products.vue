!<template>
  <v-container class="my-2">
    <h1 class="my-2">Products</h1>
    <v-row>
      <v-col cols="3" v-for="(product) in products" :key="product._id">
        <v-card :loading="loading" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

         <!--  <img class="product-img" :src="'img/'+(i+1)+'.jpg'"> -->
          <img class="product-img" :src="product.img">

          <v-card-title>{{product.name}}</v-card-title>

          <v-card-text>
            <div class="mb-1 text-subtitle-1">
              <h3>Price:<strong> ${{product.price}}</strong></h3>
            </div>

            <div>
              <p>{{product.description}}</p>
            </div>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip v-for="(size,i) in product.sizes" :key="i">{{size}}</v-chip>

              
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn class="btn-color" text @click="addProductToCart(product)">
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      
    </v-row>
 </v-container>
</template>

<script>
 /*  import { getProducts} from "../../services/product"; */
 

export default {
   data() {
      return {
        products:[]
      }
    },
   created() {
    this.getProducts()
  },
   methods: {
    async getProducts() {
    /*   this.products = await getProducts();
      console.log(this.products); */

      fetch("/data.json")
        .then(res => res.json()) 
        .then(data => {
          console.log(data)
          this.products = data;
        })
        
    },


    addProductToCart(product){
      console.log(product)
      this.$store.commit("ADD_PRODUCT_TO_CART", product)
    }
   

   }};
</script>

<style lang="scss" scoped>
.btn-color {
  color: #275660;
}
.product-img {
  max-width: 100%;
  width: 100%;

}
</style>