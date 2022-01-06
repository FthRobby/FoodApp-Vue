<template>
  <div class="hero">
    <!-- desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Menu Makanan Lezat,</strong> <br />ada di genggamanmu
              </h2>
              <p>pilih makanan favoritmu sekarang</p>
              <router-link to="/foods" class="btn btn-sm btn-primary">
                <b-icon-arrow-right></b-icon-arrow-right> Pesan Sekarang
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/11174.jpg" width="100%" alt="Hero" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6">
          <img src="../assets/images/11174.jpg" width="100%" class="img-fluid" alt="Hero" />
        </div>
        <div class="col-md-6 mb-3">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center" data-aos="fade-right">
              <h2>
                <strong>Menu Makanan Lezat,</strong> <br />ada pada gadgetmu
              </h2>
              <p>pilih makanan favoritmu sekarang</p>
             <router-link to="/foods" class="btn btn-sm btn-primary">
                <b-icon-arrow-right></b-icon-arrow-right> Pesan Sekarang
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>