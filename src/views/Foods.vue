<template>
  <div>
    <Navbar />

    <!-- <div class="container d-sm-block d-md-none d-flex justify-content-center" style="margin-top: 100px">
      <img src="../assets/fei-image/menu-list.jpg" class="img-fluid" width="300" alt="">
    </div> -->

    <div style="margin-top:100px;">
      
    <div class="container">

      <div class="row mt-5" data-aos="fade-right">
        <div class="col">
          <h2><strong>Menu</strong> List</h2>
        </div>
        <div class="col">
          <b-button v-b-modal.modal-center class="float-right btn-fei btn-sm"><b-icon-list></b-icon-list> Menu List</b-button>
          <!-- open modal -->
          <b-modal id="modal-center" centered title="Fei Cafe Menu" ok-only cancel-disabled>
            <img src="../assets/image/menu-list.jpg" class="img-fluid" alt="">
            <template #modal-footer="{ ok }">
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button class="btn-fei" @click="ok()">
                Close
              </b-button>
            </template>
          </b-modal>

          
          
        </div>
      </div>

      <div class="rom mt-3">
        <div class="col" data-aos="fade-up">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Makanan"
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />

            <div class="input-group-prepend">
              <span class="input-group-text bg-dark" id="basic-addon1">
                <!-- <b-icon-search></b-icon-search> -->
                <i class="fa fa-search text-white"></i>
              </span>
            </div>
          </div>
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

    <go-top bg-color="dark"></go-top>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
import GoTop from "@inotom/vue-go-top";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct,
    GoTop,
  },
  // menampilkan data
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    // method untuk menampilkan menu dari search
    searchFood() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
  },  
  // memanggil data untuk ditampilkan
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
