<template>
<div class="pesanan-sukses">
  
  <Navbar />
  <div class="container mt-5">
    <div class="row">
      <div class="col my-5 text-center mx-5">
        <h2><strong>Sukses!!</strong></h2>
        <h4>Pesanan Anda Segera Diproses</h4>
        <img src="../assets/success.png" width="500" class="img-fluid" alt="">
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