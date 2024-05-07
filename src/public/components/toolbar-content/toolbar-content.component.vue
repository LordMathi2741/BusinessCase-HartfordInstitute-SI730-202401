<script>
export default {
  name: 'toolbar-content',
  methods:{
     changeLanguage(lang){
       this.$i18n.locale = lang
     }
  }
}
</script>
<template>
  <div class="card" aria-label="The toolbar container">
    <pv-toolbar class="bg-cyan-700 p-5" aria-label="The toolbar content">
      <template #start>
        <img src="https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png" width="100" alt="Toolbar image" aria-label="Branding logo"/>
      </template>
       <template #end>
         <router-link to="/home" class="route-text" aria-label="Go to home">
           <span class="text-white text-xl"> {{$t('home')}}</span>
         </router-link>
          <router-link to="/nursing/mental-state-exams" class="route-text" aria-label="Go to mental state exams results">
             <span class=" ml-4 text-white text-xl"> {{$t('examsSection')}}</span>
          </router-link>
         <div class="ml-4 flex gap-3">
           <pv-button class="bg-black-alpha-70 text-white border-transparent" @click="changeLanguage('en')" aria-label="Translate english"> EN </pv-button>
            <pv-button class="bg-black-alpha-70 text-white border-transparent" @click="changeLanguage('es')" aria-label="Translate spanish"> ES </pv-button>
         </div>
       </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
.route-text{
    text-decoration: none;
}

.route-text:hover{
    cursor: pointer;
    transform:scale(1.1);
    transition: ease-in 0.3s;
 }
</style>