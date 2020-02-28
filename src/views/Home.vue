<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col sm="12" cols="12" md="4" lg="4"></v-col>
        <v-col sm="12" cols="12" md="8" lg="8">
          <Posts/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Posts from "./Posts";

export default {
  name: 'Home',
  components: {
    Posts
  }
}
</script>
