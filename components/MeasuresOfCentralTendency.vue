<template>
  <div class="overflow-x-auto">
    <table class="table">
        <tbody class="text-left">
          <tr>
            <td class="left-table-titles whitespace-no-wrap"><b>Media geométrica</b></td>
            <td>{{$geometricMean(data).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="left-table-titles whitespace-no-wrap"><b>Media cuadrática</b></td>
            <td>{{$cuadraticMean(data).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="left-table-titles whitespace-no-wrap"><b>Media aritmética</b></td>
            <td>{{$arithmeticMean(data).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="left-table-titles whitespace-no-wrap"><b>Mediana</b></td>
            <td>{{$arithmeticMedian(data).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="left-table-titles whitespace-no-wrap"><b>Moda</b></td>
            <td>{{$arithmeticMode(data).toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
  export default {
    computed: {
      data() {
        return this.$store.state.statistics.data
      }
    }
  }
</script>

