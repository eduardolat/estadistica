<template>
  <div class="py-10">

    <div class="my-4 text-center grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <lottie-player
          class="mx-auto h-64 animate__animated animate__fadeIn"
          src="/estadistica/android-lottie.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
        <h2 class="text-xl font-bold  my-4">Descargar para Android</h2>
        <a href="https://raw.githubusercontent.com/eduardodevop/estadistica/builded-apk/calculadora-estadistica.apk" target="_blank">
          <button class="btn-primary">Descargar APK Para Android <i class="fas fa-download"></i></button>
        </a>
      </div>
      <div>
        <img src="/estadistica/apple-siri.png" alt="Siri Apple" class="mx-auto h-64 animate__animated animate__fadeIn">
        <h2 class="text-xl font-bold  my-4">Descargar para Android</h2>
        <a href="/estadistica/instalacion-apple.mp4" target="_blank">
          <button class="btn-primary">Tutorial de instalación <i class="fas fa-film"></i></button>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
  }
</script>
