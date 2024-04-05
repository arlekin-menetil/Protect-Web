<script setup>
import Text from '@/components/BlackList/TextBlack.vue'
</script>

<template>
    <div class="content-protect">
        <div class="HeadMenu">
            <div class="panel_up">
                <div class="search">
                    <input type="text" placeholder="Поиск">
                    <div class="icon_search"></div>
                </div>
                <div class="HeadSetting">
                    <a href="#">Посмотреть Сайт</a>
                    <a href="#"><img style="margin-right:3.5px" src="../../../public/icons/settings1.svg"
                            alt="">Настройки</a>
                </div>
            </div>
            <Text />
        </div>

    </div>
</template>

<style>
.content-protect {
    width: 100%;
    height: 100vh;
    font-family: "Inter", sans-serif;
    display: flex;

}

/*Line menu*/

.HeadMenu {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.HeadMenu .panel_up {
    width: 100%;
    height: 81px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #343549;
    padding: 0 32px;
}

.search {
    width: 322px;
    height: 46px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

.search input {
    width: 100%;
    height: 100%;
    border: #6C5DD3;
    padding-left: 20px;
    background: #28293B;
    color: #fff;
    outline: none;
}

.search input[placeholder] {
    color: #fff;
}

.search .icon_search {
    position: absolute;
    top: 5px;
    right: 4px;
    width: 38px;
    height: 38px;
    background: url(../../public/icons/Search.svg) no-repeat #6C5DD3 center center;
    background-size: cover 20px;
    border-radius: 10px;
    cursor: pointer;
}

.HeadSetting {
    width: 414px;
    display: flex;
    justify-content: space-between;
}

.HeadSetting a {
    padding: 18px 36.5px 18px 36.5px;
}

.HeadSetting a:first-child {
    color: #6C5DD3;
    border: 2px solid #6C5DD3;
    border-radius: 12px;
    display: flex;
    align-items: center;
}

.HeadSetting a:nth-child(2) {
    color: #fff;
    border: 2px solid #6C5DD3;
    border-radius: 12px;
    padding: 18px 42px 18px 42px;
    display: flex;
    align-items: center;
    background: #6C5DD3;
}
</style>