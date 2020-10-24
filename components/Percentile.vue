<template>
  <div class="overflow-x-auto">
    <table class="table">
        <tbody class="text-left">
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Percentil #1 (P<sub>1</sub>)</b></td>
            <td>{{$percentile(data, 1).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Percentil #2 (P<sub>2</sub>)</b></td>
            <td>{{$percentile(data, 2).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Percentil #3 (P<sub>3</sub>)</b></td>
            <td>{{$percentile(data, 3).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Percentil #24 (P<sub>24</sub>)</b></td>
            <td>{{$percentile(data, 24).toFixed(2)}}</td>
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
