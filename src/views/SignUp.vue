<script>
import { ref, computed } from 'vue';

export default {
    setup() {
        const password = ref('');
        const isPasswordVisible = ref(false);

        const passwordType = computed(() => isPasswordVisible.value ? 'text' : 'password');
        const toggleIcon = computed(() => isPasswordVisible.value ? '../../public/icons/hide.svg' : '../../public/icons/eye.svg');

        const togglePasswordVisibility = () => {
            isPasswordVisible.value = !isPasswordVisible.value;
        };

        return {
            password,
            passwordType,
            togglePasswordVisibility,
            toggleIcon
        };
    }
};
</script>




<template>
    <main>
        <div class="sign_up">
            <div class="logo">
                <img src="../../public/logo/gerb.png" alt="">
                <h2>"PROTECTION WEB APPS FROM <br> WEB VIRUSES"</h2>
            </div>
            <div class="sign_up">
                <!-- остальной код -->
                <div class="login">
                    <h2>Логин</h2>
                    <div class="text_log">
                        <div class="Email">
                            <h4>Почта</h4>
                            <input type="text">
                        </div>
                        <div class="Password">
                            <h4>Пароль</h4>
                            <div class="input_password">
                                <form action="/login" method="POST" id="login-form">
                                    <div class="password-comntainer">
                                        <input :type="passwordType" v-model="password" id="password" name="password">
                                        <div @click="togglePasswordVisibility" id="toggle"
                                            :style="{ backgroundImage: `url(${toggleIcon})` }">
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <h3 style="color: #D6D6D6; font-size: 13px;">Минимум 8 символов</h3>
                        </div>
                    </div>
                    <a href="/Protect">Продолжить</a>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter", sans-serif;
}

.sign_up {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.logo {
    text-align: center;
    margin-bottom: 30px;
}

.logo img {
    width: 276.59px;
    height: 83.38px;
    margin-bottom: 11px;
}

.logo h2 {
    font-size: 23px;
    color: #fff;
}

.logo img {
    width: 100%;
}

.sign_up {
    width: 100%;
    height: 100vh;
}

.login {
    background: #343549;
    width: 444px;
    height: 430px;
    color: #fff;
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.text_log {
    width: 380px;
    height: 208px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 30px;
}

.Email input {
    width: 380px;
    height: 52px;
    background: #52536F;
    margin-top: 10px;
    border-radius: 8px;
    border: none;
    padding-left: 15px;
    color: #fff;
    font-size: 18px;
}

.Password input {
    width: 380px;
    height: 52px;
    background: #52536F;
    margin: 10px 0 6px 0;
    border-radius: 8px;
    border: none;
    padding-left: 15px;
    color: #fff;
    font-size: 18px;
}

.input_password {
    height: 52px;
    position: relative;
    margin-bottom: 15px;
}

#toggle {
    position: absolute;
    top: 40%;
    right: 10px;
    width: 30px;
    height: 30px;
    background: url(../../public/icons/eye.svg) no-repeat center center;
    background-size: cover 20px;
    cursor: pointer;
}

#toggle passwordType {
    background: url(../../public/icons/hide.svg);
    background-size: cover 20px;
}

.sign_up a {
    width: 380px;
    height: 53px;
    background: #6C5DD3;
    text-align: center;
    padding-top: 18px;
    border-radius: 12px;
    text-decoration: none;
    color: #fff;
    font-family: "Inter", sans-serif;
    font-weight: bold;
}
</style>