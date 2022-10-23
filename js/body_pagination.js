import {defineComponent, inject, computed} from 'vue'
export default defineComponent({ 
    setup(){
      const total_slide = computed({ 
        get: () => inject('getSlide').value,
        set: inject('updateSlide')
      })

      const items  = Array.from({ length: total_slide.value }, (_, i) => i + 1)

      return {
        total_slide,
        items
      }
    },

    methods:{
      load(n){
        this.$emit("loadPage",n)
      }
    },
    
    template: `
    <nav class="pagination-nav" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item previous">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
        
      <li v-for="n in items" class="page-item num" @click="load(n)"><a class="page-link" href="#">{{n}}</a></li>
      
      <li class="page-item next">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>`
})