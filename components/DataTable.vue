<template>
  <div>
    <table class="table">

      <thead>
        <tr>
          <td><b>Número</b></td>
          <td><b>Frecuencia Absoluta</b></td>
          <td><b>Frecuencia Absoluta Acumulada</b></td>
          <td><b>Frecuencia Relativa</b></td>
          <td><b>Frecuencia Relativa Acumulada</b></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(number, index) in orderedData" :key="index">
          <td>{{number}}</td>
          <td>{{$absoluteFrecuency(data, number).toFixed(2)}}</td>
          <td>{{$accAbsoluteFrecuency(data, index)}}</td>
          <td>{{$relativeFrecuency(data, number).toFixed(2)}}</td>
          <td>{{$accRelativeFrecuency(data, index).toFixed(2)}}</td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: []
      },
      orderedData: {
        type: Array,
        default: []
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
