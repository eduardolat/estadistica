<template>
  <div class="overflow-x-auto">
    <table class="table">
        <tbody class="text-left">
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Cuartil #1 (Q<sub>1</sub>)</b></td>
            <td>{{$quartil(data, 1).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Cuartil #2 (Q<sub>2</sub>)</b></td>
            <td>{{$quartil(data, 2).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Cuartil #3 (Q<sub>3</sub>)</b></td>
            <td>{{$quartil(data, 3).toFixed(2)}}</td>
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
