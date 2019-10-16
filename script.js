let app = new Vue({
  el: '#app',
  data: {
    number: '',
    current: {
      title: '',
      img: '',
      alt: ''
    },
  },
  created() {
    this.xkcd();
  },
  methods: {
    xkcd() {
      axios.get('https://xkcdapi.now.sh/' + this.number)
        .then(response => {
          this.current = response.data;
          return true;
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
});
