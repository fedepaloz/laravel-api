<template>
  <div class="content">
    <TheHeader :title="title"></TheHeader>
   <main>
    <PostsList></PostsList>
   </main>
  </div>
</template>

 
 <script>
import TheHeader from "./TheHeader.vue";
import PostsList from "./posts/PostsList.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    PostsList
},
  data() {
    return {
      title: "BOOLPRESS",
    }; 
  },
};
</script>


 