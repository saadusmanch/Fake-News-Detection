<template>
  <div>
    <h2>{{ msg }}</h2>
    <br>    
    <b-form class="form-inline justify-content-center">

    <b-input-group prepend="https://" class="w-25 mb-2 mr-sm-2 mb-sm-0">
      <b-input v-model="url" v-bind:class="{ 'is-invalid': attemptSubmit && !validation }" id="inline-form-input-url" placeholder="Enter Reddit URL"></b-input>
    </b-input-group>
    
    <b-button  
        v-on:click="onClick" variant="danger">Detect 
        <b-spinner v-if="showSpinner" small></b-spinner>
    </b-button>

    <b-form-invalid-feedback :state="validation">
        URL must not be empty
    </b-form-invalid-feedback>

    </b-form>

    <div class="mt-2">URL: {{ url }}</div>
    <br>
    <!-- <div class="text-center">
      <div class="mt-2">Prediction: {{ prediction }}</div>
      <br>
      <div class="mt-2">Title: {{ title }}</div>
    </div> -->
    <div class="row align-items-center justify-content-center">
      <b-card bg-variant="light" text-variant="dark" :header="header" class="text-center" style="max-width: 30rem; min-width:30rem">
        <b-card-text>Title: {{ title }}</b-card-text>
      </b-card>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return {
        url: '',
        attemptSubmit: false,
        prediction: '',
        title: '',
        showSpinner: false
      }
  },
  computed: {
    validation() {
      return this.url.length > 0 || !this.attemptSubmit
    },
    header(){
      return 'Prediction: ' + this.prediction;
    },
    body(){
      return 'Title' + this.title;
    }
  },
  methods:{
    onClick(){
      this.attemptSubmit = true;
      if (!this.validation){
        event.preventDefault();
      }
      else{
        this.attemptSubmit = false;
        this.showSpinner = true;
        axios.post('http://127.0.0.1:5000/ajax', {
          url: this.url,
      })
        .then((response) => {
            console.log(response);
            this.prediction = response.data.tag;
            this.title = response.data.title;
            this.showSpinner = false;
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
