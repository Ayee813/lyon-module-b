<script setup lang="ts">
import { useCompanies } from '../../composables/useCompany';
import {ref} from 'vue'
const {companies} = useCompanies()

const showForm = ref(false)

const openFrom = () => showForm.value = true;
const closeFrom = () => showForm.value = false;

</script>

<template>
    <div class="container">
        <header>
            <h1>Company</h1>
        </header>
        <div class="wrapper">
            <div class="title">
                <h2>Company List</h2>
                <button class="create" @click="openFrom" :show="showForm">+ New Company</button>
            </div>
        </div>
        <table border="1">
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Company address</th>
                    <th>Company contact</th>
                    <th>Owoner</th>
                    <th>Primary contact</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(company, indx) in companies" :key="indx">
                    <th>{{ company.companyName }}</th>
                    <th>{{ company.companyAddress }}</th>
                    <th>{{ company.companyTelephone }}<br>{{ company.companyEmail }}</th>
                    <th>
                        {{ company.owner.name }}<br>
                        {{ company.owner.mobileNumber }}<br>
                        {{ company.owner.email }}
                    </th>
                    <th>
                        {{ company.contact.name }}<br>
                        {{ company.contact.mobileNumber }}<br>
                        {{ company.contact.email }}
                    </th>
                    <th class="option"><button class="edit">Edit</button><button>Enable</button></th>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
}

h2,
h1 {
    color: #1E1E1E;
}

header {
    padding: 20px;
}

.wrapper {
    width: 100%;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
}

.create {
    color: white;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead tr th {
    padding: 15px 0;
    text-align: start;
    font-size: 1.3rem;
        padding-left: 10px;
}

tbody tr th {
    text-align: start;
    font-weight: 400;
}

th {
    border-left: hidden;
    border-right: hidden;
    padding-left: 10px;
}
.option{
    width: 250px;
    height: auto;
}
.option button{
    margin: 0px 10px;
    color: white;
}
.edit{
    background-color: gray;
}
</style>