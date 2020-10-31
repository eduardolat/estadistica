export const state = () => ({
  xTrain: [],
  yTrain: []
});

export const mutations = {
  set_xTrain(state, data) {
    state.xTrain = data;
  },
  set_yTrain(state, data) {
    state.yTrain = data;
  }
};
