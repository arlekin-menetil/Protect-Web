<script setup>
import DataTable from '@/components/BlackList/OtherPage/BlackCountry/ListBlack.vue'
import NoData from '@/components/BlackList/OtherPage/BlackCountry/NoData.vue'
import IPBlock from '@/components/BlackList/OtherPage/BlackCountry/IpBlock.vue'
</script>

<template>
    <div class="jquery">
        <h2>Защита контента</h2>
        <DataTable />
        <NoData />
        <IPBlock />
    </div>
</template>

<style>
.jquery {
    width: 100%;
    height: 143px;
    position: relative;
    top: 0;
    padding: 32px 32px 16px 32px;
    color: #fff;
}

.juquery_content {
    height: 93px;
    background: #343549;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 12px;
}

.checkbox {
    width: 184px;
    display: flex;
    justify-content: space-around;
}

.check_save a {
    padding: 18px 59.5px;
    border-radius: 12px;
    background: #6C5DD3;
    color: #fff;
}
</style>