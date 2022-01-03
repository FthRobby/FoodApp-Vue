<template>
  <div class="home">
    <Navbar />
    <div class="container mt-5">
     
      <Hero />

      <div class="row mt-4">
        <div class="col">
          <h2>Menu <strong>Favorit</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-sm btn-primary float-right"
            ><b-icon-eye></b-icon-eye> Lihat Semua</router-link
          >
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  // menampilkan data
  data() {
    return {
      products: [],
      // carousel
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    // carousel
  },
  // memanggil data untuk ditampilkan
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
