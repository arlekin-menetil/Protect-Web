<template>
    <div class="flexbox">
        <h2>Настройки</h2>
        <div class="box">
            <div class="first-box">
                <h2>Настройки</h2>
                <div class="contect">
                    <div class="mail">       
                        <div class="mail-input">            
                        <h4>Адрес электронный почты</h4>
                        <input type="text" placeholder="name@gmail.com"></div> 
                        <p>Адрес электронный почты будет использоваться для некоторых функций скрипта</p>
                    </div>
                    <div class="checkbox">       
                        <div class="checkbox-text">            
                        <h4>Защита в режиме реального времени</h4>
                        <input type="checkbox"></div> 
                        <p>Адрес электронный почты будет использоваться для некоторых функций скрипта</p>
                    </div>
                    <div class="checkbox">       
                        <div class="checkbox-text">            
                        <h4>Почтовые уведомления</h4>
                        <input type="checkbox"></div> 
                        <p>Если это Включено , вы будете получать уведомления на свой адрес электронной почты.</p>
                    </div>
                    <div class="checkbox">       
                        <div class="checkbox-text">            
                        <h4>Адрес электронный почты</h4>
                        <input type="checkbox"></div> 
                        <p>Базовое определение IP используется по умолчанию. Быстрее производительность, но низкая точность.Если это Включено , будет использоваться Advanced IP Detection. Высокая точность обнаружения, но более низкая производительность</p>
                        </div>
                </div>           
             </div>
            <div>
                <div class="first-box">
                <h2>Интерфейс Параметры</h2>
                <div class="contect">
                    <div class="checkbox">       
                        <div class="checkbox-text">            
                        <h4>Фиксированный макет</h4>
                        <input type="checkbox"></div> 
                        <p>Активирует фиксированный макет. Фиксированные и коробочные макеты не могут работать вместе</p>
                    </div>
                    <div class="checkbox">       
                        <div class="checkbox-text">            
                        <h4>В штучной упаковке</h4>
                        <input type="checkbox"></div> 
                        <p>Активирует в штучной упаковке</p>
                    </div>
                    <div class="checkbox">       
                        <div class="checkbox-text">            
                        <h4>Свернутая боковая панель</h4>
                        <input type="checkbox"></div> 
                        <p>Активирует компактную боковую панель навигации</p>
                    </div>
                    <div class="checkbox">       
                        <div class="checkbox-text">            
                        <h4>Боковая панель Развернуть при наведении</h4>
                        <input type="checkbox"></div> 
                        <p>Позволяет боковой панели навигации развернуться при наведении</p>
                    </div>
                </div>           
             </div>
            </div>
        </div>
        <div class="button">
            <button class="purple">Сброс настроек</button>
            <button class="white">Сохранить</button>
        </div>
    </div>
</template>

<style>
.flexbox{
        padding: 32px 32px 16px 32px;
}
.flexbox h2{
    color: #fff;
    margin-bottom: 10px;
}
.flexbox h4{
    font-size: 16px;
    color: #fff;
}
.box{
    display: flex;
    justify-content: space-around;
}
.first-box{
    display: flex;
    flex-direction: column;
    width: 552px;
    height: 518px;
    background: #343549;
    padding: 20px;
    border-bottom: 1px solid #292A36; 
}
.contect{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
}
.mail{
    border-bottom: 1px solid #292A36;
}
.mail-input{
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    margin-bottom: 12px;
}
.mail-input input{
    background: #28293B;
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 12px;
    color: #fff;
}
.mail p{
    color: #fff;
    font-size: 13px;
    margin-bottom: 10px;
}
.checkbox{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 10px;
    color: #fff;
    border-bottom: 1px solid #292A36;
}
.checkbox-text{
    display: flex;
    width: 376px;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 12px;
}
.checkbox p{
    color: #fff;
    font-size: 13px;
    margin-bottom: 10px;
}
.mail input{
   width: 282px; 
   height: 40px;
}
.flexbox .button{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 25px;
}
.purple{
cursor: pointer;
width: 195px;
height: 53px;
background: inherit;
border: 2px solid #6C5DD3;
color: #6C5DD3;
margin-right: 24px;
border-radius: 12px;
}
.white{
    cursor: pointer;
    width: 195px;
    height: 53px;
    background: #6C5DD3;
    color: #fff;
    margin-right: 24px;
    border-radius: 12px;
    border: none;
    }

 @media (max-width: 1366px) {
    .flexbox{
        padding: 32px 32px 16px 32px;
    }
    .flexbox h2{
        color: #fff;
        margin-bottom: 10px;
    }
    .flexbox h4{
        font-size: 16px;
        color: #fff;
    }
    .box{
        display: flex;
        justify-content: space-around;
    }
    .first-box{
        display: flex;
        flex-direction: column;
        width: 500px;
        height: 430px;
        background: #343549;
        padding: 20px;
        border-bottom: 1px solid #292A36; 
    }
    .contect{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }
    .mail{
        border-bottom: 1px solid #292A36;
    }
    .mail-input{
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #fff;
        margin-bottom: 12px;
    }
    .mail-input input{
        background: #28293B;
        outline: none;
        border: none;
        padding: 10px;
        border-radius: 12px;
        color: #fff;
    }
    .mail p{
        color: #fff;
        font-size: 13px;
        margin-bottom: 10px;
    }
    .checkbox{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-around;
        padding-top: 10px;
        color: #fff;
        border-bottom: 1px solid #292A36;
    }
    .checkbox-text{
        display: flex;
        width: 376px;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        margin-bottom: 12px;
    }
    .checkbox p{
        color: #fff;
        font-size: 13px;
        margin-bottom: 10px;
    }
    .mail input{
       width: 282px; 
       height: 40px;
    }
    .flexbox .button{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 10px;
    }
    .purple{
    cursor: pointer;
    width: 195px;
    height: 33px;
    background: inherit;
    border: 2px solid #6C5DD3;
    color: #6C5DD3;
    margin-right: 24px;
    border-radius: 12px;
    }
    .white{
        cursor: pointer;
        width: 195px;
        height: 33px;
        background: #6C5DD3;
        color: #fff;
        margin-right: 24px;
        border-radius: 12px;
        border: none;
        }
    }
</style>