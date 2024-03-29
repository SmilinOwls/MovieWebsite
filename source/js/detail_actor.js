
import movie_store from "./movie_store.js";

export default {
    data() {
        return {
            query: "Name",
            movie_store,
        }
    },

    methods:
    {

    },
    mounted() {
        //https://imdb-api.com/en/API/Name/k_jro07wuj/nm0000154
        const url = BASE_URL + this.query + KEY_API + '/' + this.movie_store.id_cur_actor;
        console.log(url);
        fetch(url).then(res => res.json().then(data => {
            console.log(data);
            this.movie_store.current_actor = data;
          })) 
    },
    
    methods:{
        hideMain(data){
            this.$emit('update','detail_movie');
            this.movie_store.id_cur_movie = data
        }
    },
    template:
    `
    <div class="movie-container">
        <div class="card mb-3" style="max-width: 1100px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="this.movie_store.current_actor.image" class="img-fluid rounded-start img-movie" :alt="this.movie_store.current_actor.id">
                </div>
                <div class="col-md-8">
                    <div class="card-body text-dark">
                        <h2 class="card-title">{{this.movie_store.current_actor.name}}</h2>
                        <p class="card-text">{{this.movie_store.current_actor.summary}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
    <table class="table table-striped">
        <thead class="thead-dark">
            <tr> 
                <th scope="col">ID</th>
                <th scope="col">Role</th>
                <th scope="col">Title</th>
                <th scope="col">Year</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="actor in this.movie_store.current_actor.castMovies" @click="hideMain(actor.id)">
                <th scope="col">{{actor.id}}</th>
                <td>{{actor.role}}</td>
                <td>{{actor.title}}</td>
                <td>{{actor.year}}</td>
                <td>{{actor.description}}</td>
            </tr>
        </tbody>
  </table>
</div>`
}