// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          //set colors here
          primary: "#1867C0",
          secondary: "#5CBBF6",
          lilac: "#C8A2C8",
        },
      },
    },
  },
  icons: {
    //set icons here
    defaultSet: "mdi",
    sets: {
      mdi,
      fa,
    },
  },
});
