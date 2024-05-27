import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Movie from '../views/Movie.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movie/details/:id',
    name: 'movie-details', // Corrected name here
    component: Movie
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
