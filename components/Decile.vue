<template>
  <div class="flex justify-center">

    <select v-model="current">
      <option v-for="n in 9" :key="n" :value="n">
        D<sub>{{n}}</sub> - Decil #{{n}}
      </option>
    </select>
    <span class="mt-1 ml-2 text-xl">
    =&nbsp;{{$decile(data, current).toFixed(2)}}
    </span>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: 1
      }
    },
    computed: {
      data() {
        return this.$store.state.statistics.data
      }
    }
  }
</script>
