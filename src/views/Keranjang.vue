<template>
  <div class="keranjang">
    <Navbar :updateKeranjang="keranjangs" />
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

          <div class="table-responsive-sm mt-3">
            <table class="table">
              <thead class="bg-dark text-white text-center">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Menu</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody class="">
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="require(`../assets/images/${keranjang.products.gambar}`)"
                      class=" shadow"
                      width="150"
                      alt=""
                    />
                  </td>
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
                      <button
                        class="btn btn-sm btn-danger text-center"
                        @click="hapusKeranjang(keranjang.id)"
                      >
                        <b-icon-trash></b-icon-trash>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right" class="text-left">
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
          <router-link to="/foods" class="btn btn-primary btn-sm"><i class="fa fa-clipboard-list"></i> Tambah Menu</router-link>
        </div>
      </div>

      <!-- Form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <h3 class="text-center">Data <strong>Pemesan</strong> </h3>
            <hr class="bg-dark">
            <div class="form-group">
              <label for="nama">Nama :</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="noMeja">Nomor Meja :</label>
              <input type="text" class="form-control" v-model="pesan.noMeja" />
            </div>

            <button
              type="submit"
              class="btn btn-sm btn-primary float-right"
              @click="checkout"
            >
              <b-icon-cart></b-icon-cart> Pesan
            </button>
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
  name: "Keranjang",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
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
          this.$toast.error("Sukses Hapus Keranjang", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
          // Update Data keranjang
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      if (this.pesan.nama && this.pesan.noMeja) {

        this.pesan.keranjangs = this.keranjangs;

        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            
            // Hapus semua isi keranjang Jika semua item di checkout
            this.keranjangs.map(function (item) {
              return axios
                .delete("http://localhost:3000/keranjangs/" + item.id)
                .catch((error) => console.log(error));
            });
            this.$router.push({ path: "/pesanan-sukses" });

            // Toast jika berhasil di checkout
            this.$toast.success("Sukses Dipesan", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        // Toast gagal memesan jika form tidak diisi
        this.$toast.error("Nama dan Nomor Meja Harus diisi", {
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