<script setup>
import SideBar from '@/components/JurnalContent/LogiProxy/SideBar.vue';
import HeadLine from '@/components/JurnalContent/LogiProxy/MainSide.vue';
</script>

<template>
    <main class="Logi">
        <SideBar />
        <HeadLine />
    </main>
</template>

<style>
.Logi {
    width: 100%;
    height: 100vh;
}
</style>