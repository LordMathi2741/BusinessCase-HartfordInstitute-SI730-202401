<script>
export default {
  name: 'the-notfound-page'
}
</script>

<template>
  <div class="the-notfound-manager" aria-label="The notfound page content">
     <h1> {{$t('notfoundTitle')}} </h1>
     <h4> {{$t('warning')}}</h4>
  </div>
</template>

<style scoped>
.the-notfound-manager {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
}

</style>