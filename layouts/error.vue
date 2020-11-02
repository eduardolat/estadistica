<template>
  <div class="py-10">

    <lottie-player
      class="mx-auto h-64 animate__animated animate__fadeIn"
      src="/estadistica/error-lottie.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>

    <div v-if="error.statusCode === 404" class="my-4 text-center text-2xl font-bold">
      Error 404. Página no encontrada.
    </div>
    <div v-if="error.statusCode !== 404" class="my-4 text-center text-2xl font-bold">
      Error {{error.statusCode}}. Ocurrió un error inesperado.
    </div>

  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>
