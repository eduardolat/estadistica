<template>
  <div class="text-center p-2">

    <lottie-player
      class="mx-auto h-64 animate__animated animate__fadeIn"
      src="./line-chart-lottie.json"
      background="transparent"
      speed="1"
      loop
      autoplay
      mode="bounce"
    ></lottie-player>

    <h1 class="my-3 text-2xl font-bold">Calculadora de regresión lineal simple</h1>
    <p class="mb-3">
      La regresión lineal es un modelo de regresión lineal con una sola variable explicativa. <br>
      Para hacer uso de esta calculadora por favor ingresa los datos solicitados para el entrenamiento.
    </p>
    <p class="mb-3 font-bold">Formula: Y = &beta;<sub>0</sub>&nbsp;+&nbsp;&beta;<sub>1</sub>X<sub>1</sub>&nbsp;+&nbsp;&beta;<sub>2</sub>X<sub>2</sub>&nbsp;+&nbsp;...&nbsp;+&nbsp;&beta;<sub>n</sub>X<sub>n</sub></p>

    <LinealRegressionRawDataInputs/>

    <div>
      <button class="btn-primary w-full my-2" @click="compute()">
        Computar modelo
        <i class="fas fa-brain" v-if="xTrain.length == yTrain.length"></i>
        <i class="fas fa-exclamation" v-if="xTrain.length != yTrain.length"></i>
      </button>
    </div>

    <div class="my-3 pt-3 border-t animate__animated animate__fadeInUp" v-if="regression">

      <h1 class="text-xl font-bold">Regresión lineal calculada con éxito</h1>
      <div class="text-lg my-2">
        La ecuación del modelo es:
        <span id="equation" class="block my-2 font-bold">{{ecuation}}</span>
        <button type="button"
                v-clipboard:copy="ecuation"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError" class="rounded bg-blue-500 px-1 text-white">
          Copiar ecuación <i class="fas fa-copy"></i>
        </button>
      </div>

      <div class="text-xl font-bold my-4">
        Gráfica del modelo
        <LinealRegressionChart/>
      </div>

      <div class="my-4">
        <span class="text-xl font-bold">Calcular predicción</span>
        <p>Ingresa un valor para X y en base a la regresión lineal se calculará su valor más probable en Y</p>
        <div class="py-4 md:flex justify-center space">
          <div class="px-2 whitespace-no-wrap">
            <input type="text" class="text-input text-center w-full md:w-42" placeholder="Ingresa el valor de X" v-model="toPredict">
          </div>
          <div class="px-2 pt-1 md:py-2 text-lg whitespace-no-wrap">
            <i class="fas fa-hand-point-right hidden md:inline"></i>
            <i class="fas fa-hand-point-down inline md:hidden"></i>
          </div>
          <div class="px-2 md:py-2 text-lg whitespace-no-wrap">
            <span v-if="!isNaN(predicted)">Valor predecido: {{ predicted.toFixed(2) }}</span>
            <span v-if="isNaN(predicted)">Valor predecido: N/A</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: "Calcular Regresión Lineal Simple",
    }
  },
  data() {
    return {
      toPredict: 0,
      predicted: 0
    }
  },
  computed: {
    xTrain() {
      return this.$store.state.linealRegression.xTrain;
    },
    yTrain() {
      return this.$store.state.linealRegression.yTrain;
    },
    regression() {
      return this.$store.state.linealRegression.regression;
    },
    ecuation() {
      return `Y = ( ${this.regression.slope.toFixed(2)} * X ) + ${this.regression.intercept.toFixed(2)}`;
    }
  },
  methods: {
    onCopy: function (e) {
      Swal.fire(
        'Tarea realizada con éxito 🥰',
        'Los datos fueron copiados a tu portapapeles',
        'success'
      )
    },
    onError: function (e) {
      Swal.fire(
        'Ups... Ocurrió un error 😥',
        'Parece que ocurrió un error al intentar copiar los datos solicitados',
        'error'
      )
    },
    compute() {

      if(this.xTrain.length < 1){
        Swal.fire(
          'Ups... Ocurrió un error 😥',
          'Parece que aún no has ingresado los datos',
          'error'
        )
        return;
      }

      if(this.xTrain.length != this.yTrain.length){
        Swal.fire(
          'Ups... Ocurrió un error 😥',
          'Debes ingresar la misma cantidad de datos en el eje X que en el eje Y',
          'error'
        )
        return;
      }

      const regression = new ML.SimpleLinearRegression(this.xTrain, this.yTrain);
      this.$store.commit('linealRegression/set_regression', regression);
      this.$store.commit('linealRegression/set_current_xTrain', this.xTrain);
      this.$store.commit('linealRegression/set_current_yTrain', this.yTrain);

      console.log("Slope:", regression.slope);
      console.log("Intercept", regression.intercept);
      console.log("Coefficients", regression.coefficients);

      // Si se quisiera sacar un punteo de la exactitud del model se deberia hacer de la siguiente manera
      // regression.score(xTest, yTest);
      // { r: 1, r2: 1, chi2: 0, rmsd: 0 }

      // Para predecir un numero en base a la regresión
      // regression.predict(28);

    }
  },
  watch: {
    toPredict(newValue, oldValue) {
      this.predicted = this.regression.predict(parseFloat(this.toPredict));
    }
  },
  destroyed () {
    this.$store.commit('linealRegression/resetState');
  },
}
</script>
