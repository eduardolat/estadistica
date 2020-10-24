<template>
  <div>
    <textarea class="textarea" rows="6" :placeholder="placeholder" v-model="data"></textarea>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        placeholder: 'Ingresa los números, separados por una coma, un punto y coma, un espacio o un salto de linea.',
        data: ''
      }
    },
    watch: {
      data() {
        this.$store.commit('statistics/setData', this.$cleanDataSet(this.data));
        this.$store.commit('statistics/setOrderedData', this.$orderedDataSet(this.$store.state.statistics.data));
      }
    },
  }

</script>
