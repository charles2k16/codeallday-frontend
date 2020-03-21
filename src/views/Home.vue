<template>
  <div id="background">
    <NavBar />
    <v-content>
      <v-container fill-height>
      <v-row>
        <v-col md="3">
          <Sidebar />
        </v-col>
        <v-col md="8">
          <router-view></router-view>
        </v-col>
      </v-row> 
    </v-container>
    </v-content>
  </div>
</template>

<script>
import NavBar from "../components/NavBar"
import Sidebar from "../components/Sidebar"

export default {
  name: "Home",
  components:{
    NavBar, Sidebar
  }
}
</script>

<style scoped>
  #background {
    background-color: #1E2227;
  }
</style>