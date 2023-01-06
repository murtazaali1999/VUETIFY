<template>
  <Supper />
  <Dinner v-if="display" />
  <v-app v-if="display">
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
    <v-navigation-drawer app class="bg-lilac" v-model="data" temporary>
      <v-icon
        @click="data ? (data = false) : (data = true)"
        class="mt-5 text-white"
        >mdi-menu</v-icon
      >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
          router
          :to="item.title"
        >
          <router-view :key="item.title">
            <template>
              <v-icon :icon="item.value"></v-icon>
            </template>

            <v-list-item-title v-text="item.title"></v-list-item-title>
          </router-view>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts">
import { ref } from "vue";
import Dinner from "./views/Dinner.vue";
import Supper from "./views/Supper.vue";

export default {
  setup() {
    const data = ref(true);
    const display = ref(false);
    const items = [
      { value: "mdi-account", title: "/" },
      { value: "mdi-account", title: "/home" },
      { value: "mdi-menu", title: "/dinner" },
      { value: "mdi-delete", title: "/supper" },
    ];

    return { data, items, display };
  },
  components: { Dinner, Supper },
};
</script>
