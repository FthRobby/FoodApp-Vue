<template>
  <div class="keranjang">
    <Navbar :updateKeranjang="keranjangs" />
    <div class="container" style="margin-top: 100px">
      <!-- breadcrumb -->
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark"
                  ><b-icon
                    icon="house-fill"
                    scale="1.25"
                    shift-v="1.25"
                    aria-hidden="true"
                  ></b-icon>
                  Home</router-link
                >
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark"
                  >Menu List</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>

          <div
            class="card shadow card-product mb-3"
            style="max-width: 540px"
            v-for="keranjang in keranjangs"
            :key="keranjang.id"
          >
            <div class="row no-gutters">
              <div class="col-4">
                <img
                  :src="require(`../assets/image/${keranjang.products.gambar}`)"
                  class="img-fluid card-img h-100"
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title" style="font-size:1rem">{{ keranjang.products.nama }}</h5>
                  <p class="card-text">
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </p>
                  <div class="row">
                    <p class="card-text col font-weight-bolder">
                      Jumlah : {{ keranjang.jumlah_pemesanan }}
                    </p>
                    <p class="card-text col font-weight-bolder">
                      Rp :
                      {{
                        keranjang.products.harga * keranjang.jumlah_pemesanan
                      }}
                    </p>
                  </div>
                  <div class="card-link">
                    <button
                    class="btn btn-sm border float-right text-center mb-1"
                    @click="hapusKeranjang(keranjang.id)"
                  >
                    <i class="fas fa-trash text-fei"></i>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row no-gutters mt-5">
            <div class="col">
              <router-link to="/foods" class="btn btn-fei btn-sm"
                ><i class="fa fa-clipboard-list"></i> Tambah Menu
              </router-link>
            </div>
            <div class="col">
              <p class="font-weight-bolder float-right">
                Total : Rp. {{ totalBayar }}
              </p>
            </div>
          </div>

          <!-- <div class="table-responsive mt-3">
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
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="require(`../assets/image/${keranjang.products.gambar}`)"
                      class="rounded shadow"
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
          <router-link to="/foods" class="btn btn-dark btn-sm"><i class="fa fa-clipboard-list"></i> Tambah Menu</router-link>
           -->
        </div>
      </div>

      <b-button v-b-modal.modal-center class="float-right btn-fei btn-sm"
        ><b-icon-cart></b-icon-cart> Pesan</b-button
      >
      <b-modal
        id="modal-center"
        centered
        title="Fei Cafe Menu"
        ok-only
        cancel-disabled
      >
        <!-- Form checkout -->
        <form class="mt-4" v-on:submit.prevent>
          <h3 class="text-center">Data <strong>Pemesan</strong></h3>
          <hr class="bg-dark" />
          <div class="form-group">
            <label for="nama">Nama :</label>
            <input type="text" class="form-control" v-model="pesan.nama" />
          </div>
          <div class="form-group">
            <label for="noMeja">Nomor Meja :</label>
            <input type="text" class="form-control" v-model="pesan.noMeja" />
          </div>
        </form>
        <template #modal-footer="{ ok }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <!-- <button type="submit" class="btn btn-sm btn-dark" @click="checkout">
            <b-icon-cart></b-icon-cart> Konfirmasi Pesanan
          </button> -->
          <b-button type="submit" class="btn-fei" @click="checkout">
            <b-icon-cart></b-icon-cart> Pesan
          </b-button>
          <b-button class="btn-danger" @click="ok()"> Batal </b-button>
        </template>
      </b-modal>

      <div class="row justify-content-end">
        <div class="col-md-4"></div>
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
          this.$toast.error("Menu dihapus dari keranjang", {
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
