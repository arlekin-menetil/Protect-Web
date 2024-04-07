<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue']);
const closeModal = () => {
    emit('update:modelValue', false);
};

</script>

<template>
  <div id="ModalSetting" @click.self="() => emit('update:modelValue', false)" v-if="props.modelValue">
    <div class="panel-setting">
      <div class="Article-setting">
          <h2>Настройки</h2>
      </div>
      <div class="setting-paneltext">
  <div class="form-setting">  
      <section>              
          <div>
              <p>Директория сканирования:</p>
              <input type="text">
          </div>
          <div>                    
              <p>Расширения для сканирования:</p>
              <input type="text">
              <p style="padding-left: 180px; font-size: 12px;">(Используйте разграничитель "|")</p>
          </div>
          <div>                    
            <p>Расширения для сканирования:</p>
            <input type="text">
            <p style="padding-left: 180px; font-size: 12px;">(Используйте разграничитель "|")</p>
        </div>
      </section>
      </div>
  </div>
  <div class="setting_close">
    <button @click="closeModal">Закрыть</button>
    <button @click="closeModal">Сохранить</button>
</div>
  </div>
  </div>
</template>
<style>
#ModalSetting{
  background: rgba(0,0,0,0.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: fixed;
  padding: 12px;
}
.panel-setting input {
  background: #52536F;
  outline: none;
  border: none;
  padding: 10px;
  color: #fff;
  border-radius: 8px;
  height: 44px;
  width: 100%;
}
.panel-setting{
  width: 420px;
  height: 474px;
  background: #343549;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
}
.setting-paneltext{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.Article-setting{
  height: 44px;
  border-bottom: 2px solid #292A36;
  margin-bottom: 16px;
}
.form-setting section{

  height: 305px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-setting section div:last-child{
  justify-content: flex-end;
}
.setting_close{
  width: 380px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.setting_close button{
  width: 184px;
  height: 53px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: #6C5DD3;
  color: #fff;
}
.setting_close button:first-child{
  background: inherit;
  border: 2px solid #6C5DD3;
  color: #6C5DD3;
}
</style>