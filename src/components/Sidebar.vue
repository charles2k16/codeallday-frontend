<template>
  <div>
    <v-card flat id="themeBackground">
      <v-img class="white--text" height="200px" src="../assets/images/profile.jpg">
        <v-card-title class="align-end fill-height">Hello World</v-card-title>
      </v-img>
      <v-card-text class="white--text body-2 px-0">
        Hi 👋🏼 I'm Charles, a Javascript Developer. I write tutorials for JavaScript || Web Development and teach basic coding concepts.
      </v-card-text>
      <v-card-actions>
        <a class="twitter-follow-button" href="https://twitter.com/youthcodetech" data-size="large">
          Follow @youthcodetech
        </a>
      </v-card-actions>

      <v-divider></v-divider>
      <v-card-title class="align-end white--text font-weight-bold">Free Dev-Books</v-card-title>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
          <v-icon left color="yellow accent-3">mdi-language-javascript</v-icon> Javascript HandBook
        </v-btn>
      </div>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
          <v-icon left color="teal">mdi-nodejs</v-icon> 
          Node.js Insider
        </v-btn>
      </div>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
          <v-icon left color="cyan lighten-3">mdi-react</v-icon> 
          ReactNative HandBook
        </v-btn>
      </div>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
          <v-icon left color="yellow accent-3">mdi-language-javascript</v-icon> 
          Javascript for Games
        </v-btn>
      </div>
      <div>
        <v-btn class="ma-1 font-weight-bold" text color="white">
          <v-icon left color="teal lighten-2">mdi-vuejs</v-icon> 
          Vue.js
        </v-btn>
      </div>

      <v-divider></v-divider>
      <v-card-title class="align-end white--text font-weight-bold">Tutorial Tags</v-card-title>
      <div>
        <v-chip color="red accent-2" label small class="ma-1" >
          Vue
        </v-chip>
        <v-chip color="yellow" label small class="ma-1" >
          Javascript
        </v-chip>
        <v-chip color="green" label small class="ma-1" >
          Node
        </v-chip>
      </div>
    </v-card>
  </div>
</template>


<style>
  #themeBackground {
    background-color: #1E2227;
  }
</style>