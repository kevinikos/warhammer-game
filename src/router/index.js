import Vue              from 'vue';
import VueRouter        from 'vue-router';
import Character        from '@/views/character/character.view.vue';
import CharacterDetails from '@/views/character-details/character-details.view.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'character',
    component: Character,
  },
  {
    path: '/character-details',
    name: 'character-details',
    component: CharacterDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
