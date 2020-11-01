<template>
  <div>
    <NavBar/>
    <div class="py-2 dark:bg-gray-800">
      <div class="container mx-auto">
        <Nuxt class="animate__animated animate__fadeIn"/>
      </div>
      <DarkModeSwitcher/>
    </div>
    <Footer/>

  </div>
</template>
<script>
export default {
  created () {
    if(localStorage.getItem('dark-mode') && JSON.parse(localStorage.getItem('dark-mode'))){

      document.getElementsByTagName("body")[0].classList.add("dark-mode");

    }
  },
}
</script>
