<template>
  <div class="overflow-x-auto">
    <table class="table">
        <tbody class="text-left">
          <tr>
            <td class="left-table-titles whitespace-no-wrap"><b>Desviación media</b></td>
            <td>{{medianDeviation.toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="left-table-titles whitespace-no-wrap"><b>Desviación típica</b></td>
            <td>{{typicalDeviation.toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="left-table-titles whitespace-no-wrap"><b>Varianza</b></td>
            <td>{{variance.toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="left-table-titles whitespace-no-wrap"><b>Coeficiente de variación</b></td>
            <td>{{coefficientOfVariation.toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="left-table-titles whitespace-no-wrap"><b>Curtosis</b></td>
            <td>{{kurtosis.toFixed(2)}}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {

    computed: {
      medianDeviation() {
        return this.$store.state.statistics.total_d_absolute / this.$store.state.statistics.totalAbsoluteFrecuency;
      },
      variance() {
        return this.$store.state.statistics.total_d_absolute_2 / this.$store.state.statistics.totalAbsoluteFrecuency;
      },
      typicalDeviation() {
        return Math.sqrt(this.variance);
      },
      coefficientOfVariation(){
        return (this.typicalDeviation / this.$arithmeticMean(this.$store.state.statistics.data)) * 100;
      },
      kurtosis(){
        return ((1/2) * (this.$quartil(this.$store.state.statistics.data, 3) - this.$quartil(this.$store.state.statistics.data, 1))) / (this.$percentile(this.$store.state.statistics.data, 90) - this.$percentile(this.$store.state.statistics.data, 10));
      }
    },
  }
</script>

