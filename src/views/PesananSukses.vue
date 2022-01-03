<template>
<div class="pesanan-sukses">
  
  <Navbar />
  <div class="container mt-5">
    <div class="row justofy-content-center">
      <div class="col text-center mt-5">
        <h2><strong>Sukses!!</strong></h2>
        <h4>Pesanan Anda Segera Diproses</h4>
        <img src="../assets/images/success.png" class="img-fluid mt-5" alt="">
        <br>
        <h4 class="">Silahkan Menunggu</h4>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
  name: "PesananSukses",
  components: {
    Navbar,
  }
}
</script>

<style>

</style>