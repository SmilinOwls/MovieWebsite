import latest_movie from "./latest_movie.js"
import popular_movie from "./popular_movie.js"
import top_rating_movie from "./top_rating_movie.js"

export default {
    data() {
        return {

        }
    },
    components: {
        latest_movie,
        popular_movie,
        top_rating_movie
    },
    methods:{
        forward(data){
            this.$emit('update',data);
        }
    },

    mounted(){
        $('.carousel-item').first().addClass('active');  
    },
    template:
    `<latest_movie @update="forward"/>
    <popular_movie @update="forward"/>
    <top_rating_movie @update="forward"/>`
}