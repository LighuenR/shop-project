!<template>
  <div class="backg section">
    <v-row>
      <v-col cols="7"></v-col>
      <v-col cols="4">
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
  </div>
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