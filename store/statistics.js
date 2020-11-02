const defaultState = {
  data: [],
  orderedData: [],
  dataTable: [],
  totalAbsoluteFrecuency: 0,
  total_xi2_fi: 0,
  total_d_absolute: 0,
  total_d_absolute_2: 0
};

const getDefaultState = () => {
  return { ...defaultState };
};

export const state = () => ({ ...defaultState });

export const mutations = {
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
  setData(state, data) {
    state.data = data;
  },
  setOrderedData(state, orderedData) {
    state.orderedData = orderedData;
  },
  setDataTable(state, dataTable) {
    state.dataTable = dataTable;
  },
  setTotalAbsoluteFrecuency(state, n) {
    state.totalAbsoluteFrecuency = n;
  },
  setTotal_xi2_fi(state, n) {
    state.total_xi2_fi = n;
  },
  setTotal_d_absolute(state, n) {
    state.total_d_absolute = n;
  },
  setTotal_d_absolute_2(state, n) {
    state.total_d_absolute_2 = n;
  }
};
