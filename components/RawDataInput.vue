<template>
  <div>
    <textarea class="textarea" rows="6" :placeholder="placeholder" v-model="data"></textarea>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        placeholder: 'Ingresa los números, separados por una coma, un espacio o un salto de linea',
        data: ''
      }
    },
    watch: {
      data(old) {
        this.$emit('onClean', this.$cleanDataSet(this.data));
      }
    },
  }

</script>
