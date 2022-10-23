import super_header from "./super_header.js"
import header_nav from "./header_nav.js"
import footer_nav from "./footer_nav.js"
import main_body from "./main_body.js"
import search_view from "./search_view.js"
import detail_movie from "./detail_movie.js"

export default {
    data() {
        return {
            currentSection: 'main_body'
        }
    },
    components: {
        super_header,
        header_nav,
        footer_nav,
        main_body,
        search_view,
        detail_movie
    },
    methods:{
        updateSection(section){
            this.currentSection = section;
        }
    },

    template:
    `<super_header/>
    <header_nav @loadSearch="updateSection"/>
    <component :is="currentSection" @update="updateSection"></component>
    <footer_nav/>`
}