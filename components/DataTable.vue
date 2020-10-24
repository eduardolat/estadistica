<template>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr class="whitespace-no-wrap md:whitespace-normal">
            <td><b>Número (&nbsp;x<sub>i</sub>&nbsp;)</b></td>
            <td><b>Frecuencia Absoluta (&nbsp;f<sub>i</sub>&nbsp;)</b></td>
            <td><b>Frecuencia Absoluta Acumulada (&nbsp;F<sub>i</sub>&nbsp;)</b></td>
            <td><b>Frecuencia Relativa (&nbsp;f<sub>r</sub>&nbsp;)</b></td>
            <td><b>Frecuencia Relativa Acumulada (&nbsp;F<sub>r</sub>&nbsp;)</b></td>
            <td><b>Valor Por Frecuencia Absoluta (&nbsp;x<sub>i</sub><sup>2&nbsp;</sup>&nbsp;*&nbsp;f<sub>i</sub>&nbsp;)</b></td>
            <td><b>Desviación Absoluta (&nbsp;|&nbsp;d&nbsp;|&nbsp;)</b></td>
            <td><b>Varianza (&nbsp;|&nbsp;d&nbsp;|&nbsp;<sup>2</sup>&nbsp;)</b></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in $store.state.statistics.dataTable" :key="index">
            <td>{{data.number}}</td>
            <td>{{data.absoluteFrecuency}}</td>
            <td>{{data.accAbsoluteFrecuency}}</td>
            <td>{{data.relativeFrecuency.toFixed(2)}}</td>
            <td>{{data.accRelativeFrecuency.toFixed(2)}}</td>
            <td>{{data.xi2_fi.toFixed(2)}}</td>
            <td>{{data.d_absolute.toFixed(2)}}</td>
            <td>{{data.d_absolute_2.toFixed(2)}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <b>Sumatorio&nbsp;&Sigma;</b>
            </td>
            <td>
              <b>{{$store.state.statistics.totalAbsoluteFrecuency}}</b>
            </td>
            <td><b>-</b></td>
            <td><b>1.00</b></td>
            <td><b>-</b></td>
            <td><b>{{$store.state.statistics.total_xi2_fi.toFixed(2)}}</b></td>
            <td><b>{{$store.state.statistics.total_d_absolute.toFixed(2)}}</b></td>
            <td><b>{{$store.state.statistics.total_d_absolute_2.toFixed(2)}}</b></td>
          </tr>
        </tfoot>
      </table>
  </div>
</template>

<script>
  export default {
    computed: {
      data() {
        return this.$store.state.statistics.data;
      },
      orderedData() {
        return this.$store.state.statistics.orderedData;
      },
      dataTable() {
        return this.orderedData.map((number, index) => {
          return {
            number,
            absoluteFrecuency: this.$absoluteFrecuency(this.data, number),
            accAbsoluteFrecuency: this.$accAbsoluteFrecuency(this.data, index),
            relativeFrecuency: this.$relativeFrecuency(this.data, number),
            accRelativeFrecuency: this.$accRelativeFrecuency(this.data, index),
            xi2_fi: (number * number) * this.$absoluteFrecuency(this.data, number),
            d_absolute: Math.abs(this.$absoluteFrecuency(this.data, number) - this.$arithmeticMean(this.data)),
            d_absolute_2: Math.pow(Math.abs(this.$absoluteFrecuency(this.data, number) - this.$arithmeticMean(this.data)), 2),
          }
        });
      },
      totalAbsoluteFrecuency() {
        return this.dataTable[this.dataTable.length - 1].accAbsoluteFrecuency;
      },
      total_xi2_fi() {
        return this.dataTable.reduce((prev, current) => prev + current.xi2_fi, 0);
      },
      total_d_absolute() {
        return this.dataTable.reduce((prev, current) => prev + current.d_absolute, 0);
      },
      total_d_absolute_2() {
        return this.dataTable.reduce((prev, current) => prev + current.d_absolute_2, 0);
      },
    },
    watch: {
      dataTable() {

        this.$store.commit('statistics/setDataTable', this.dataTable);
        this.$store.commit('statistics/setTotalAbsoluteFrecuency', this.totalAbsoluteFrecuency);
        this.$store.commit('statistics/setTotal_xi2_fi', this.total_xi2_fi);
        this.$store.commit('statistics/setTotal_d_absolute', this.total_d_absolute);
        this.$store.commit('statistics/setTotal_d_absolute_2', this.total_d_absolute_2);

      }
    },
  }
</script>
