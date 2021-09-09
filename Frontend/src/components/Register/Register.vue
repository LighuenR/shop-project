!<template>
    <div class="container">
        <v-card>
          <v-card-title>
           Create account
          </v-card-title>
 <v-form
    ref="form"
      class="pa-4"
 
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      label="Enter your name"
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

    <v-text-field
      v-model="email"
      label="Enter your email"
      required
    ></v-text-field>

     <v-text-field
      v-model="phone"
      label="Enter your phone number"
      required
    ></v-text-field>
   

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you accept the terms and conditions?"
      required
    ></v-checkbox>

    <v-btn
      color="#275660"
      dark
    >
      Register
    </v-btn>
  </v-form>
  </v-card>
    </div>
</template>

<script>
    export default {
        data() {
           return {
        show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          
        },
        }
    }}
</script>

<style lang="scss" scoped>
.container {
    padding:75px 0 300px 0;
}

</style>