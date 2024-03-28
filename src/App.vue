<script setup>
import { RouterLink, RouterView } from 'vue-router';
import SideBar from './components/MenuNavigation/SideBar.vue';
import HeadLine from './components/AllPages/MainSide.vue';
</script>

<template>
  <div class="app">
  <SideBar />
<HeadLine />
  <RouterView />
</div>
</template>

<style scoped>
.app{
  display: flex;
}
main{
  flex: 1 1 0;
  flex-wrap: wrap;
}
</style>
