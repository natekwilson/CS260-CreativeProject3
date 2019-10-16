let app = new Vue({
  el: '#app',
  data: {
    number: '',
    current: {
      title: '',
      img: '',
      alt: ''
    },
    loading: true,
  },
  created() {
    this.xkcd();
  },
    computed: {
    month() {
      var month = new Array;
      if (this.current.month === undefined)
        return '';
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      return month[this.current.month - 1];
    }
  },
  methods: {
       async xkcd() {
      try {
        this.loading = true;
        const response = await axios.get('https://xkcdapi.now.sh/' + this.number);
        this.current = response.data;
        this.loading = false;
        this.number = response.data.num;
      } catch (error) {
        console.log(error);
      }
    },
  }
});
