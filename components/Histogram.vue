<template>
  <div>
    <canvas id="histograma"></canvas>
  </div>
</template>

<script>
  export default {
    computed: {
      data() {
        return this.$store.state.statistics.data
      },
      orderedData() {
        return this.$store.state.statistics.orderedData;
      }
    },
    data() {
      return {
        chart: ""
      }
    },
    methods: {
      createHistogramChart() {
        let chartData = {
          type: "line",
          data: {},
          options: {
            responsive: true,
            lineTension: 1,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    padding: 25,
                  },
                },
              ],
            },
          },
        };
        this.chart = new Chart(document.getElementById("histograma"), {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      },
    },
    mounted () {
      this.createHistogramChart();
    },
    watch: {

      orderedData: function (n, old) {
        if (n == old) {
          return;
        }
        this.chart.data = {
          labels: this.orderedData.map((x) => {
            return `No. ${x}`;
          }),
          datasets: [
            {
              label: "Frecuencia absoluta",
              data: this.orderedData.map((x) => {
                return this.$absoluteFrecuency(this.data, x);
              }),
              backgroundColor: this.orderedData.map((x) => {
                return "rgba(255, 2, 255, .4)";
              }),
              borderColor: this.orderedData.map((x) => {
                return "#ff02ff";
              }),
              borderWidth: 3,
            },
          ],
        };
        this.chart.update();
      },

    },
  }
</script>
