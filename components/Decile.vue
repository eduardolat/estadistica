<template>
  <div class="overflow-x-auto">
    <table class="table">
        <tbody class="text-left">
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Decil #1 (D<sub>1</sub>)</b></td>
            <td>{{$decile(data, 1).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Decil #2 (D<sub>2</sub>)</b></td>
            <td>{{$decile(data, 2).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Decil #3 (D<sub>3</sub>)</b></td>
            <td>{{$decile(data, 3).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Decil #4 (D<sub>4</sub>)</b></td>
            <td>{{$decile(data, 4).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Decil #5 (D<sub>5</sub>)</b></td>
            <td>{{$decile(data, 5).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Decil #6 (D<sub>6</sub>)</b></td>
            <td>{{$decile(data, 6).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Decil #7 (D<sub>7</sub>)</b></td>
            <td>{{$decile(data, 7).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Decil #8 (D<sub>8</sub>)</b></td>
            <td>{{$decile(data, 8).toFixed(2)}}</td>
          </tr>
          <tr>
            <td class="bg-gray-100 whitespace-no-wrap"><b>Decil #9 (D<sub>9</sub>)</b></td>
            <td>{{$decile(data, 9).toFixed(2)}}</td>
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
