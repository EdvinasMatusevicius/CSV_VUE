<template>
  <div>
    <div @click="saveEditedVersion()" class="btn btn-success float-left m-2">Save</div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th v-for="(column,i) in documentData[0]"  :key="i" scope="col">{{i+'x'}}</th>
        </tr>
      </thead>
      <tbody>
        <table-row v-for="(row,i) in documentData" :key="i" :rowIndex="i" :rowData="row"></table-row>
        <tr v-if="documentData.length > 0">
          <th><div @click="addRow()" class="btn btn-success">+</div></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import tableRow from "@/components/TableRow.vue"
export default {
  name:'edit',
  data(){
    return{
      urlParamName:this.$route.query.name
    }
  },
  components:{
    tableRow
  },
  created(){
    this.getDocumentData(this.urlParamName)
  },
  computed:{
    ...mapGetters({
      documentData:'getDocumentData'
    })
  },
  methods:{
    ...mapActions({
      getDocumentData:'getDocumentData',
      addRow:'addDocumentDataRow',
      saveEdit:'editDocument',
    }),
    async saveEditedVersion(){
      let bodyFormData = new FormData();
      let data = JSON.stringify(this.documentData)
      bodyFormData.append('data', data);
      bodyFormData.append('tableName', this.urlParamName);
      await this.saveEdit(bodyFormData);
      this.$router.push('/home');
    }
  }
}
</script>

<style>
thead tr th:first-child,
tbody tr td:first-child {
  min-width: 5rem;
  max-width: 5rem;
  width: 5rem;
  word-break: break-all;
}
</style>
