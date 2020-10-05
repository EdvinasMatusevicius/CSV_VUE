<template>
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import tableRow from "@/components/TableRow.vue"
export default {
  name:'edit',
  data(){
    return{
    }
  },
  components:{
    tableRow
  },
  created(){
    this.getDocumentData(this.$route.query.name)
  },
  computed:{
    ...mapGetters({
      documentData:'getDocumentData'
    })
  },
  methods:{
    ...mapActions({
      getDocumentData:'getDocumentData',
      addRow:'addDocumentDataRow'
    })
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
