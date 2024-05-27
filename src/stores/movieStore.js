import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    search: '',
    movies: [],
    allMovie: [],
    singleMovie: ''
    // poster: "https://m.media-amazon.com/images/M/MV5BNTIwMjE2Mjc1MF5BMl5BanBnXkFtZTYwNzI0OTI3._V1_SX300.jpg"
  }),
  getters: {},
  actions: {
    async searchBtn() {
      const {data} = await axios.get(`http://www.omdbapi.com/?apikey=54921eca&s=${this.search}`)
      if (data.Response === 'True' && this.search != '') {
        this.movies = data.Search
      
      } else {
        console.error('No results found:', data.Error)
      }
     
    },

    async getSingleMovie(id){
      const {data} = await axios.get(`http://www.omdbapi.com/?apikey=54921eca&i=${id}&plot=full`)
      console.log(data);
      this.singleMovie = data

    }
  }
})
