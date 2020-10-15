export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Calculadora Estadística',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/sweetalert2@10.1.0/dist/sweetalert2.min.css' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/@lottiefiles/lottie-player@0.5.1/dist/lottie-player.min.js', defer: true },
      { src: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/js/fontawesome.min.js', defer: true },
      { src: 'https://cdn.jsdelivr.net/npm/sweetalert2@10.1.0/dist/sweetalert2.all.min.js', defer: true },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
