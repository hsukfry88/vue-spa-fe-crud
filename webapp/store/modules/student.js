import * as types from '../mutations-type';
const state = {
  user: []
}

// getters
const getters = {
  allStudent: (state,getters) => state.user
}

// actions
const actions = {
  getInfo({state}){
      return state.user;
  },
  addStudent({ commit, state }, student) {
    commit(types.ADD_STUDENT,student)
  },
  changeInfo({commit,state},student){
    commit(types.CHANGE_INFO,student)
  },
  removeInfo({commit,state},student){
    commit(types.REMOVE_INFO,student);
  }
}

// mutations
const mutations ={
  [types.ADD_STUDENT](state,student) {
    console.log(student);
    state.user.push(student)
  },
  [types.CHANGE_INFO](state,student){
    state.user.find(function(el,index,arr){
      if(el.nums==student.nums){
        state.user[index].names=student.names;
        state.user[index].age=student.age;
        state.user[index].sex=student.sex;
        return null;
      }
     })
  },
  [types.REMOVE_INFO](state,student){
    console.log('st',student);
    state.user.find(function(el,index,arr){
      if(el.nums==student.nums){
        return state.user.splice(index,1);
      }
     })
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}