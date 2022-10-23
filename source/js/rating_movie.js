
import movie_store from "./movie_store.js";

export default{
    props:['list','nums','active_item'],
    data(){
      return{
        movie_store
      }
    },

    methods:{
      trans(item){
        this.$emit('hideMain','detail_movie');
        this.movie_store.id_cur_movie = item.id;
    },
    },

    template: `
    <div id="newcarouselExampleControls" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators indicator">
            <li data-target="#newcarouselExampleControls" data-slide-to="0" class="active"></li>
            <li data-target="#newcarouselExampleControls" :data-slide-to="num+1" v-for="num in this.nums"></li>
        </ol>
    <div class="carousel-inner adjust">
      <div class="carousel-item active">
        <div class="cards-wrapper">
        <div class="card text-white bg-dark d-none d-md-block" v-for="item in active_item" @click="trans(item)">
          <img :src="item.image" class="card-img-top" alt="...">
          <div class="card-body disabled">
              <p class="card-text">{{item.fullTitle}}</p>
            </div>
        </div>
      </div>
      </div>
      <div class="carousel-item" v-for="items in this.list">
        <div class="cards-wrapper">
          <div class="card text-white bg-dark d-none d-md-block" v-for="item in items" @click="trans(item)">
            <img :src="item.image" class="card-img-top" alt="...">
            <div class="card-body disabled">
              <p class="card-text">{{item.fullTitle}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev prev" href="#newcarouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next next" href="#newcarouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`
}