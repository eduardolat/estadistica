<template>
  <div>

    <div class="animate__animated animate__fadeInDown animate__faster" id="fixed-nav-div">

      <div class="flex justify-between container mx-auto flex-wrap animate__animated animate__fadeInDown z-10">

          <div class="flex">

            <nuxt-link to="/" class="flex">

              <img src="icon.svg" class="w-18" alt="Ícono de la aplicación">

              <div class="flex flex-wrap content-center">
                <span class="text-2xl ml-2">Estadística</span>
              </div>

            </nuxt-link>

          </div>

          <div class="md:hidden text-3xl text-black hover:text-gray-700 z-10">
            <i class="fas fa-bars cursor-pointer" v-if="!openMenu" @click="openMenu = !openMenu"></i>
            <i class="fas fa-times cursor-pointer" v-if="openMenu" @click="openMenu = !openMenu"></i>
          </div>

          <div :class="{'hidden': !openMenu}" class="block w-full md:w-auto md:flex md:flex-wrap content-center animate__animated animate__fadeIn z-0">

            <nuxt-link class="block text-center my-2 nav-link" to="/">Datos no agrupados</nuxt-link>
            <nuxt-link class="block text-center my-2 nav-link" to="/linealRegression">Regresión lineal</nuxt-link>
            <a         class="block text-center my-2 github-link" href="https://github.com/eduardodevop/estadistica" target="_blank">
              <i class="fab fa-github"></i> Github
            </a>

          </div>

      </div>

    </div>

    <div class="w-full h-16"></div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        openMenu: false
      }
    },
  }
</script>

<style scoped>

#fixed-nav-div{
  @apply p-2 shadow fixed z-40 w-full bg-white;
}

.nav-link {
  @apply mx-2 text-lg border-b-2 border-transparent;
}

.nav-link:hover {
  @apply text-purple-800;
}

.github-link {
  @apply text-blue-600 mx-2 text-lg;
}

.github-link:hover {
  @apply text-blue-800;
}

.nuxt-link-exact-active.nav-link{
  @apply text-purple-800;
}

@screen md {
  .nav-link:hover {
    @apply border-purple-500;
  }

  .nuxt-link-exact-active.nav-link{
    @apply border-purple-500;
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    #fixed-nav-div {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

}

</style>
