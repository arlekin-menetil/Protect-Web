<script setup>
import {ref} from 'vue'

const is_expanded = ref(false)

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
}
</script>



<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo" >
            <img src="../../../public/logo/gerb.png" alt="">
            <p>"PROTECTION WEB APPS FROM <br>WEB VIRUSES"</p>
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">
                    <img src="../../../public/icons/double-arrow.svg" alt="">
                </span>
            </button>
        </div>
        <div class="content-menu">
            <nav>
                <ul>
                    <li><a class="active_protect" href="/Protect">Защита
                            контента</a></li>
                    <li><a class="jurnal-main" href="/Jurnual">Журналы угроз</a></li>
                    <li><a class="black-list" href="/BlackList">Черный список</a></li>
                    <li><a class="skan-virus" href="">Сканер вирусов</a></li>
                </ul>
            </nav>
        </div>
    </aside>
</template>


<style scoped>
aside{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(2rem+32px);
    min-height: 100vh;
    padding: 10px 14px;
    overflow: hidden;
    background: #343549;
    color: #D6D6D6;
    transition: 0.2s ease-out;
    position: relative;
}

.logo{
    width: 192px;
    font-size: 10px;
    color: #fff;
}
.logo img{
    width: 96.21px;
    height: 29px;
}
button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
}
.menu-toggle-wrap{
    position: absolute;
    right: 10px;
}
.is_expanded{
    width: 254px;
}
.content-menu li a{
    border-radius: 8px;
}
.content-menu li a:hover{
 background: #6c5dd3;
}
.content-protect {
    width: 100%;
    height: 100%;
    font-family: "Inter", sans-serif;
    display: flex;

}

.content-menu {
    width: 254px;
    height: 100%;
    background: #343549;
}

.logo-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 14px 0 0 0;
    color: #fff;
}

.logo-menu img {
    width: 96.21px;
    height: 29px;
    margin: 0 0 4px 0;
}

nav {
    width: 100%;
}

nav ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 35px;
}

nav ul li {
    width: 230px;
    height: 56px;

}

nav ul li a {
    padding: 12.5px 56px 12.5px 40px;
    color: #D6D6D6;
    padding-left: 44px;
}
.active_protect {
    color: #fff;
    border-radius: 8px;
    background: url(../../public/icons/protect.svg) no-repeat center left 10px #6c5dd3;
  }
</style>