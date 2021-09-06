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

 /* import { deleteProduct } from "../services/product" */
export default {
  name: 'Home',
  components: {
    Banner,
    Products,
    AboutUs,
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
  }

  /* async deleteProduct(product) {
      await deleteTask(product);
      this.getAllProducts();
    }, */

</script>
