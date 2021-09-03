!<template>
  <div>
    <v-footer dark padless>
      <v-card class="flex">
          <v-card-text class="back text-center">
          <h2> Keep conected with us!</h2>
          <v-btn
            class="white--text"
            icon
          >
            <v-icon size="24px">
              mdi-instagram
            </v-icon>
          </v-btn>
           <v-btn
            class="white--text"
            icon
          >
            <v-icon size="24px">
              mdi-twitter
            </v-icon>
          </v-btn>
           <v-btn
            class="white--text"
            icon
          >
            <v-icon size="24px">
              mdi-facebook
            </v-icon>
          </v-btn>
        </v-card-text>
      <!--   <v-card-title  class="back">
       
      
        </v-card-title> -->

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.back {
    background-color:#275660 ;
   
}
.back h2 {
  font-weight: 400;
}
</style>