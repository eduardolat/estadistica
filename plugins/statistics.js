/*
 ** Limpia los datos y los convierte en un array de números apto para calculos de datos no agrupados,
 ** eliminando todo el resto de caracteres. Se tomara como un número distinto todo aquel que este separado
 ** por coma, espacio o salto de linea.
 */
const cleanDataSet = dataset => {
  return dataset
    .split(/[\n\s,]+/)
    .filter(n => {
      if (!!n.replace(/[^0-9]/g, "").length) {
        return true;
      }
      return false;
    })
    .map(n => {
      return parseInt(n.replace(/[^0-9]/g, ""));
    });
};

/*
 ** Ordena los datos ascendentemente y elimina los repetidos
 */
const orderedDataset = dataset => {
  return dataset
    .filter((item, pos) => {
      return dataset.indexOf(item) == pos;
    })
    .sort((a, b) => a - b);
};

/*
 ** Determina la frecuencia absoluta de un número en el dataset
 */
const absoluteFrecuency = (dataset, number) => {
  return dataset.filter(x => x == number).length;
};

/*
 ** Determinar la frecuencia absoluta acumulada de un número del dataset
 */
const accAbsoluteFrecuency = (dataset, index) => {
  let ordered = orderedDataset(dataset);
  if (index > 0) {
    let acc = 0;
    for (let i = 0; i < index; i++) {
      acc += absoluteFrecuency(dataset, ordered[i]);
    }
    return absoluteFrecuency(dataset, ordered[index]) + acc;
  }
  return absoluteFrecuency(dataset, ordered[0]);
};

/*
 ** Determina la frecuencia relativa de un número en el dataset
 */
const relativeFrecuency = (dataset, number) => {
  return absoluteFrecuency(dataset, number) / dataset.length;
};

/*
 ** Determinar la frecuencia relativa acumulada de un número del dataset
 */
const accRelativeFrecuency = (dataset, index) => {
  let ordered = orderedDataset(dataset);
  if (index > 0) {
    let acc = 0;
    for (let i = 0; i < index; i++) {
      acc += relativeFrecuency(dataset, ordered[i]);
    }
    return relativeFrecuency(dataset, ordered[index]) + acc;
  }
  return relativeFrecuency(dataset, ordered[0]);
};

export default ({}, inject) => {
  inject("cleanDataSet", cleanDataSet);
  inject("orderedDataset", orderedDataset);
  inject("absoluteFrecuency", absoluteFrecuency);
  inject("relativeFrecuency", relativeFrecuency);
  inject("accAbsoluteFrecuency", accAbsoluteFrecuency);
  inject("accRelativeFrecuency", accRelativeFrecuency);
};
