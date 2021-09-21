<template>
     <v-container class="my-2">
    <h1 class="my-2">Products</h1>
      <v-row>
          <v-col cols="12" lg="4">
            <v-card>
              <v-card-title>Products</v-card-title>
              <v-card-text>
                <v-text-field label="Name" v-model="productName"></v-text-field>
                <v-text-field label="Price" v-model="productPrice"></v-text-field>
                <v-text-field label="Img" v-model="productImg"></v-text-field>

                <v-textarea
                  label="Description"
                  v-model="productDescription"
                ></v-textarea>
                <v-btn dark color="black" block @click="addProduct()"
                  >Send</v-btn
                >
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="8">
            <v-row>
              
              <v-col cols="12" lg="6" v-for="product in products" :key="product._id"
                ><v-card  justify="space-around">
                  <v-card-title>{{ product.name }}</v-card-title>
                  <v-card-text>{{ product.description }}</v-card-text>
                  <v-card-subtitle>{{product.price}}</v-card-subtitle>
                  <v-card-text>{{ product.img }}</v-card-text>

                  <v-divider class="mx-4"></v-divider>
                  <v-card-actions class="d-flex justify-end">
                  <v-btn
                    elevation="2"
                    class="ma-2"
                    justify="end"
                    small
                    right
                    
                    >Update</v-btn
                  >
                  
                  <v-btn
                 
                   justify-end
                    elevation="2"
                    color="error"
                     class="ma-2"
                    small
                    @click="deleteProduct(product)"
                    >Delete</v-btn
                  >
              </v-card-actions>

                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
 </v-container>
</template>

<script>
import { getProducts , deleteProduct, addProduct} from "../../services/product";
    export default {
           data() {
      return {
        products:[],
        productName: "",
        productDescription: "",
        productPrice: "",
        productImg: ""
      }
    },
   created() {
    this.getProducts()
  },
   methods: {
    async getProducts() {
      this.products = await getProducts();
      console.log(this.products);
    },
    async addProduct() {
      const res = await addProduct({
        name: this.productName,
        description: this.productDescription,
        price: this.productPrice,
        img: this.productImg,
        
      });
      console.log(res);
      this.getProducts();
      this.productName = "";
      this.productPrice = "";
      this.productDescription = "";
      this.productImg = "";
    },

    async deleteProduct(product) {
      await deleteProduct(product);
      this.getProducts();
    },
    }}
</script>

<style lang="scss" scoped>
.container {
    padding:75px 0 230px 0;
}
.btn-color {
  color: #275660;
}

</style>