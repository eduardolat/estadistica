<template>
  <div class="overflow-x-auto">
    <table class="table">
        <tbody class="text-left">
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Desviación media</b></td>
            <td>{{medianDeviation.toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Desviación típica</b></td>
            <td>{{typicalDeviation.toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Varianza</b></td>
            <td>{{variance.toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Coeficiente de variación</b></td>
            <td>{{coefficientOfVariation.toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Curtosis</b></td>
            <td>{{kurtosis.toFixed(2)}}</td>
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
      dataFormatted: {
        type: Array,
        default: []
      },
      dataFormattedTotals: {
        type: Object,
        default: {
          totalAbsoluteFrecuency: 0,
          total_xi2_fi: 0,
          total_d_absolute: 0,
          total_d_absolute_2: 0
        }
      },
    },
    computed: {
      medianDeviation() {
        return this.dataFormattedTotals.total_d_absolute / this.dataFormattedTotals.totalAbsoluteFrecuency;
      },
      variance() {
        return this.dataFormattedTotals.total_d_absolute_2 / this.dataFormattedTotals.totalAbsoluteFrecuency;
      },
      typicalDeviation() {
        return Math.sqrt(this.variance);
      },
      coefficientOfVariation(){
        return (this.typicalDeviation / this.$arithmeticMean(this.data)) * 100;
      },
      kurtosis(){
        return ((1/2) * (this.$quartil(this.data, 3) - this.$quartil(this.data, 1))) / (this.$percentile(this.data, 90) - this.$percentile(this.data, 10));
      }
    },
  }
</script>

