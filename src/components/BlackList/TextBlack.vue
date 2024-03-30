<script setup>
import DataTable from '@/components/BlackList/ListBlack.vue'
</script>

<template>
    <div class="jquery">
        <h2>Защита контента</h2>
        <div class="juquery_content">
            <div class="checkbox">
                <p>Включит JQuery</p>
                <input type="checkbox">
            </div>
            <div class="check_text">
                <p>Включите эту опцию, если на вашем сайте нет файла jquery</p>
            </div>
            <div class="check_save">
                <a href="#">Сохранить</a>
            </div>
        </div>
        <DataTable />
    </div>
</template>

<style>
.jquery {
    width: 100%;
    height: 133px;
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