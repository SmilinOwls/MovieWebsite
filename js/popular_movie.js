import movie_store from "./movie_store.js";

export default {
    data() {
        return {
            query: "MostPopularMovies",
            movie_store,
            active_item: [],
            nums: [],
        }
    },

    methods:{
      hideMain(item){
        this.$emit('update','detail_movie');
        this.movie_store.id_cur_movie = item.id;
    },
    },
    mounted() {
      function chunk (items, size) {  
        const chunks = []
        items = [].concat(...items)
      
        while (items.length) {
          chunks.push(
            items.splice(0, size)
          )
        }
      
        return chunks
      }

      var num_slide = 5;
      var movies = [];
        (async () => {
           //BASE_URL + this.query + KEY_API
          const res = await fetch(`https://mocki.io/v1/d5694cf4-348f-43f6-be7d-38b325fe98d7`);
          const data = await res.json();
          movies = data.items;
          const len = data.items.length;
          if(len >= 30) num_slide = 10;
          else{
            if(len > 15){
              num_slide = len/3 + (len % 3 == 0? 0:1);
            }
        }

        this.movie_store.popular_movies = movies.slice(0,num_slide*3);
        this.active_item = this.movie_store.popular_movies.slice(0,3);
        this.movie_store.popular_movies.splice(0,3);
        this.movie_store.popular_movies = chunk(this.movie_store.popular_movies,3)
        console.log(this.movie_store.popular_movies);
        this.nums = Array.from(Array(num_slide).keys())
      })();
        
      },
    template: `<nav class="navbar navbar-expand-lg navbar-light bg-transparent rounded">
    <a class="navbar-brand" style="font-weight:600">Most Popular</a>
    </nav>
    
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators indicator">
            <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleControls" :data-slide-to="num+1" v-for="num in this.nums"></li>
        </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="cards-wrapper">
        <div class="card text-white bg-dark d-none d-md-block" v-for="item in active_item" @click="hideMain(item)">
          <img :src="item.image" class="card-img-top" alt="...">
          <div class="card-body disabled">
              <p class="card-text">{{item.fullTitle}}</p>
            </div>
        </div>
      </div>
      </div>
      <div class="carousel-item" v-for="items in this.movie_store.popular_movies">
        <div class="cards-wrapper">
          <div class="card text-white bg-dark d-none d-md-block" v-for="item in items" @click="hideMain(item)">
            <img :src="item.image" class="card-img-top" alt="...">
            <div class="card-body disabled">
              <p class="card-text">{{item.fullTitle}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`
}