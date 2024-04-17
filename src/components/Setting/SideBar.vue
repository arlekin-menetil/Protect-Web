<script>
export default {
  data() {
    return {
      isSidebarClosed: true
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarClosed = !this.isSidebarClosed;
    }
  }
};
</script>


<template>
    <aside :class="{ close: isSidebarClosed, open: !isSidebarClosed }" class="close">
        <div class="up-menu">
        <div class="logo" >
            <div class="logo_img"><img src="/public/logo/gerb.png" alt=""></div>
            <p>"PROTECTION WEB APPS FROM <br>WEB VIRUSES"</p>
        </div>
        <div @click="toggleSidebar" class="doble_arrow">
            <span class="material-symbols-outlined"> double_arrow</span>
        </div>
    </div>
        <div class="content-menu">
            <nav>
                <ul>
                    <li class="">
                        <a href="/Protect">
                        <span style="margin-right: 8px;" class="material-symbols-outlined"> verified_user</span>
                        <p>Защита контента</p></a>
                        </li>
                        <li class="jurnal">
                        <a class="jurnal" href="/Jurnual">
                            <span style="margin-right: 8px;" class="material-symbols-outlined"> description</span>
                            <p>Журналы угроз</p></a>
                            <ul>
                                <li><a href="/AllLogi">Все логи</a></li>
                                <li><a href="/AllSqli">SQLI логи</a></li>
                                <li><a href="/DosPage">ДОС</a></li>
                                <li><a href="/SpamPage">Спам логи</a></li>
                                <li><a href="/LogiProxy">Логи прокси</a></li>
                                <li><a href="/OtherLog">Другие логи</a></li>
                            </ul>
                            </li>
                            <li>
                            <a class="blacklist" href="/BlackList">
                                <span style="margin-right: 8px;" class="material-symbols-outlined"> block</span>
                                <p>Черный список</p></a>
                                <ul style="height: 133px;">
                                    <li><a href="/BlackIP">Черный список по IP</a></li>
                                    <li><a href="/BlackCountry">Черный список стран</a></li>
                                    <li><a href="/OtherBan">Другие баны</a></li>
                                </ul>
                                </li>
                                <li>
                                <a href="/SkanVirus">
                                    <span style="margin-right: 8px;" class="material-symbols-outlined"> document_scanner</span>
                                    <p>Сканер вирусов</p></a>
                                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>


<style scoped>

aside {
position: relative;
height: 100vh;
top: 0;
left: 0;
background: #343549;
color: #D6D6D6;
transition: width 0.5s;
}
/*стили для двойной кнопки*/
.close {
    width: 78px;
  }
.close .up-menu{
    border: none;
}
.close .doble_arrow{
    right: 23px;
}
.close .logo{
    opacity: 0;
    }
.close .content-menu p{
opacity: 0;
}
.close .content-menu span{
    padding-left: 5px;
    }
.close .doble_arrow{
    border: none;
}   
/**/
.open {
    width: 254px;
  }
.open .up-menu{
    border: none;
}
.open .doble_arrow {
    transform: rotate(180deg);
  }
.open .logo{
    opacity: 1;
    }
.open .content-menu p{
opacity: 1;
}
.open .content-menu span{
    padding-left: 5px;
    }
/**/
.up-menu{
    width: 254px;
    height: 81px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #30313E;
    border-right: 1px solid #30313E;
}
aside .logo{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #D6D6D6;
    font-size: 8px;
    margin: 14px 0 14px 10px;
    width: 192px;
    height: 53px;
}

.logo_img{
    width: 96.21px;
    height: 29px
}

.logo_img img{
    width: 100%;
    height: 100%;
}

aside nav ul{
    width: 100%;
    list-style: none;
    padding: 20px 12px;
}

aside nav ul li a{
    color: #D6D6D6;
    display: block;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 10px 30px 10px 10px;
}
aside nav ul li a:hover{
    color: #fff;
    display: block;
    background: #6C5DD3;
    display: flex;
    align-items: center;
    border-radius: 12px;
}

aside nav ul ul{
    position: static;
    margin: 5px 0;
    width: 230px;
    height: 254px;
    background: #28293B;
    border-radius: 12px;
    display: none;
    flex-direction: column;
    justify-content: space-around;
}

aside nav ul ul li{
line-height: 28px;
border-bottom: none;
}
aside nav ul ul li a{
width: 100%;
height: 28px;
font-size: 15px;
color: #D6D6D6;
display: flex;
align-items: center;
border-radius: 12px;
}

aside nav ul li:hover ul{
    display: flex;
    transition: 0.5s ease;
    animation: 300ms ease-in-out forwards;
    transform-origin: top center;
    position: absolute;
    z-index: 1;
}

aside nav ul ul li a:hover{
background: none;
}
aside .doble_arrow{
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: #28293B;
    border-radius: 6px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s;
}
</style>

