<script lang="ts" setup>

import router from '../router'
import Company from '../components/company/Company.vue'
import SideMenu from '../components/layout/SideMenu.vue'
import Edit from '../components/company/Edit.vue'

const logOut = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userRole')
    router.replace('/')
}

</script>
<template>
    <div>
        <Edit />
        <SideMenu />
        <!-- <Company /> -->
    </div>
</template>


<style scoped>
div {
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
}
</style>