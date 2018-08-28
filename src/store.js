import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const STORAGE_KEY = "vanished-0.0.1";

const localStoragePlugin = store => {
  store.subscribe((mutation, {
    tasks
  }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  });
};

export default new Vuex.Store({
  state: {
    chapter: 1,
    tasks: [],
    inputs: [],
    outputs: []
  },
  plugins: [createPersistedState(), localStoragePlugin],
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    clearInputs(state) {
      state.inputs = [];
    },
    clearOutputs(state) {
      state.outputs = [];
    },
    loadOutput(state, {
      arr
    }) {
      state.outputs = state.outputs.concat(arr);
    },
    addOutput(state, output) {
      state.outputs.push(output);
    },
    logInput(state, input) {
      state.inputs.push(input);
    },
    removeTask(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    }
  },
  actions: {
    logInput({
      commit
    }, text) {
      commit("logInput", text);
    },

    clearInputs({
      commit
    }) {
      commit("clearInputs");
    },

    addOutput({
      commit
    }, text) {
      commit("addOutput", {
        text
      });
    },

    // loadOutput({ commit }, arr) {
    //   commit("loadOutput", { arr });
    // },

    clearOutputs({
      commit
    }) {
      commit("clearOutputs");
    },

    addTask({
      commit
    }, title) {
      commit("addTask", {
        title,
        createdAt: new Date(),
        startedAt: null,
        stoppedAt: null,
        isActive: false,
        completed: false,
        times: 0
      });
    }
  }
});