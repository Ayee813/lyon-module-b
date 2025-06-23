<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  show: Boolean
})


</script>




<template>
    <div class="wrapper" v-if="show">
        <form>

f            <fieldset>
                <h1>Add New A Company</h1>
                <label for="comapanyName">company name</label>
                <input type="text" id="comapanyName">
            
                <label for="companyAddress">company address</label>
                <input type="text" id="companyAddress">
            
                <label for="companyTelephone">company telephone</label>
                <input type="number" id="companyTelephone">
            
                <label for="companyEmail">company email</label>
                <input type="email" id="companyTelephone">
            
                <h2>owner infomation</h2>
                <label for="ownerName">owner name</label>
                <input type="text" id="ownerName">
            
                <label for="ownerMobile"> owner mobile number</label>
                <input type="number" id="ownerMobile">
            
                <label for="ownerEmail">owner email</label>
                <input type="email" id="ownerEmail">
                <h2>contact information</h2>
                <label for="contactName">contact name</label>
                <input type="text" id="contactName">
            
                <label for="contactMobile">contect mobile</label>
                <input type="number" id="contactMobile">
            
                <label for="contactEmail">contact email</label>
                <input type="email" id="contactEmail">
                <div class="edit-option"><button class="cancel">cancel</button><button class="create">create</button></div>
            </fieldset>
        </form>
    </div>
</template>

<style scoped>
.wrapper {
    position: absolute;
    inset: 0;
    z-index: 9999;
    display: grid;
    place-content: center;
    backdrop-filter: blur(3px);
    background: rgba(255, 255, 255, 0.2);
}

fieldset {
    height: auto;
    width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px;
    background-color: rgb(226, 226, 226);
    gap: 5px;
}

label {}

input {
    height: 30px;
}
.edit-option{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-evenly;
    margin-top: 40px;
}
.edit-option button{
    color: white;
    width: 150px;
}
.cancel{
    background-color: red;
}
</style>