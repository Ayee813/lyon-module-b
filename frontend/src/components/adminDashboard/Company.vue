<template>
    <div class="container">
        <header>
            <h1>Company</h1>
        </header>
        <div class="wrapper">
            <div class="title">
                <h2>Company List</h2>
                <button class="create">+ New Company</button>
            </div>
        </div>
        <table>
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
                <tr>
                    <th>
                    Innovateurs Tech SARL
                    </th>
                    <th>123 Boulevard du Silicon 75001 Paris</th>
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
</style>