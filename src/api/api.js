import axios from 'axios'


const API_URL = 'http://localhost/toonscsv/';
// const API_URL = 'http://toons-csv.serverpi.ddns.me/';

export default {

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
      console.log(response);
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
      const response = await api().post(API_URL +'csv/edit',body);
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
function apiFile() {
  return axios.create({
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

