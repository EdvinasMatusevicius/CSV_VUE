import axios from 'axios'


// const API_URL = 'http://localhost/toonscsv/';
const API_URL = 'http://toons-csv.serverpi.ddns.me/';

export default {
//out of time for response message handling
  getDocumentsList: async(success,failure)=>{
    try {
      const response = await api().get(API_URL +'csv/index');
      success(response.data);
    } catch (error) {
      failure(error);
    }
  },
  getDocumentData: async(documentName,success,failure)=>{
    try {
      const response = await api().get(API_URL +'csv/show/?name='+documentName);
      success(response.data);
    } catch (error) {
      failure(error);
    }
  },
  postDocument: async(body,success,failure)=>{
    try {
      const response = await api().post(API_URL +'csv/create',body);
      success(response.data);
    } catch (error) {
      failure(error);
    }
  },
  editDocument: async(body,success,failure)=>{
    try {
      console.log(body);
      const response = await apiFormData().post(API_URL +'csv/edit',body);
      success(response.data);
    } catch (error) {
      failure(error);
    }
  },

}
//--------------------------------------------------------------------------------------------AXIOS HEADER CONFIGURATION
function api() {
    return axios.create({
      headers: {
        'Content-Type': 'application/json'
      }
    });
}
function apiFormData() {
  return axios.create({
    headers: {
      'Content-Type': 'multipart/form-data'
      // 'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

