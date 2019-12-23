import AddMovie from './AddMovie.js'
import MovieList from './MovieList.js'

export default {
  components: {
    AddMovie,
    MovieList
  },
  template: `
    <div id="app">
      <h1 id="title-header">Add Movie</h1>
      <AddMovie @newMovie="onNewMovie"></AddMovie>
      <br>
      <MovieList :movies="movies" />
    </div>
  `,
  data() {
    return {
      movies: []
    }
  },
  methods: {
    onNewMovie(movie) {
      this.movies.push(movie)
    }
  }
}
