// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato


let root = new Vue({
  el: "#root",

  data: {
    numbers: []
  },

  mounted(){
    for (var i = 0; i < 37; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then(response => {
        this.numbers.push(response.data.response);
      })
    }
  },


  methods: {

  }

});












// fine
