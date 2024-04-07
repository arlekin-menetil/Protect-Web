
<template>
    <div id="Detals">
        <teleport to='#detals' />
        <div class="panel">
            <div class="Article">
                <h2>Details</h2>
            </div>
            <div class="panel_text">
        <div class="form">  
            <section>              
                <div>
                    <p>Имя фамилия</p>
                    <input type="text">
                </div>
                <div>                    
                    <p>Путь</p>
                    <input type="text">
                </div>
            </section>
            <section>
                <div>
                    <p>Поставленее изменение</p>
                    <input type="text">
                </div>
                <div>                    
                    <p>Размер файла</p>
                    <input type="text">
                </div>
            </section>
            </div>
            <div class="form">  
                <section>              
                    <div>
                        <p>Разрешение</p>
                        <input type="text">
                    </div>
                    <div>                    
                        <p>Последний доступ</p>
                        <input type="text">
                    </div>
                </section>
                <section>
                    <div>
                        <p>МД5 хеш:</p>
                        <input type="text">
                    </div>
                </section>
                </div>          
            </div>
            <div class="form-panel">
                <p>Описание угрозы ИБ:</p>
                <textarea></textarea>
            </div>
            <div class="form-panel">
                <p>Строка #: 829</p>
                <textarea>
const [loading, setLoading] = useState(false); <br>
const [lessons, setLessons] = useState([]);<br>
const [forRender, setForRender] = useState(null);<br>
const [currentPage, setCurrentPage] = useState(1);<br>
const [totalElements, setTotalElements] = useState(20);<br>
const onChange = (page) => {<br>
setCurrentPage(page);<br>
};<br>
                </textarea>
            </div>
            <div class="close">
                <button>Закрыть</button>
            </div>
        </div>
    </div>
</template>

<style>
#Detals{
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    color: #fff;
    position: fixed;
    padding: 60px;
}
.panel input {
    background: #52536F;
    outline: none;
    border: none;
    padding: 10px;
    color: #fff;
    border-radius: 8px;
}
.panel{
    width: 820px;
    background: #343549;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 12px;
}
.panel_text{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.Article{
     margin-bottom: 32px;
}
.form{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.form{
    display: flex;
}
.form input{
    width: 380px;
    height: 44px;
    margin: 10px 0;
}
.form-panel{
    width: 780px;
}
.form-panel p{
    margin: 10px 0;
}
.form-panel textarea{
    outline: none;
    resize: none;
    width: 780px;
    height: 115px;
    padding: 10px;
    background: #52536F;
    border: none;
    color: #fff;
    font-size: 14px;
    border-radius: 8px;
}
.close{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 16px;
    padding:0 16px;
}
.close button{
    width: 198px;
    height: 53px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background: #6C5DD3;
    color: #fff;
}

@media (max-width: 1366px){
    #Detals{
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        color: #fff;
        position: fixed;
        padding: 10px;
    }
.panel input {
    background: #52536F;
    outline: none;
    border: none;
    padding: 10px;
    color: #fff;
}
.panel{
    width: 820px;
    background: #343549;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
}
.panel_text{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.Article{
     margin-bottom: 22px;
}
.form{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.form{
    display: flex;
}
.form input{
    width: 380px;
    height: 34px;
    margin: 5px 0;
}
.form-panel{
    width: 780px;
}
.form-panel p{
    margin: 5px 0;
}
.form-panel textarea{
    outline: none;
    resize: none;
    width: 780px;
    height: 80px;
    padding: 10px;
    background: #52536F;
    border: none;
    color: #fff;
    font-size: 14px;
}
.close{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 16px;
    padding:0 16px;
}
.close button{
    width: 198px;
    height: 43px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background: #6C5DD3;
    color: #fff;
}
}
</style>