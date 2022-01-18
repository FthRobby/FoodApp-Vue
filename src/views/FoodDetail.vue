<template>
  <div class="food-detail">
    <Navbar />
    <div class="container" style="margin-top:100px;">
      
      <!-- breadcrumb -->
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Daftar Menu</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Detail Pesanan
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- end breadcrumb -->

      <!-- food detail -->
      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="require(`../assets/image/${product.gambar}`)"
            class="img-fluid shadow"
            alt=""
          />

           <!-- <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >

            <b-carousel-slide :img-src="require(`../assets/fei-image/${product.gambar}`)" class="img-fluid shadow">
            </b-carousel-slide>
            <b-carousel-slide :img-src="require(`../assets/fei-image/${product.gambarhot}`)" class="img-fluid shadow">
            </b-carousel-slide>

          </b-carousel> -->
        </div>

        <div class="col-md-6 mt-3">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr>
            <p class="mb-0 h6 font-italic"> {{ product.detail }}</p>
          <hr />
          <h4>
            Harga : <strong> Rp. {{ product.harga }}</strong>
          </h4>
          <hr />

          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="inputKeterangan"> Note : </label>
              <input
                class="form-control"
                type="number"
                placeholder="Jumlah Pesanan"
                v-model="pesan.jumlah_pemesanan"
              />
              <textarea
                class="form-control mt-2"
                rows="3"
                placeholder="Tidak pake keju, dll...."
                v-model="pesan.keterangan"
              ></textarea>
            </div>

            <router-link to="/foods" class="btn btn-sm btn-warning mr-3">
              <b-icon-arrow-left></b-icon-arrow-left> Back
            </router-link>

            <button
              @click="pemesanan"
              type="submit"
              class="btn btn-sm btn-buy mr-3"
            >
              <b-icon-cart></b-icon-cart> Buy
            </button>
           
            
          </form>
        </div>
      </div>
      <!-- end food detail -->
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang"})
            this.$toast.success("Sukses masuk keranjang", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.success("Jumlah pesanan harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
  // mounted() {
  //   axios
  //   .get("http://localhost:3000/products-minuman/" +this.$route.params.id)
  //   .then((response) => this.setProduct(response.data))
  //     .catch((error) => console.log(error));
  // }
}; 
</script>

<style>
</style>