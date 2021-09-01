<template>
  <div class="home">
    <h1>Productos</h1>
    <v-row>
      <v-col v-for="product in products" :key="product._id">
        <h1> 
          {{product.name}}
        </h1>

      </v-col>
    </v-row>
  </div>
 

</template>

<script>
 import { getProducts} from "../services/product";
export default {
  name: 'Home',

  data() {
    return {
      products: []
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
 /*    async addProduct() {
      const res = await addProduct({
        name: this.prName,
        description: this.taskDescription,
      });
      console.log(res);
      this.getAllTasks();
      this.taskTitle = "";
      this.taskDescription = "";
    }, */
  },
}
</script>
