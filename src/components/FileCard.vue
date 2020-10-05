<template>
    <div class="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
        <img class="card-img-top w-75" src="@/assets/csv-logo.svg" alt="csv file icon">
        <div class="card-body">
          <h5 class="card-title">{{documentName}}</h5>
        <router-link class="btn btn-primary" :to="'/csv/show/?name='+documentName">edit</router-link>
        </div>
    </div>
</template>

<script>
export default {
name:'file_card',
props:['documentName'],
}
</script>

<style>

</style>