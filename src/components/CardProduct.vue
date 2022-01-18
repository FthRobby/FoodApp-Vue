<template>
  <div class="card shadow card-product mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-4">
          <img :src="require(`../assets/image/${product.gambar}`)" class="img-fluid card-img h-100">
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">{{product.nama}}</h5>
            <p class="card-text">Harga : Rp. {{product.harga}}</p>
            <router-link :to="'/foods/'+product.id" class="btn btn-buy btn-sm"><b-icon-cart></b-icon-cart> Pesan</router-link>
          </div>
        </div>
      </div>
    </div>
    
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
</style>