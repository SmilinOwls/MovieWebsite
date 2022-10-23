import person_store from "./person_store.js"

export default {
    data() {
        return {
          person_store,
        }
    },

    methods:{
      changeComponent(p){
        this.person_store.current_component = 'detail_display'
        this.person_store.current_person = p
        $('.pagination-nav').hide()
      }
    },
    template: `<table class="table table-striped">
    <thead class="thead-dark">
      <tr> 
        <th scope="col">#</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Email</th>
        <th scope="col">Avatar</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="p in person_store.persons" @click="changeComponent(p)">
      <th scope="col">{{p.id}}</th>
      <td>{{p.first_name}}</td>
      <td>{{p.last_name}}</td>
      <td>{{p.email}}</td>
      <td>
        <img :src="p.avatar" :alt="p.id"/>
      </td>
    </tr>
    </tbody>
  </table>
  
  `
}