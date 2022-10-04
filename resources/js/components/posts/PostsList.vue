<template>
  <section id="posts-list">
    <h1>lista dei post</h1>
    <div class="container d-flex flex-wrap">
    <PostCard v-for="post in posts" :key="post.id" :post="post"></PostCard>
  </div>
  </section>
</template>
 
<script>
import Axios from "axios";
import PostCard from "./PostCard.vue";

export default {
  name: "PostsList",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      Axios.get("http://127.0.0.1:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          console.info("chiamata effettuata");
        });
    },
  },
  mounted() {
    this.fetchPosts();
  },
  components: { PostCard },
};
</script>

<style>
</style>