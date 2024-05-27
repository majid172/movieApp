<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMovieStore } from '../stores/movieStore';

const route = useRoute();
const movieStore = useMovieStore();

onMounted(() => {
  movieStore.getSingleMovie(route.params.id);
});
</script>

<template>
    <div class="container">
        <div class="row justify-content-end">
            <div class="col-lg-4">
                <div class="card bg-dark">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span class="text-danger fw-bold">Title: </span> {{movieStore.singleMovie.Title}}</li>
                        <li class="list-group-item"><span class="text-danger fw-bold">Type: </span> {{movieStore.singleMovie.Type}}</li>
                        <li class="list-group-item"><span class="text-danger fw-bold">Writer: </span> {{movieStore.singleMovie.Writer}}</li>
                        <li class="list-group-item"><span class="text-danger fw-bold">Imdb Rating: </span> {{movieStore.singleMovie.imdbRating}}</li>
                        <li class="list-group-item"><span class="text-danger fw-bold">Genre: </span> {{movieStore.singleMovie.Genre}}</li>
                        <li class="list-group-item"><span class="text-danger fw-bold">Director: </span> {{movieStore.singleMovie.Director}}</li>
                        <li class="list-group-item"><span class="text-danger fw-bold">Released: </span> {{movieStore.singleMovie.Released}}</li>
                        <li class="list-group-item"><span class="text-danger fw-bold">Runtime: </span> {{movieStore.singleMovie.Runtime}}</li>
                    
                        
                      </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
ul li {
  background-color: transparent;
  color: white; /* Just to ensure text is visible on dark background */
}
.card {
  background-color: darkblue; /* To test transparency */
}
</style>

