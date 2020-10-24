<template>
  <div class="overflow-x-auto">
    <table class="table">
        <tbody class="text-left">
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Cuartil #1</b></td>
            <td>{{$quartil1(data).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Cuartil #2</b></td>
            <td>{{$quartil2(data).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Cuartil #3</b></td>
            <td>{{$quartil3(data).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Cuartil #4</b></td>
            <td>{{$quartil4(data).toFixed(2)}}</td>
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
