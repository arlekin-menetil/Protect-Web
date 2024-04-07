<script>
import SettingPage from "../../../ModalWindow/SettingPage.vue"

export default {
    data() {
        return {
            isModalColosed: false
        };
    },
    components: {
        SettingPage
    },
    methods: {
        toggleModal() {
            this.isModalColosed = !this.isModalColosed;
        }
    }
};
</script>

<template>
    <div class="No_data">
        <div class="text">
            <p>Существует вероятность ложноположительных результатов, пожалуйста, проанализируйте результаты и проверьте
                их. Иногда процесс сканирования может занять больше времени в зависимости от файлов на вашем хосте.</p>
        </div>
        <div class="button">
            <button>Запуск нормального сканера</button>
            <button>Запуск глубокого анализа</button>
            <button @click="toggleModal">Настройки</button>
        </div>
    </div>
    <SettingPage v-model="isModalColosed" />

</template>
<style>
.No_data {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border-radius: 8px;
    margin-top: 10px;
}

.text {
    padding: 14px 10px;
    background: #515266;
    border-radius: 8px;
    height: 78px;
    display: flex;
    font-size: 14px;
    align-items: center;
}

.button {
    width: 100%;
    padding-top: 16px;
    display: flex;
    justify-content: center;
}

.button button {
    margin: 0 6px;
    height: 44px;
    border-radius: 12px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
}

.button button:first-child {
    width: 264px;
    text-align: center;
    background-color: inherit;
    border: 1px solid #6C5DD3;
    color: #6C5DD3;
}

.button button:nth-child(2) {
    width: 263px;
    text-align: center;
    background-color: #C30000;
    color: #fff;
}

.button button:last-child {
    width: 139px;
    text-align: center;
    background: url('../../../public/icons/settings1.svg') no-repeat center left 14px #6C5DD3;
    color: #fff;
    padding: 12px 48px;
    background-size: 24px;
}
</style>