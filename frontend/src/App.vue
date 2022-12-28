<template>
  <v-app>
    <v-toolbar flat app class="text-green-lighten-2 elevation-10">
      <v-icon @click="data ? (data = false) : (data = true)">mdi-menu</v-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Toolbar</span>
        <span class="">Title</span>
      </v-toolbar-title>
      <!-- v-spacer, which will take all space and space between same level elments -->
      <v-btn class="grey ml-1 pl-1">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app class="bg-indigo" v-model="data" temporary>
      <v-icon @click="data ? (data = false) : (data = true)">mdi-menu</v-icon>
      <h1>route-link-1</h1>
      <h1>route-link-2</h1>
      <h1>route-link-3</h1>
    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const data = ref(true);

    return { data };
  },
};
</script>
