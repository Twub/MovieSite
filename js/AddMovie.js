import Movie from './Movie.js'
import storage from './Utility/LocalStorage.js';

export default {
  mixins: [storage],
  template: `
    <div id="content-div">
      <form>
        <label for="title">Title</label>
        <input id="title" v-model="title" type="text">
        <br>
        <br>
        <span class="current-rating">{{rating}}</span>
        <label for="rating">Rating</label>
        1
        <input id="rating" type="range" v-model="rating" min="1" max="5">
        5
        
        <br>
        <br>
        <label for="genre">Genre</label>
        <select id="genre" v-model="genre">
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
        </select>
        <br>
        <br>
        <label for="description">Description</label>
        <textarea id="description" v-model="desc"></textarea>
        <br>
        <br>
        <button @click.prevent="clearForm">Clear</button>
        <button @click.prevent="addMovie">Add</button>
      </form>
    </div>
    `,
  data() {
    return {
      title: '',
      rating: 3,
      genre: 'Drama',
      desc: ''
    }
  },
  methods: {
    addMovie(evt) {
      evt.preventDefault()
      if (this.title == ''){
        alert('Need to add a movie name!!!');
      }else {
          let movie = new Movie(
          this.title, 
          this.rating,
          this.genre,
          this.desc 
          );
          this.$emit('newMovie', movie)
          this.clearForm()
      }
      

      console.log(movie);

      
    },
    clearForm() {
      this.title = ''
      this.rating = 3
      this.genre = 'Drama'
      this.desc = ''
    }
  }
}