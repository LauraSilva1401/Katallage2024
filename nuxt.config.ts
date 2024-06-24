import modules from "./modules";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  ...modules,

  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],

  plugins: [
    { src: "~/plugins/bootstrap.js", mode: 'client'},
    "~/plugins/contentful.js"
  ],
  
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
  },

  buildModules: [
    '@nuxtjs/dotenv'
  ],


})
