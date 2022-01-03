<template>
  <div class="about">
    <Navbar />
    <div class="container" style="margin-top: 100px;">
      <h3>Tentang Kami</h3>

       <!-- carousel -->
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            class="img-fluid"
          ></b-carousel-slide>

           <b-carousel-slide
            caption="Kedua"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          ></b-carousel-slide>

           <b-carousel-slide
            caption="Ke Tiga"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          ></b-carousel-slide>

        </b-carousel>
      </div>
      <!-- end carousel -->

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "About",
  components: {
    Navbar,
  }

}
</script>

<style>

</style>