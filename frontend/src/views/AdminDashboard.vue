<script lang="ts" setup>

import router from '../router'
import Company from '../components/adminDashboard/Company.vue'
import SideMenu from '../components/adminDashboard/SideMenu.vue'

const logOut = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userRole')
    router.replace('/')
}

</script>
<template>
    <div>
        <SideMenu />
        <Company />
    </div>
</template>


<style scoped>
div{
    width: 100%;
    height: 100vh;
    display: flex;
}
</style>