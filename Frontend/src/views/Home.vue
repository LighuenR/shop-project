<template>
  <div class="home">
     
    <Banner/>
  
  </div>
 

</template>

<script>
 import Banner from "../components/Home/Banner.vue"
 import { getProducts} from "../services/product";
export default {
  name: 'Home',
  components: {
    Banner
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
}
</script>
