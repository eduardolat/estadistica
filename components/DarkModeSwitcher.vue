<template>
  <div class="flex justify-center mt-2 mb-4 noselect">
    <div class="mr-2">
      <span class="text-xl font-bold cursor-pointer" @click="darkMode = !darkMode">Modo oscuro:</span>
    </div>
    <div class="relative inline-block w-10 mt-1 align-middle select-none transition duration-200 ease-in">
      <input v-model="darkMode" type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
      <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        darkMode: false
      }
    },
    created(){
      if(localStorage.getItem('dark-mode') && JSON.parse(localStorage.getItem('dark-mode'))){
        this.darkMode = true;
      }
    },
    watch: {
      darkMode(newValue) {
        if(newValue){
          document.getElementsByTagName("body")[0].classList.add("dark-mode");
          localStorage.setItem('dark-mode', JSON.stringify(true));
        }else{
          document.getElementsByTagName("body")[0].classList.remove("dark-mode");
          localStorage.removeItem('dark-mode');
        }
      }
    },
  }
</script>

<style scoped>

.toggle-checkbox:checked {
  @apply: right-0;
  right: 0;
  border-color: #ff938c;
}

.toggle-checkbox:checked + .toggle-label {

  background-color: #ff938c;
}

* {
  @apply outline-none;
}

</style>
