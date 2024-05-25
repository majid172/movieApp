<script setup>
import { useMovieStore } from '../stores/movieStore'

const movieStore = useMovieStore()
</script>

<template>
  <div class="container">
    <div class="home-page">
      <div class="row justify-content-end mb-3">
        <div class="col-lg-4">
          <div class="input-group">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="movieStore.search" @keypress="movieStore.searchBtn">
            <button class="btn btn-success" type="submit" @click="movieStore.searchBtn">Search</button>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-3" v-for="movie in movieStore.movies" :key="movie.imdbID">
          <div class="card bg-black mb-3">
            <img :src="movie.Poster" class="card-img-top" alt="Movie Poster">
            <div class="card-body">
              <h5 class="card-title text-light">{{movie.Title}} <span>({{movie.Year}})</span></h5>
              <p class="card-text"></p>
              <a href="#" class="btn btn-outline-success">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  color: white;
}

.home-page img {
  height: 400px;
  width: 303px;
}
</style>
