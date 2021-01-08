let root = new Vue({

  el: "#root",

  data: {
    listEmails: []
  },

  mounted(){
    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(response => {
        this.listEmails.push(response.data.response);
      });
    };
  },

  methods: {
  }

});

























// fine
