
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

        const url = BASE_URL + this.query1 + KEY_API + '/' + this.movie_store.id_cur_movie + "/FullActor,Posters,Images,Ratings,";
        console.log(url)
        fetch("https://mocki.io/v1/2c505bbd-7916-4536-a5c5-6180bb962742").then(res => res.json().then(data => {
            
            this.movie_store.current_movie = data;
            this.actors = this.movie_store.current_movie.actorList.map((obj) => obj.name)
          }))

          fetch("https://mocki.io/v1/7d7f0352-07f0-4940-bde1-fdc09e32b1b8").then(res => res.json().then(data => {
            console.log(data)
            this.reviews = data.items;
          }))

          
          
    },
    methods:{

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
            <p class="card-text img-movie">Actors: <span class="actor" v-for="actor in this.actors">{{actor}}, <span></p>
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