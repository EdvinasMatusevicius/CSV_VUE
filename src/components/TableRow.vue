<template>
    <tr>
      <th scope="row"><div>{{(rowIndex+1)+'y'}}</div><div @click="deleteRow(rowIndex)" class="btn btn-danger deleteBtn">-</div></th>
      <table-row-field v-for="(field,i) in rowData" :key="i" :rowIndex="rowIndex" :fieldIndex="i" :fieldVal="field"></table-row-field>
    </tr>
</template>

<script>
import tableRowField from "@/components/TableRowField.vue"
import { mapActions } from 'vuex'
export default {
    name:'table_row',
    props:['rowIndex','rowData'],
    components:{
        tableRowField
    },
    methods:{
        ...mapActions({
            deleteRow:'deleteDocumentDataRow'
        })
    }
}
</script>

<style>
    .deleteBtn{
        text-align: center;
        width: 2rem;
        height: 1.5rem;
        line-height: 0.5rem;
        border-radius: 5px;
    }
</style>