<template>
  <h1>Grid System/Chip/Card/Avatar/Expansion Panel/Menu(DropDown)/Form</h1>
  <v-container class="bg-blue" app>
    <!-- Container -->
    <v-row class="bg-orange">
      <!-- Row -->
      <v-col class="bg-green" align="center">1</v-col>
      <v-spacer class="mt-3" align="center">Spacer</v-spacer>
      <!-- creates equal space between all elements, V-SPACER -->
      <v-col class="bg-purple">2</v-col>
      <v-col class="bg-black">3</v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-chip class="bg-purple">Im a V-CHIP</v-chip>
      </v-col>
      <v-col>
        <v-chip class="bg-green" label>A vchip Label</v-chip>
      </v-col>
      <v-col>
        <v-chip class="bg-Indigo" label>
          <v-icon>mdi-account</v-icon>
          vchip label icon
        </v-chip>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>I am a Title</v-card-title>
          <v-card-subtitle>I am a Sub-Title</v-card-subtitle>
          <v-card-text>Im the text</v-card-text>
          <v-card-actions>Perform Actions with me</v-card-actions>
        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-card-title>I am a Title</v-card-title>
          <v-card-subtitle>I am a Sub-Title</v-card-subtitle>
          <v-card-text>Im the text</v-card-text>
          <v-card-actions>Perform Actions with me</v-card-actions>
        </v-card>
      </v-col>

      <v-col align="center">
        <v-card>
          <v-avatar image="@/assets/logo.png"></v-avatar>
          <v-card-title>I am a centered Title</v-card-title>
          <v-card-subtitle>I am a Sub-Title</v-card-subtitle>
          <v-card-text>Im the text</v-card-text>
          <v-card-actions>Perform Actions with me</v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel
            title="I am Title"
            text="2r3 jwe fionv- 2r93 0jwh   vi buh "
          ></v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col>
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props"> Activator slot </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            label="Name"
            required
          ></v-text-field>

          <v-text-field v-model="email" label="E-mail" required></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn color="success" class="mr-4"> Validate </v-btn>

          <v-btn color="error" class="mr-4"> Reset Form </v-btn>

          <v-btn color="warning"> Reset Validation </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  setup() {
    const items = [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ];
    const valid = true;
    const name = "";
    const select = null;

    const checkbox = false;
    const email = "";

    return {
      email,
      items,
      checkbox,
      select,
      name,
      valid,
    };
  },
};
</script>

<style></style>
