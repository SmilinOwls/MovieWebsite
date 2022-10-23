import movie_store from "./movie_store.js";

export default {
    data() {
        return {
            query: "InTheaters",
            movie_store,
            active_item: {},
            nums: [1,2,3,4]
        }
    },
    methods:{
         hideMain(item){
            this.$emit('update','detail_movie');
            this.movie_store.id_cur_movie = item.id;
        },
    },
    mounted() {

         //BASE_URL + this.query + KEY_API
        fetch("https://mocki.io/v1/d5694cf4-348f-43f6-be7d-38b325fe98d7").then(res => res.json().then(data => {
            console.log(data.items);
            this.movie_store.lastest_movies = data.items.slice(0,5);
            this.active_item = this.movie_store.lastest_movies[0];
            this.movie_store.lastest_movies.splice(0,1);
          }))
    },
    template: `
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators latest-indicator">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" :data-slide-to="num" v-for="num in nums"></li>
        </ol>
        <div class="carousel-inner first-carousel">
            <div class="carousel-item active" @click="hideMain(this.active_item)">
                <img class="d-block w-50" :src="this.active_item.image"/>
                <div class="carousel-caption d-none d-md-block">
                    <h3>{{this.active_item.fullTitle}}</h3>
                </div>
            </div>
            <div class="carousel-item" v-for="item in this.movie_store.lastest_movies" @click="hideMain(item)">
                <img class="d-block w-50" :src="item.image">
                <div class="carousel-caption d-none d-md-block">
                    <h3>{{item.fullTitle}}</h3>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>`
}