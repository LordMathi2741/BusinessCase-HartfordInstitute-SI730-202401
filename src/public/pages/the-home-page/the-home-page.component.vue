<script>
export default {
  name: 'the-home-page'
}
</script>

<template>
  <div class="hero-manager" aria-label="The hero section content">
  </div>
  <div class="p-8 bg-purple-700 text-white text-center" aria-label="Phrase section">
    <p> {{$t('phrase')}}</p>
  </div>
</template>

<style scoped>
   .hero-manager{
     background-image: url('https://hign.org/sites/default/files/carousel-images/2022-02/iStock-945439872.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 70vh;
   }
</style>