<template>
 <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{post.title}}</h5>
    <p class="card-text">{{post.content}}</p>
  </div>
  
</div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: Object,
  },
};
</script>

<style>
</style>