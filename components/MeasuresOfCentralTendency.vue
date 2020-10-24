<template>
  <div class="overflow-x-auto">
    <table class="table">
        <tbody class="text-left">
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Media aritmética</b></td>
            <td>{{$arithmeticMean(data).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Mediana aritmética</b></td>
            <td>{{$arithmeticMedian(data).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Moda aritmética</b></td>
            <td>{{$arithmeticMode(data).toFixed(2)}}</td>
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
      }
    },
  }
</script>

