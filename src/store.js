import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const STORAGE_KEY = "vanished-0.0.1";

const localStoragePlugin = store => {
  store.subscribe((mutation, { tasks }) => {
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
    clearInput(state) {
      state.inputs = [];
    },
    clearOutput(state) {
      state.outputs = [];
    },
    loadOutput(state, { arr }) {
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
    logInput({ commit }, text) {
      commit("logInput", {
        text
      });
    },

    clearInput({ commit }) {
      commit("clearInput");
    },

    addOutput({ commit }, text) {
      commit("addOutput", {
        text
      });
    },

    // loadOutput({ commit }, arr) {
    //   commit("loadOutput", { arr });
    // },

    clearOutput({ commit }) {
      commit("clearOutput");
    },

    addTask({ commit }, title) {
      commit("addTask", {
        title,
        createdAt: new Date(),
        startedAt: null,
        stoppedAt: null,
        isActive: false,
        completed: false,
        times: 0
      });
    },

    removeTask({ commit }, task) {
      commit("removeTask", task);
    },

    startTask({ commit }, task) {
      commit("editTask", {
        task,
        isActive: true,
        startedAt: new Date()
      });
    },

    stopTask({ commit }, task) {
      task.times = task.times + 1;
      commit("editTask", {
        task,
        isActive: false,
        stoppedAt: new Date(),
        completed: true,
        times: task.times
      });
    }
  }
});
