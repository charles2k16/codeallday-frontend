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

      <div class="mt-5">
        <span class="ml-4">
          <v-bottom-sheet
            v-model="postCommentsVisible"
            inset
            max-width="50%"
            scrollable
          >
            <template v-slot:activator="{ on }">
              <v-btn v-on="on">
                <v-icon left dark x-small>mdi-comment-plus-outline</v-icon>
                Post Comment
              </v-btn>
            </template>

            <v-sheet height="320px" class="px-4 py-3">
              <v-form ref="commentsForm" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="commentsForm.name"
                  :counter="15"
                  label="First name"
                  required
                  :rules="rules.name"
                >
                </v-text-field>
                <v-textarea
                  v-model="commentsForm.comment"
                  label="Comment"
                  autofocus
                  auto-grow
                  :rules="rules.comment"
                >
                </v-textarea>
                <br />
                <v-btn
                  color="deep-purple accent-4"
                  dark
                  block
                  :loading="btnLoading"
                  >Post</v-btn
                >
              </v-form>
            </v-sheet>
          </v-bottom-sheet>
        </span>
        <span style="float:right" class="white--text mr-2"
          >{{ post.comments.length }} comments</span
        >

        <br />
        <div v-if="!commentsEmpty">
          <v-timeline
            dense
            v-for="(comment, index) in post.comments"
            :key="index"
          >
            <v-timeline-item>
              <template v-slot:icon>
                <v-avatar color="pink">
                  <span class="white--text headline">{{
                    comment.alphabet
                  }}</span>
                </v-avatar>
              </template>

              <v-card class="elevation-2">
                <v-card-title class="headline">{{ comment.name }}</v-card-title>
                <v-card-text>
                  {{ comment.comment }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
        <div v-else class="mt-5 mb-5">
          <h4 style="text-align: center" class="white--text">
            No comments
          </h4>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import postService from '@/api/posts';
import commentsService from '@/api/comments';
Vue.use(require('vue-moment'));

export default {
  name: 'post',
  data() {
    return {
      postCommentsVisible: false,
      valid: true,
      btnLoading: false,
      transition: 'slide-y-reverse-transition',
      share: true,
      post: {},
      commentsForm: {
        name: '',
        comment: '',
      },
      rules: {
        name: [
          (v) => !!v || 'Name field is required',
          (v) => v.length > 15 || 'Name should be less than 15 characters',
        ],
        comment: [(v) => !!v || 'Comment field is required'],
      },
    };
  },
  computed: {
    commentsEmpty: function() {
      let c = this.post.comments;
      return !Array.isArray(c) || !c.length;
    },
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
