<template>
  <div class="flex justify-center">

    <select v-model="current">
      <option v-for="n in 3" :key="n" :value="n">
        Q<sub>{{n}}</sub> - Cuartil #{{n}}
      </option>
    </select>
    <span class="mt-1 ml-2 text-xl">
    =&nbsp;{{$quartil(data, current).toFixed(2)}}
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
