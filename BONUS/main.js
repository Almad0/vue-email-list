// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato


let root = new Vue({
  el: "#root",

  data: {
    numbers: [],
    singleNum: 0
  },

  created(){
    for (var i = 0; i < 36; i++) {
      this.numbers.push(this.singleNum);
    };
  },


  methods: {
    randomNumber: function(index){
      var numerello = 1;
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then(response => {
        numerello = response.data.response;
        console.log("random: " + numerello);
        this.singleNum = numerello;
      })
      console.log("numerello: " + numerello);
      console.log(this.singleNum);
    },

  },

  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/int')
    .then(response => {
      this.singleNum = response.data.response;
    })
  }

});












// fine
