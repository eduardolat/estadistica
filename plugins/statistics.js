export default ({}, inject) => {
  /*
   ** Limpia los datos y los convierte en un array de números apto para calculos de datos no agrupados,
   ** eliminando todo el resto de caracteres. Se tomara como un número distinto todo aquel que este separado
   ** por coma, espacio o salto de linea.
   */
  inject("cleanDataset", dataset => {
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
  });
};
