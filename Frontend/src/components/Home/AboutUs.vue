!<template>
  <section class="backg section mt-4">
    <v-container>
      <v-row class="">
        <v-col cols="7"></v-col>
        <v-col cols="5">
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            explicabo harum magnam quis suscipit impedit possimus debitis ab
            ducimus facere voluptas officia expedita nesciunt quas corporis
            inventore enim, illum rerum vel. Pariatur quas deleniti amet animi
            recusandae, dolorum assumenda minima?
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section {
  padding: 3rem 0;
  color: white;
}
.backg {
  background: url("../../assets/about.jpg");
  min-height: 50vh;
  background-size: cover;
  background-position: center;
}
</style>