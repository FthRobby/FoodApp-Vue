<template>
  <div class="keranjang">
    <Navbar :updateKeranjang="keranjangs"/>
    <div class="container mt-4">
      <!-- breadcrumb -->
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark"
                  >Daftar Menu</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>

          <div class="table-responsive mt-3">
            <table class="table">
              <thead class="bg-dark text-white text-center">
                <tr>
                  <th scope="col">No.</th>
                  <!-- <th scope="col">Foto</th> -->
                  <th scope="col">Menu</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <!-- <td>
                    <img
                      :src=" '../assets/images/' + keranjang.products.gambar"
                      class="img-fluid shadow"
                      width="250"
                      alt=""
                    />
                  </td> -->
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </td>
                  <td>Rp. {{ keranjang.products.harga }}</td>
                  <td>
                    <strong
                      >Rp.
                      {{
                        keranjang.products.harga * keranjang.jumlah_pemesanan
                      }}</strong
                    >
                  </td>
                  <td>
                    <div class="text-center">
                      <!-- <b-button-group class="mr-1 bg-danger">
                        <b-button title="Hapus" variant="danger">
                          <b-icon icon="trash" aria-hidden="true"></b-icon>
                        </b-button>
                        <b-button title="Edit">
                          <b-icon icon="cart-plus" aria-hidden="true"></b-icon>
                        </b-button>
                      </b-button-group> -->
                      <!-- <i class="fas fa-trash text-danger mr-4"></i>
                      <i class="fas fa-edit text-primary"></i> -->
                      <button class="btn btn-sm btn-danger text-center" @click="hapusKeranjang(keranjang.id)">
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="5" align="right" class="text-left">
                    <strong>Total Bayar :</strong>
                  </td>
                  <td align="right" class="text-center">
                    <strong>Rp. {{ totalBayar }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "Keranjang",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.success("Menu berhasil dihapus", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          // Update data keranjang
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjangs(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalBayar() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style>
</style>