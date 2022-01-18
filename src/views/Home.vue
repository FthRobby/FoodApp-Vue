<template>
  <div class="home">
    <Navbar />
    <div class="container mt-5">
     
      <Hero />

      <div class="row mt-4" data-aos="fade-right">
        <div class="col">
          <h2><strong>Favorit</strong> Menu</h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-sm btn-fei float-right"
            ><b-icon-eye></b-icon-eye> See all menu</router-link
          >
        </div>
      </div>

      <div class="mb-4 container col-sm">
        <!-- <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
          data-aos="zoom-in-out"
        >
          <CardProduct :product="product" />
        </div> -->

          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000;color:#000 !important;"
            fade
            controls
            indicators        
          >

            <b-carousel-slide
              caption="Bolognese"
              text="Rp. 28000"
              :img-src="require('../assets/image/bolognese.jpg')" 
              class="img-fluid shadow">
              <router-link to="/foods/1" class="btn btn-sm btn-fei"><b-icon-cart></b-icon-cart> Buy</router-link>
            </b-carousel-slide>

            <b-carousel-slide
              caption="Deluxe Fei Coffee"
              text="Rp. 24000"
              :img-src="require('../assets/image/deluxe-fei-coffee.jpg')" 
              class="img-fluid shadow">
              <router-link to="/foods/2" class="btn btn-sm btn-fei"><b-icon-cart></b-icon-cart> Buy</router-link>
            </b-carousel-slide>
            
            <b-carousel-slide
              caption="Fei Fries"
              text="Rp. 18000"
              :img-src="require('../assets/image/fei-fries-with-sausage.jpg')" 
              class="img-fluid shadow">
              <router-link to="/foods/3" class="btn btn-sm btn-fei"><b-icon-cart></b-icon-cart> Buy</router-link>
            </b-carousel-slide>

          </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
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
