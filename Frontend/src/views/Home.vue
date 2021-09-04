<template>
  <div class="home">
     
    <Banner/>
    <Products/>
    <AboutUs/>
  
  </div>
 

</template>

<script>
 import Banner from "../components/Home/Banner.vue"
 import Products from "../components/Home/Products.vue"
 import AboutUs from "../components/Home/AboutUs.vue"
 import { getProducts} from "../services/product";
 /* import { deleteProduct } from "../services/product" */
export default {
  name: 'Home',
  components: {
    Banner,
    Products,
    AboutUs,
  },

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

  /* async deleteProduct(product) {
      await deleteTask(product);
      this.getAllProducts();
    }, */
}
</script>
