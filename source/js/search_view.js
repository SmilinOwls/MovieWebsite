
import movie_store from "./movie_store.js";
import { nextTick } from 'vue'

export default {
    data() {
        return {
            query: "SearchMovie",
            movie_store,
            query_movies: [],
        }
    },
    mounted() {
        fetch(BASE_URL + this.query + KEY_API + '/' + encodeURI(this.movie_store.query)).then(res => res.json().then(data => {
            console.log(data.results);
            this.query_movies = data.results;
          }))
    },
    methods:{
        async hideMain(item){
            this.$emit('update','detail_movie');
            this.movie_store.id_cur_movie = item.id;
            await nextTick();
        },
    },
    template:
    `<div class="search-container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in this.query_movies">
            <div class="card h-100 text-dark" @click="hideMain(item)">
                <img :src="item.image" class="card-img-top" :alt="item.id">
                <div class="card-body text-center">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">{{item.description}}</p>
                </div>
            </div>
        </div>
    </div>
    </div>`
}