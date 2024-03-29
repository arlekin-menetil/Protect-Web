<script setup>
import SideBar from '@/components/ProtectContent/SideBar.vue';
import UpMenu from '@/components/ProtectContent/MainSide.vue';
</script>

<template>
  <main class="Protection">
    <SideBar />
    <UpMenu />
  </main>
</template>

<style>
.Protection {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>