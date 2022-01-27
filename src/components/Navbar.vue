<template>
  <!-- <nav
    class="navbar navbar-expand-lg navbar-light shadow-sm sticky-top bg-white"
  >
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../assets/images/logo.png" width="150" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Daftar Menu</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/keranjang">
              Keranjang
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-primary ml-2">{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->

  <div>
    <b-navbar toggleable="lg" type="light" class="fixed-top navbar-light shadow bg-white">
      <div class="container">
        <b-navbar-brand href="/">
          <img src="../assets/logo/logo.png" class="rounded-circle" alt="" />
          <strong> FEI</strong>CAFE
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up" font-scale="1.5"></b-icon>
            <b-icon v-else icon="chevron-bar-down" font-scale="1.5"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link text-dark" to="/"> <i class="fas fa-home"></i> Home</router-link>
            <router-link class="nav-link text-dark" to="/foods"> <i class="fas fa-clipboard-list"></i> Menu List</router-link>
            <router-link class="nav-link text-dark" to="/about"> <i class="fab fa-telegram-plane"></i> About Fei</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link class="nav-link text-dark" to="/keranjang">
              Cart
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-dark ml-2">{{ updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length}}</span>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  props: ["updateKeranjang"],
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>