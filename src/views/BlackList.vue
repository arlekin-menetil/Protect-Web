<script setup>
import SideBar from '@/components/BlackList/SideBar.vue';
import HeadLine from '@/components/BlackList/MainSide.vue';
</script>

<template>
    <main class="BlackList">
        <SideBar />
        <HeadLine />
    </main>
</template>

<style>
.BlackList {
    width: 100%;
    height: 100vh;
}
</style>