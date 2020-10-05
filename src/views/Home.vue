<template>
  <div class="home">
    <div class="container">
      <!-- <div class="large-1 medium-12 small-12 cell"> -->
        <label>Upload csv file
          <input  type="file" id="file" ref="file" @change="handleFileUpload($event)" />
        </label>
        <br>
        <p class="d-inline-flex mr-2">Sellect delimiter that your csv file uses: </p>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="delimiter" id="delimiter1" value="comma" checked>
          <label class="form-check-label" for="delimiter1">,</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="delimiter" id="delimiter2" value="semicolon">
          <label class="form-check-label" for="delimiter2">;</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="delimiter" id="delimiter2" value="pipe">
          <label class="form-check-label" for="delimiter2">|</label>
        </div>
      <!-- </div> -->
    </div>
    <div class="btn btn-success" @click="submitDocument()">Submit</div><br><hr>
    <div class="d-flex mt-5 flex-wrap">
      <file-card v-for="(file,i) in fileList" :key="i" :documentName="file"></file-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import fileCard from "@/components/FileCard.vue";
export default {
  name: 'Home',
  components: {
    fileCard
  },
  data(){
    return{
      file:''
    }
  },
  computed:{
    ...mapGetters({
      fileList:'getDocumentsList'
    })
  },
  created(){
    this.getDocumentList()
  },
  methods:{
    ...mapActions({
      postDocument:'postDocument',
      getDocumentList:'getDocumentList'
    }),
    async submitDocument(){
      let formData = new FormData();
      const radioBtnVal = document.querySelector('input[name="delimiter"]:checked').value;
      formData.append('csv', this.file);
      formData.append('delimiter', radioBtnVal);
      await this.postDocument(formData);
      this.getDocumentList()
    },
    handleFileUpload(event){
      this.file = event.target.files[0];
    }
  }
}
</script>
