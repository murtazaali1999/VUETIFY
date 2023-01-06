<template>
  <v-container>
    <v-card
      class="mt-3 mb-2"
      color="#26c6da"
      theme="dark"
      max-width="400"
      prepend-icon="mdi-twitter"
      title="Tag"
      link
      ><!-- Switch Icon with another One -->
      <template v-slot:prepend>
        <v-icon size="x-large"></v-icon>
      </template>

      <v-card-text class="text-h5 py-2">
        "Turns out semicolon-less style is easier and safer in TS because most
        gotcha edge cases are type invalid as well."
      </v-card-text>

      <v-card-actions>
        <v-list-item class="w-100">
          <v-list-item-title link>UserName/Profile Link</v-list-item-title>
          <v-list-item-subtitle link>User Type</v-list-item-subtitle>

          <template v-slot:append>
            <div class="justify-self-end">
              <v-icon class="mr-1" icon="mdi-arrow-up-drop-circle"></v-icon>
              <span class="subheading mr-2">256</span>
              <v-icon class="mr-1" icon="mdi-arrow-down-drop-circle"></v-icon>
              <span class="subheading">45</span>
            </div>
          </template>
        </v-list-item>
      </v-card-actions>
    </v-card>
    <!-- Questions Card -->

    <v-card
      class="mt-2 mb-2"
      color="#26c6da"
      theme="dark"
      prepend-icon="mdi-tag"
    >
      <!-- Switch Icon with another One -->
      <template v-slot:prepend>
        <v-chip class="bg-purple" label>
          <v-icon size="medium"></v-icon>
          Insert Tag
        </v-chip>
      </template>

      <v-list-item-subtitle class="pa-3">
        Insert Question Name
      </v-list-item-subtitle>

      <v-card-text class="text-h5 pa-3">
        Insert Question Description
      </v-card-text>

      <v-card-actions class="mb-5">
        <v-list-item class="w-100">
          <v-list-item-title link>UserName/Profile Link</v-list-item-title>
          <v-list-item-subtitle link>User Student Type</v-list-item-subtitle>

          <template v-slot:append>
            <div class="justify-self-end" link>
              <v-btn class="rounded-circle">
                <v-icon
                  size="large"
                  class="mr-1"
                  icon="mdi-arrow-up-drop-circle"
                ></v-icon>
              </v-btn>
              <span class="subheading mr-2">256</span>
              <v-btn class="rounded-circle">
                <v-icon
                  size="large"
                  class="mr-1"
                  icon="mdi-arrow-down-drop-circle"
                ></v-icon>
              </v-btn>
              <span class="subheading">45</span>
            </div>
          </template>
        </v-list-item>
      </v-card-actions>

      <hr class="mb-3" />

      <v-card-actions class="mb-5">
        <v-list-item class="w-100">
          <template v-slot:append>
            <div class="ml-10" align="end">
              <v-btn class="rounded-circle">
                <v-icon icon="mdi-arrow-up-drop-circle" size="x-large"></v-icon
              ></v-btn>
              <span class="subheading mr-2">16</span>

              <v-btn class="rounded-circle">
                <v-icon
                  size="x-large"
                  icon="mdi-arrow-down-drop-circle"
                  link
                ></v-icon>
              </v-btn>
              <span class="subheading">35</span>
            </div>
          </template>
          <v-list-item-title>UserName/Profile Link</v-list-item-title>
          <v-list-item-subtitle class="mb-5"
            >User Proctor Type</v-list-item-subtitle
          >

          <v-text class="mt-7">
            What up ? Hows it ? Sup ? Salam ? Username ? Name ? What up ? Hows
            it ? Sup ? Salam ? Username ? Name ? What up ? Hows it ? Sup ? Salam
            ? Username ? Name ? What up ? Hows it ? Sup ? Salam ? Username ?
            Name ? What up ? Hows it ? Sup ? Salam ? Username ? Name ? What up ?
            Hows it ? Sup ? Salam ? Username ? Name ? What up ? Hows it ? Sup ?
            Salam ? Username ? Name ? What up ? Hows it ? Sup ? Salam ? Username
            ? Name ? What up ? Hows it ? Sup ? Salam ? Username ? Name ? What up
            ? Hows it ? Sup ? Salam ? Username ? Name ? What up ? Hows it ? Sup
            ? Salam ? Username ? Name ? What up ? Hows it ? Sup ? Salam ?
            Username Username ? Name ? What up ? Hows it ? Sup ? Salam ?
            Username ? Name ? ? Name ? What up ? Hows it ? Sup ? Salam ?
            Username ? Name ? Username ? Name ? ? Name ? What up ? Hows it ? Sup
            ? Salam ? Username ? Name ? ? Name ? What up ? Hows it ? Sup ? Salam
            ? Username ? Name ? ? Name ? What up ? Hows it ? Sup ? Salam ?
          </v-text>
        </v-list-item>
      </v-card-actions>

      <hr class="mb-3" />
      <c-container>
        <v-form @submit.prevent="" class="pa-3">
          <v-row class="w-100">
            <v-col cols="10" class="">
              <v-text-field
                class="rounded-lg font-weight-black"
                label="Answer"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="">
              <v-btn
                class="rounded-lg h-75 w-100 font-weight-black"
                color="white"
                >Submit</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </c-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
export default {};
</script>

<style></style>
