<template>
  <div class="food-detail">
    <Navbar />
    <div class="container mt-5">
      <!-- breadcrumb -->
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Makanan</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Detail Pesanan
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- food detail -->
      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="require(`../assets/images/${product.gambar}`)"
            class="img-fluid shadow"
            alt=""
          />
        </div>

        <div class="col-md-6">
          <h2>
            <strong>{{ product.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga : <strong> Rp. {{ product.harga }}</strong>
          </h4>
          <hr />
          
          <form action="">
            <div class="form-group">
              <label for="inputKeterangan">
                Keterangan :
              </label>
              <input class="form-control" type="text" placeholder="Jumlah Pesanan">
              <textarea class="form-control mt-2" rows="3" placeholder="Pedes, dll...."></textarea>
            </div>
            <button type="submit" class="btn btn-sm btn-primary"><b-icon-cart></b-icon-cart> Pesan</button>
          </form>

        </div>
      </div>
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
      product: [],
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>