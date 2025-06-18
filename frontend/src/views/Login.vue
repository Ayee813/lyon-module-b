<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import axios from "axios"

const data = reactive({
    name: "",
    password: "",
})

const api = "http://localhost:3001/login"

const errorMsg = ref('')

const postData = async () => {
    errorMsg.value = '';
    try {
        const response = await axios.post(api, {
            name: data.name,
            password: data.password,
        })

        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userRole', response.data.role)
        console.log(response.data);


        if (response.data.redirect) {
            window.location.replace(response.data.redirect)
        }

    } catch (error) {
        if (error.response?.data?.msg) {
            errorMsg.value = error.response.data.msg
        } else {
            errorMsg.value = "Login failed. Please try again."
        }
    }
}

watch(() => [data.name, data.password], ([name,password]) => {
    if(name || password){
        errorMsg.value = ''
    }
})
</script>

<template>
    <form @submit.prevent="postData">
        <h1>login page</h1>
        <fieldset>
            <label for="username">Uesr name</label>
            <input type="text"
            placeholder="Enter username..."
             name="username"
              id="username" 
              v-model="data.name" 
              :class="{'input-error':errorMsg}">
            <label for="password">Password</label>
            <input type="password"
            placeholder="Enter password..."
            name="password" 
            id="password" 
            v-model="data.password"
            :class="{'input-error': errorMsg}">
            <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
            <button type="submit">Login</button>
        </fieldset>
    </form>
</template>



<style scoped>
form{
    height: 100vh;
    width: 100%;
    display: grid;
    place-content: center;
}
h1{
    margin-bottom: 30px;
}
fieldset {
    height: auto;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 50px;
    border-radius: 15px;
}

input {
    padding: 10px;
}

button {
    margin-top: 15px;
    color: white;
}
.error-msg{
    color: red;
}
.input-error{
    border: 2px solid red;
    border-radius: 3px;
}
</style>