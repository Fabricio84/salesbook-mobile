import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      token: null
    }
  },
  mutations: {
  	setToken (state, value) {
  		state.token = value
  	},
    increment (state) {
      state.count++
    }
  }
})