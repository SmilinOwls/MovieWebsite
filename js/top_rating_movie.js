import movie_store from "./movie_store.js";
import rating_movie from "./rating_movie.js";

export default {
    data() {
        return {
            query: "Top250Movies",
            movie_store,
            active_item: [],
            nums: [],
        }
    },

    components:{
      rating_movie
    },

    methods:{
      hideMain(item){
        this.$emit('update',item);
      },
    },
    mounted() {

      var num_slide = 5;
      var movies = [];
      //BASE_URL + this.query + KEY_API
      fetch(`https://mocki.io/v1/d5694cf4-348f-43f6-be7d-38b325fe98d7`).then(res => res.json().then(data => {
          const len = data.items.length;
          if(len >= 30) num_slide = 10;
          else{
            if(len > 15){
              num_slide = len/3 + (len % 3 == 0? 0:1);
            }
        }

        this.movie_store.topRating_movies = data.items.slice(0,num_slide*3);
        this.active_item = this.movie_store.topRating_movies.slice(0,3);
        this.movie_store.topRating_movies.splice(0,3);
        
        this.movie_store.topRating_movies = this.movie_store.topRating_movies.reduce((resultArray, item, index) => { 
          const chunkIndex = Math.floor(index/3)
        
          if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
          }
        
          resultArray[chunkIndex].push(item)
        
          return resultArray
        }, [])

        console.log(this.movie_store.topRating_movies);
        this.nums = Array.from({length: num_slide},(_,i) => i)
      }))
        
      },
    template: `<nav class="navbar navbar-expand-lg navbar-light bg-transparent rounded">
    <a class="navbar-brand" style="font-weight:600">Top Rating</a>
    </nav>
    <rating_movie :list='movie_store.topRating_movies' :nums='nums' :active_item='active_item' @transData='hideMain'/>`
}