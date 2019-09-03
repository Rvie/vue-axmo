import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
 // 初始化全局的一个变量
   user:'李四',
   text:'过来并向你扔了一束花'
}
const mutations= {
    add(state,msg) {
      state.mess= msg;
    }
  }

export default new Vuex.Store({
  state,
  mutations
})
