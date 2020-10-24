<template>
  <div class="text-center p-2">

    <lottie-player
      class="mx-auto h-64 animate__animated animate__fadeIn"
      src="./men-chart-lottie.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>

    <h1 class="my-3 text-2xl font-bold">Calculadora de datos no agrupados</h1>
    <p class="mb-3">Ingresa los datos y en báse a ellos se calcularan sus medidas de tendencia central, cuartiles, deciles, percentiles, histograma, etc.</p>

    <RawDataInput @onClean="(data) => cleanData = data"/>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
      <div v-if="cleanData.length > 0" class="animate__animated animate__fadeIn">

        <span class="inline-block text-lg mb-2">
          Datos limpios - {{ cleanData.length }} números encontrados
        </span>
        <textarea class="textarea" rows="6" disabled>{{ cleanData.join('\n') }}</textarea>

      </div>
      <div v-if="orderedData.length > 0" class="animate__animated animate__fadeIn">

        <span class="inline-block text-lg mb-2">
          Datos ordenados - {{ orderedData.length }} números encontrados
        </span>
        <textarea class="textarea" rows="6" disabled>{{ orderedData.join('\n') }}</textarea>

      </div>
    </div>

    <div v-if="cleanData.length > 0" class="my-2 animate__animated animate__fadeIn">
      <span class="inline-block text-lg mb-2">
        Tabla de datos
      </span>
      <DataTable :data="cleanData" :orderedData="orderedData"/>
    </div>

    <div v-if="cleanData.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-2 my-2 animate__animated animate__fadeIn">
      <div>
        <span class="inline-block text-lg mb-2">
          Medidas de tendencia central
        </span>
        <MeasuresOfCentralTendency :data="cleanData"/>
      </div>
      <div>
        <span class="inline-block text-lg mb-2">
          Cuartiles
        </span>
        <Quartiles :data="cleanData"/>

        <span class="inline-block text-lg mb-2">
          Deciles
        </span>
        <Decile :data="cleanData"/>
      </div>
      <div>
        <span class="inline-block text-lg mb-2">
          Percentiles
        </span>
        <Percentile :data="cleanData"/>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      cleanData: []
    }
  },
  computed: {
    orderedData() {
      return this.$orderedDataset(this.cleanData);
    }
  },
}
</script>
