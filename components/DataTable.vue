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
          <td><b>x<sub>i</sub><sup>2&nbsp;</sup>&nbsp;*&nbsp;f<sub>i</sub></b></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in dataTable" :key="index">
          <td>{{data.number}}</td>
          <td>{{data.absoluteFrecuency}}</td>
          <td>{{data.accAbsoluteFrecuency}}</td>
          <td>{{data.relativeFrecuency.toFixed(2)}}</td>
          <td>{{data.accRelativeFrecuency.toFixed(2)}}</td>
          <td>{{data.xi2_fi}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <b>Totales:</b>
          </td>
          <td>
            <b>{{totalAbsoluteFrecuency}}</b>
          </td>
          <td><b>-</b></td>
          <td><b>1.00</b></td>
          <td><b>-</b></td>
          <td><b>{{total_xi2_fi}}</b></td>
        </tr>
      </tfoot>
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
    computed: {
      dataTable() {
        return this.orderedData.map((number, index) => {
          return {
            number,
            absoluteFrecuency: this.$absoluteFrecuency(this.data, number),
            accAbsoluteFrecuency: this.$accAbsoluteFrecuency(this.data, index),
            relativeFrecuency: this.$relativeFrecuency(this.data, number),
            accRelativeFrecuency: this.$accRelativeFrecuency(this.data, index),
            xi2_fi: (number * number) * this.$absoluteFrecuency(this.data, number)
          }
        });
      },
      totalAbsoluteFrecuency() {
        return this.dataTable[this.dataTable.length - 1].accAbsoluteFrecuency;
      },
      total_xi2_fi() {
        return this.dataTable.reduce((prev, current) => prev + current.xi2_fi, 0);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
