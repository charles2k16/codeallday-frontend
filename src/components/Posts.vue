<template>
  <div style="max-height:100vh">
    <v-card
      class="my-1"
      flat
      id="theme"
      v-for="(post, index) in posts"
      :key="index"
      @click="showSinglePost(post)"
    >
      <div class="d-flex justify-between">
        <div>
          <v-card-title class="textTitle white--text">
            {{ post.title }}
          </v-card-title>
          <v-card-text class="subTitle white--text mt-2">
            {{ post.sub_content }}
          </v-card-text>
          <v-card-actions>
            <v-icon class="mr-1" color="cyan lighten-3" small>mdi-eye</v-icon>
            <span class="body-2 mr-2 white--text">{{ post.views }}</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1" color="blue-grey lighten-5" small
              >mdi-timer</v-icon
            >
            <span class="body-2 white--text">{{
              post.updated_at | moment('from', 'now')
            }}</span>
            <v-spacer></v-spacer>
          </v-card-actions>
        </div>
        <div class="flex-grow-1 flex-shrink-0">
          <v-card-title class="white--text">
            {{ post.created_at | moment('MMM Do YYYY') }}
          </v-card-title>
          <div class="text-center mt-3">
            <v-chip color="yellow">
              {{ post.category.name }}
            </v-chip>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import postService from '@/api/posts';

Vue.use(require('vue-moment'));

export default {
  name: 'Posts',
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      postService
        .getPosts()
        .then((response) => {
          this.posts = response.posts;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showSinglePost(post) {
      this.$router.push({
        path: '/post',
        query: { id: post.id, title: post.title },
      });
    },
  },
};
</script>

<style>
#theme {
  background-color: #1e2227;
  font-family: 'Montserrat', sans-serif;
}
#theme:hover {
  background: #282c34;
  cursor: pointer;
}
</style>
