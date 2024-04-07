<template>
    <div class="Ip_block">
        <h3>Забанить IP-адрес</h3>
        <div class="block">
            <div>
                <h4>IP-адрес</h4>
                <input type="text">
            </div>
            <div>                
                <h4>Причина</h4>
                <input type="text">
            </div>
            <div>
                <h4>URL перенаправления:</h4>
                <input type="text">
            </div>
            <div>
                <h4>Перенаправление на сайт:</h4>
                <select>
                    <option value="">Нет</option>
                </select>
            </div>
            <div class="ip-button">
                <button>Забанить</button>
                <button>Сброс настроек</button>
            </div>
        </div>
    </div>
</template>
 <style>
.Ip_block{
    background: #343549;
    display: flex;
    flex-direction: column;
    height: 130px;
    width: 100%;
    border-radius: 8px;
    margin-top: 10px;
    padding-top: 10px;
    padding-left: 20px;
}
.block{
    width: 100%;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0 20px;

}
.block h4{
    margin-bottom: 10px;
}
.block input{
    width: 170px;
    height: 40px;
    border-radius: 8px;
    border: none;
    outline: none;
    padding-left: 15px;
    background: #28293B;
    color: #fff;
}
.block select{
    width: 170px;
    height: 40px;
    border-radius: 8px;
    border: none;
    outline: none;
    padding-left: 15px;
    background: #28293B;
    color: #fff;
}
.block button:last-child {
    color: #6C5DD3;
    border: 2px solid #6C5DD3;
    width: 170px;
    height: 44px;
    border-radius: 8px;
    background: inherit;
    cursor: pointer;
}
.block button:first-child {
    background:#C30000;
    width: 170px;
    height: 44px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 5px;
    font-size: 14px;
    color: #fff;
  }
  @media(max-width: 1366px){
    
    .Ip_block{
        background: #343549;
        display: flex;
        flex-direction: column;
        height: 100px;
        width: 100%;
        border-radius: 8px;
        margin-top: 5px;
        padding-top: 5px;
        padding-left: 20px;
    }
    .block{
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px 0 20px;
    
    }
    .block h4{
        margin-bottom: 10px;
    }
    .block input{
        width: 140px;
        height: 30px;
        border-radius: 8px;
        border: none;
        outline: none;
        padding-left: 15px;
        background: #28293B;
        color: #fff;
    }
    .block select{
        width: 140px;
        height: 30px;
        border-radius: 8px;
        border: none;
        outline: none;
        padding-left: 15px;
        background: #28293B;
        color: #fff;
    }
    .block button:last-child {
        color: #6C5DD3;
        border: 2px solid #6C5DD3;
        width: 140px;
        height: 34px;
        border-radius: 8px;
        background: inherit;
        cursor: pointer;
    }
    .block button:first-child {
        background:#C30000;
        width: 140px;
        height: 34px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin: 0 5px;
        font-size: 14px;
        color: #fff;
      }
      }
</style>