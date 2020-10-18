const app = new Vue({
  el: '#app',
  data() {
    return {
      name: '',
      email: '',
      description: '',
      response: '',
      errors: '',
      params: []
    }
  },
  computed: {
    msgLen() {
      return this.description.length
    },
    faultyName() {
      return {
        'is-invalid': this.params.includes('name')
      }
    },
    faultyEmail() {
      return {
        'is-invalid': this.params.includes('email')
      }
    },
    faultyDesc() {
      return {
        'is-invalid': this.params.includes('description')
      }
    }
  },
  methods: {
    onSubmit() {
      let comment = {
        name: this.name,
        email: this.email,
        description: this.description
      }
      axios.post('/comment', comment)
        .then(response => {
          this.response = response.data
        })
        .catch(error => {
          this.errors = error.response.data.errors
          this.errors.forEach(error => {
            this.params.push(error.param)
          });
        })
    }
  }
});