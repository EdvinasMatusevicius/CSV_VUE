import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/api.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    documentList: [],
    documentData: [],
  },
  mutations: {
    mutateDocumentList(state,data){
      state.documentList = data;
    },
    mutateDocumentData(state,data){
      state.documentData = data;
    },
  },
  actions: {
    async getDocumentList({commit}){
      await api.getDocumentsList((data)=>{
        commit('mutateDocumentList',data);
      },
      (err)=>{
        console.log(err)
      },
      )
    },
    async getDocumentData({commit},docName){
      await api.getDocumentData(
        docName,
        (data)=>{
          commit('mutateDocumentData',data)
        },
        (err)=>{
          console.log(err)
        }
      )
    },
    async postDocument({commit},fileForm){
      await api.postDocument(
        fileForm,
        (data)=>{
          console.log(data)
        },
        (err)=>{
          console.log(err)
        }
      )
    },
    async editDocument({commit},tableData){
      await api.editDocument(
        tableData,
        (data)=>{
          console.log(data)
        },
        (err)=>{
          console.log(err)
        }
      )
    }
  },
  getters:{
    getDocumentsList:({documentList})=>documentList,
    getDocumentData:({documentData})=>documentData
  },
  modules: {
  }
})
