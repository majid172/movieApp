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
        <div class="col-md-3">
          <div class="card">
            <img :src="movieStore.poster" class="card-img-top" alt="Movie Poster">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
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
