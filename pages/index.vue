<template>
  <div class="text-center p-2">

    <lottie-player
      class="mx-auto h-64 animate__animated animate__fadeIn"
      src="/estadistica/men-chart-lottie.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>

    <h1 class="my-3 text-2xl font-bold">Calculadora de datos no agrupados</h1>
    <p class="mb-3">Ingresa los datos y en báse a ellos se calcularan sus medidas de tendencia central, cuartiles, deciles, percentiles, histograma, etc.</p>

    <RawDataInput/>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-2">
      <div v-if="cleanData.length > 0" class="animate__animated animate__fadeIn">

        <span class="inline-block text-xl font-bold mb-2">
          Datos limpios - {{ cleanData.length }} números encontrados
          <button type="button"
                  v-clipboard:copy="cleanData.join('\n')"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError" class="rounded bg-blue-500 px-1 text-white">
            <i class="fas fa-copy"></i>
          </button>
        </span>
        <textarea class="textarea" rows="6" disabled>{{ cleanData.join('\n') }}</textarea>

      </div>
      <div v-if="orderedData.length > 0" class="animate__animated animate__fadeIn">

        <span class="inline-block text-xl font-bold mb-2">
          Datos ordenados - {{ orderedData.length }} números encontrados
          <button type="button"
                  v-clipboard:copy="orderedData.join('\n')"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError" class="rounded bg-blue-500 px-1 text-white">
            <i class="fas fa-copy"></i>
          </button>
        </span>
        <textarea class="textarea" rows="6" disabled>{{ orderedData.join('\n') }}</textarea>

      </div>
    </div>

    <div v-if="cleanData.length > 0" class="my-8 animate__animated animate__fadeIn">
      <span class="inline-block text-xl font-bold mb-2">
        Tabla de frecuencia
      </span>
      <DataTable/>
    </div>

    <div v-if="cleanData.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-3 my-8 animate__animated animate__fadeIn">
      <div>
        <span class="inline-block text-xl font-bold mb-2">
          Cuartiles
        </span>
        <Quartiles class="mb-2"/>

        <span class="inline-block text-xl font-bold mb-2">
          Deciles
        </span>
        <Decile class="mb-2"/>

        <span class="inline-block text-xl font-bold mb-2">
          Percentiles
        </span>
        <Percentile class="mb-2"/>
      </div>
      <div>
        <span class="inline-block text-xl font-bold mb-2">
          Medidas de tendencia central
        </span>
        <MeasuresOfCentralTendency/>
      </div>
      <div>
        <span class="inline-block text-xl font-bold mb-2">
          Otros datos
        </span>
        <ExtraData />
      </div>
    </div>

    <div v-if="cleanData.length > 0" class="my-8 animate__animated animate__fadeIn">
      <span class="inline-block text-xl font-bold mb-2">
        Histograma
      </span>
      <Histogram/>
    </div>

  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Calculadora de datos no agrupados",
    }
  },
  methods: {
    onCopy: function (e) {
      Swal.fire(
        'Tarea realizada con éxito 🥰',
        'Los datos fueron copiados a tu portapapeles',
        'success'
      )
    },
    onError: function (e) {
      Swal.fire(
        'Ups... Ocurrió un error 😥',
        'Parece que ocurrió un error al intentar copiar los datos solicitados',
        'error'
      )
    }
  },
  computed: {
    cleanData() {
      return this.$store.state.statistics.data;
    },
    orderedData() {
      return this.$store.state.statistics.orderedData;
    }
  },
  destroyed () {
    this.$store.commit('statistics/resetState');
  },
}
</script>
