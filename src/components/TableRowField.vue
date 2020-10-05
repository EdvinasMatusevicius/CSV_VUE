<template>
  <td><input class="input" v-model="fieldValue"  type="text"></td>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'row_field',
    props:['rowIndex','fieldIndex','fieldVal'],
    data(){
        return{
            fieldValue:this.fieldVal
        }
    },
    watch:{
        fieldValue:function(newVal){
            this.mutatefield({
                y:this.rowIndex,
                x:this.fieldIndex,
                value:newVal
            })
        },
        fieldVal:function(newVal){
            this.fieldValue = newVal;
        }
    },
    methods:{
        ...mapActions({
            mutatefield:'mutateDocumentDataField',
        })
    }
}
</script>

<style>
.input{
    border: 1px solid #ebe9e9;
    width: 100%;
    text-align: center; 
}
</style>