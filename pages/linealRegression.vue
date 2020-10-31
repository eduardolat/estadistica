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
      <button class="btn-primary w-full my-2">Computar modelo</button>
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
  mounted() {

    const xTrain = [30, 28, 32, 25, 25, 25, 22, 24];
    const yTrain = [25, 30, 27, 40, 42, 40, 50, 45];

    const xTest = [35, 40];
    const yTest = [30, 25];

    const regression = new ML.SimpleLinearRegression(xTrain, yTrain);

    console.log(regression.slope);
    console.log(regression.intercept);
    console.log(regression.coefficients);

    console.log(regression.toString());;

    console.log(regression.score(xTest, yTest));;
    // { r: 1, r2: 1, chi2: 0, rmsd: 0 }

    console.log(regression.predict(28));

  }
}
</script>
