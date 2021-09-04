!<template>
  <v-container class="my-2">
    <h1 class="my-2">Products</h1>
    <v-row>
      <v-col cols="3">
        <v-card :loading="loading" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="200" src="../../assets/Products/1.jpg"></v-img>

          <v-card-title>Vestido Badilico</v-card-title>

          <v-card-text>
            <div class="mb-1 text-subtitle-1">
              <h3>Price:<strong> $100 </strong></h3>
            </div>

            <div>
              <p>Description: Calza loca que hace todo mucho mas facil</p>
            </div>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>S</v-chip>

              <v-chip>M</v-chip>

              <v-chip>L</v-chip>

              <v-chip>XL</v-chip>

              <v-chip>XXL</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn class="btn-color" text @click="reserve">
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card :loading="loading" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="200" src="../../assets/Products/2.jpg"></v-img>

          <v-card-title>Vestido Badilico</v-card-title>

          <v-card-text>
            <div class="mb-1 text-subtitle-1">
              <h3>Price:<strong> $100 </strong></h3>
            </div>

            <div>
              <p>Description: Calza loca que hace todo mucho mas facil</p>
            </div>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>S</v-chip>

              <v-chip>M</v-chip>

              <v-chip>L</v-chip>

              <v-chip>XL</v-chip>

              <v-chip>XXL</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn class="btn-color" text @click="reserve">
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card :loading="loading" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="200" src="../../assets/Products/3.jpg"></v-img>

          <v-card-title>Vestido Badilico</v-card-title>

          <v-card-text>
            <div class="mb-1 text-subtitle-1">
              <h3>Price:<strong> $100 </strong></h3>
            </div>

            <div>
              <p>Description: Calza loca que hace todo mucho mas facil</p>
            </div>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>S</v-chip>

              <v-chip>M</v-chip>

              <v-chip>L</v-chip>

              <v-chip>XL</v-chip>

              <v-chip>XXL</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn class="btn-color" text @click="reserve">
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card :loading="loading" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="200" src="../../assets/Products/4.jpg"></v-img>

          <v-card-title>Vestido Badilico</v-card-title>

          <v-card-text>
            <div class="mb-1 text-subtitle-1">
              <h3>Price:<strong> $100 </strong></h3>
            </div>

            <div>
              <p>Description: Calza loca que hace todo mucho mas facil</p>
            </div>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>S</v-chip>

              <v-chip>M</v-chip>

              <v-chip>L</v-chip>

              <v-chip>XL</v-chip>

              <v-chip>XXL</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn class="btn-color" text @click="reserve">
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
 </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn-color {
  color: #275660;
}
</style>