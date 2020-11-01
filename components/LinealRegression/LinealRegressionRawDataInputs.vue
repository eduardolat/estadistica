<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div>
      <p class="pb-2">Ingresa los números no dependientes ( <b>EJE X</b> ). <br> Deben coincidir con los dependientes.</p>
      <textarea class="textarea" rows="6" :placeholder="xTrainPlaceholder" v-model="xTrain"></textarea>
    </div>
    <div>
      <p class="pb-2">Ingresa los números dependientes ( <b>EJE Y</b> ). <br> Deben coincidir con los no dependientes.</p>
      <textarea class="textarea" rows="6" :placeholder="yTrainPlaceholder" v-model="yTrain"></textarea>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        xTrainPlaceholder: 'Ingresa los números, separados por una coma, un punto y coma, un espacio o un salto de linea.',
        yTrainPlaceholder: 'Ingresa los números, separados por una coma, un punto y coma, un espacio o un salto de linea.',
        xTrain: '',
        yTrain: ''
      }
    },
    watch: {
      xTrain() {
        this.$store.commit('linealRegression/set_xTrain', this.$cleanDataSet(this.xTrain));
      },
      yTrain() {
        this.$store.commit('linealRegression/set_yTrain', this.$cleanDataSet(this.yTrain));
      }
    },
  }

</script>
