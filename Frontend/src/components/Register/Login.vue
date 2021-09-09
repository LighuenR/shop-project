!<template>
  <div class="container">
    <v-card
      class="mx-auto pa-4 mt-2 d-grid"
      max-width="400"
      width="100%"
    >
      <v-card-title>
           Log in
          </v-card-title>
          <v-form class="pa-4">
            
              
            <v-text-field
              v-model="email"
              label="Enter your email"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Enter your password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn block color="#275660" dark class="">Confirm</v-btn>
            
          </v-form >
       
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 100px 0 180px 0;
}
</style>