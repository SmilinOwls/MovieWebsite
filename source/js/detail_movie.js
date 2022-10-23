
import movie_store from "./movie_store.js";

export default {
    data() {
        return {
            query1: "Title",
            query2: "Reviews",
            movie_store,
            actors: [],
            reviews: []
        }
    },
    mounted() {
        //https://imdb-api.com/en/API/Name/k_jro07wuj/nm0000154
        //https://imdb-api.com/en/API/Title/k_jro07wuj/tt1877830/FullActor,Posters,Images,Ratings,
        //https://imdb-api.com/en/API/Reviews/k_jro07wuj/tt1375666
        alert(this.movie_store.id_cur_movie);
        const url = BASE_URL + this.query1 + KEY_API + '/' + this.movie_store.id_cur_movie + "/FullActor,Posters,Images,Ratings,";
        fetch(url).then(res => res.json().then(data => {
            
            this.movie_store.current_movie = data;
            this.actors = this.movie_store.current_movie.actorList;
          }))

          fetch(BASE_URL + this.query2 + KEY_API + '/' + this.movie_store.id_cur_movie).then(res => res.json().then(data => {
            console.log(data)
            this.reviews = data.items;
          }))
          
    },
    methods:{
        actorID(item){
            this.$emit('update','detail_actor');
            this.movie_store.id_cur_actor = item;
        }
    },
    template:
    `<div class="movie-container">
    <div class="card mb-3" style="max-width: 1100px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="this.movie_store.current_movie.image" class="img-fluid rounded-start img-movie" :alt="this.movie_store.current_movie.id">
      </div>
        <div class="col-md-8">
            <div class="card-body text-dark">
            <h5 class="card-title">{{this.movie_store.current_movie.fullTitle}}</h5>
            <p class="card-text">Year: {{this.movie_store.current_movie.year}}</p>
            <p class="card-text">Directors: {{this.movie_store.current_movie.directors}}</p>
            <p class="card-text">Genres: {{this.movie_store.current_movie.genres}}</p>
            <p class="card-text img-movie">Actors: <span class="actor" v-for="actor in this.actors" @click="actorID(actor.id)">{{actor.name}}, </span></p>
            <p class="card-text"><small class="text-muted">Summary: {{this.movie_store.current_movie.plot}}</small></p>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div class="row row-cols-1 review-title">Reviews</div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="item in this.reviews">
        <div class="card review">
        <div class="card-body text-dark">
            <h3>{{item.username}}</h3>
            <h5 class="card-title"><i>{{item.title}}</i></h5>
            <p class="card-text">{{item.content}}</p>
        </div>
        </div>
    </div>
    </div>`
}