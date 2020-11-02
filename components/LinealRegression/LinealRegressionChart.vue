<template>
  <div>
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
  export default {
    computed: {
      current_xTrain() {
        return this.$store.state.linealRegression.current_xTrain;
      },
      current_yTrain() {
        return this.$store.state.linealRegression.current_yTrain;
      },
      regression(){
        return this.$store.state.linealRegression.regression;
      }
    },
    data() {
      return {
        chart: ""
      }
    },
    methods: {
      createHistogramChart() {

        let chartData =  {
            type: 'scatter',
            data: {
              datasets: [{
                  label: 'Nube de puntos',
                  data: this.current_xTrain.map((x, i) => {
                    return { x, y: this.current_yTrain[i] };
                  }),
                  backgroundColor: "rgba(66, 153, 255, .4)",
                  borderColor: "#4299e1",
                  pointBackgroundColor: "rgba(66, 153, 255, .4)",
                  pointBorderColor: "rgba(66, 153, 255, .4)",
                  borderWidth: 3,
              },
              {
                  type: 'line',
                  label: 'Regresión lineal',
                  data: [
                    {
                      x: this.current_xTrain[0],
                      y: this.regression.predict(parseFloat(this.current_xTrain[0]))
                    },
                    {
                      x: this.current_xTrain[this.current_xTrain.length - 1],
                      y: this.regression.predict(parseFloat(this.current_xTrain[this.current_yTrain.length - 1]))
                    },
                  ],
                  backgroundColor: "rgba(255, 2, 255, .4)",
                  borderColor: "#ff02ff",
                  fill: false
              }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        };

        this.chart = new Chart(document.getElementById("chart"), {
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

      current_xTrain: function (n, old) {

        if (n == old) {
          return;
        }

        this.chart.data = {
          datasets: [{
              label: 'Nube de puntos del dataset',
              data: this.current_xTrain.map((x, i) => {
                return { x, y: this.current_yTrain[i] };
              }),
              backgroundColor: "rgba(66, 153, 255, .4)",
              borderColor: "#4299e1",
              pointBackgroundColor: "rgba(66, 153, 255, .4)",
              pointBorderColor: "rgba(66, 153, 255, .4)",
              borderWidth: 3,
          },
          {
              type: 'line',
              label: 'Regresión lineal',
              data: [
                {
                  x: this.current_xTrain[0],
                  y: this.current_yTrain[0]
                },
                {
                  x: this.current_xTrain[this.current_xTrain.length - 1],
                  y: this.current_yTrain[this.current_yTrain.length - 1]
                },
              ],
              backgroundColor: "rgba(255, 2, 255, .4)",
              borderColor: "#ff02ff",
              fill: false
          }]
        };

        this.chart.update();

      },

    },
  }
</script>
