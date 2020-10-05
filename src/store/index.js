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
    mutateDocumentDataField(state,yxValue){
      state.documentData[yxValue.y][yxValue.x] = yxValue.value;
    },
    deleteDocumentDataRow(state,y){
       state.documentData.splice(y,1);
    },
    addDocumentDataRow(state){
      const firstRowObj =  state.documentData[0];
      const colCount = Object.keys(firstRowObj).length
      let newArr = Array(colCount).fill('');
      state.documentData.push(newArr);
    }
  },
  actions: {
    mutateDocumentDataField({commit},yxValue){
      commit('mutateDocumentDataField',yxValue);
    },
    deleteDocumentDataRow({commit},y){
      commit('deleteDocumentDataRow',y);
    },
    addDocumentDataRow({commit}){
      commit('addDocumentDataRow');
    },
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
          console.log(data.data)
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
