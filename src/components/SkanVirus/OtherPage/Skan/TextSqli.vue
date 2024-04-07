<script setup>
import DataTable from '@/components/SkanVirus/OtherPage/Skan/SkanList.vue'
import Text_button from '@/components/SkanVirus/OtherPage/Skan/NoData.vue'
</script>

<template>
    <div class="jquery">
        <h2>Сканер вирусов</h2>
        <Text_button />
        <DataTable />
    </div>
</template>

<style>
.jquery {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    padding: 32px 32px 16px 32px;
    color: #fff;
}

.jquery h2 {
    margin-bottom: 16px;
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