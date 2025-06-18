<script lang="ts" setup>

</script>

<template>
    <div class="wrapper">
        <h2>admin Dashboard</h2>
        <div class="menu">
            <a href="#"><span><img src="../../assets/icons/angle-small-right.svg" alt="" width="15px"></span>Company</a>
            <a href="#"><img src="../../assets/icons/angle-small-right.svg" alt="" width="15px">Product</a>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    background-color: #366ED8;
    width: 300px;
    color: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

h2 {
    margin: 10px 20px;
}

.menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
}

a {
    color: white;
    padding: 10px 10px;
}

a:hover {
    background-color: #064ACB;
}
</style>