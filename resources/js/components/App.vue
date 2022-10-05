<template>
  <div class="content">
    <TheHeader :title="title"></TheHeader>
   <main>
    <HomePage></HomePage>
   </main>
  </div>
</template>

 
 <script>
import HomePage from './pages/HomePage.vue';
import TheHeader from "./TheHeader.vue";


export default {
  name: "App",
  components: {
    TheHeader,
    HomePage,
   
},
  data() {
    return {
      title: "BOOLPRESS",
    }; 
  },
};
</script>


 