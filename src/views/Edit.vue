<template>
    <table class="table table-bordered">
  <thead>
    {{documentData}}
    <tr>
      <th scope="col">#</th>
      <th v-for="(column,i) in documentData[0]"  :key="i" scope="col">{{i+'x'}}</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
</table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import tableRow from "@/components/FileCard.vue"
export default {
  name:'edit',
  data(){
    return{

    }
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
      getDocumentData:'getDocumentData'
    })
  }
}
</script>

<style>

</style>
