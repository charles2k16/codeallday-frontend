<template>
  <div>
    <v-card id="theme" class="my-1" flat>
      <v-card-title class="textTitle white--text">{{
        post.title
      }}</v-card-title>
      <v-card-text class="subTitle white--text mt-2">{{
        post.sub_content
      }}</v-card-text>
      <v-card-title class="font-weight-bold body-2 white--text mt-3">
        Posted on
        <span class="cyan--text ml-2"
          >{{ post.created_at | moment('MMM Do YYYY') }}
        </span>
        , Last updated
        <span class="cyan--text ml-2">{{
          post.updated_at | moment('MMM Do YYYY')
        }}</span
        >,
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="white--text">{{ post.content }}</v-card-text>
      <v-card-actions>
        <v-icon class="mr-1" color="cyan lighten-3" small>mdi-eye</v-icon>
        <span class="body-2 mr-2 white--text">{{ post.views }}</span>
        <v-speed-dial
          :v-model="post.share"
          left
          direction="right"
          open-on-hover
          :transition="transition"
        >
          <template v-slot:activator>
            <v-btn :v-model="post.share" color="blue darken-2" dark fab x-small>
              <v-icon v-if="!post.share">mdi-close</v-icon>
              <v-icon v-else>mdi-share-outline</v-icon>
            </v-btn>
          </template>
          <v-btn fab dark x-small color="primary">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn fab dark x-small color="light-blue darken-2">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn fab dark x-small color="teal accent-3">
            <v-icon>mdi-whatsapp</v-icon>
          </v-btn>
        </v-speed-dial>
        <v-spacer></v-spacer>
        <router-link to="/">
          <v-btn text color="primary">
            <v-icon left dark x-small>mdi-comment-plus-outline</v-icon>Go Back
            Home
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import postService from '@/api/posts';
Vue.use(require('vue-moment'));

export default {
  name: 'post',
  data() {
    return {
      transition: 'slide-y-reverse-transition',
      share: true,
      post: {},
    };
  },
  created() {
    this.getPost(this.$route.query.id);
  },
  methods: {
    getPost(id) {
      postService
        .getPost(id)
        .then((response) => {
          this.post = response.post;
        })
        .catch((errors) => console.log(errors));
    },
  },
};
</script>
