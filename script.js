let app = new Vue({
  el: '#app',
  data: {
    currentImage: {
      download_uri: '',
      quote_id: '',
    },
    currentQuote: {
      quote: '',
      author: '',
      categories: []
    },
    loading: true
  },
  created() {
    this.quotesAction();
  },
  methods: {
       async quotesAction(author, category) {
      try {
        this.loading = true;

        if (author) // AUTHOR parameter passed
        {
           const response = await axios.get('http://quotes.rest/quote/image/search?author=' + author +'&private=false', {headers: {"X-TheySaidSo-Api-Secret": "mc_siwch1kQUS3YIqKEwGgeF", "Accept": "application/json"}});
           this.currentImage = response.data.contents.qimage
           const responseQuote = await axios.get('http://quotes.rest/quote?id=' + this.currentImage.quote_id, {headers: {"X-TheySaidSo-Api-Secret": "mc_siwch1kQUS3YIqKEwGgeF", "Accept": "application/json"}});
           this.currentQuote = responseQuote.data.contents;
          }
        else if (category) // CATEGORY parameter passed
        {
           const response = await axios.get('http://quotes.rest/quote/image/search?category=' + category + '&private=false', {headers: {"X-TheySaidSo-Api-Secret": "mc_siwch1kQUS3YIqKEwGgeF", "Accept": "application/json"}});
           this.currentImage = response.data.contents.qimage
           const responseQuote = await axios.get('http://quotes.rest/quote?id=' + this.currentImage.quote_id, {headers: {"X-TheySaidSo-Api-Secret": "mc_siwch1kQUS3YIqKEwGgeF", "Accept": "application/json"}});
           this.currentQuote = responseQuote.data.contents;
          }
        else // DEFUALT, no parameters passed
        {
        const response = await axios.get('http://quotes.rest/quote/image/search?private=false', {headers: {"X-TheySaidSo-Api-Secret": "mc_siwch1kQUS3YIqKEwGgeF", "Accept": "application/json"}});
        this.currentImage = response.data.contents.qimage
        const responseQuote = await axios.get('http://quotes.rest/quote?id=' + this.currentImage.quote_id, {headers: {"X-TheySaidSo-Api-Secret": "mc_siwch1kQUS3YIqKEwGgeF", "Accept": "application/json"}});
        this.currentQuote = responseQuote.data.contents;  
      }
        this.loading = false;

      } catch (error) {
        console.log(error);
      }
    },
    NewRandomQuote() {
      this.quotesAction();
    },
    NewQuoteSameAuthor() {
      this.quotesAction( this.currentQuote.author);
    },
    NewQuoteSameCategory() {
      this.quotesAction( '', this.currentQuote.categories[0]);
    }

  },
    computed: {


  },
   watch: {

  }

});
