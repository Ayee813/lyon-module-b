const companies = require('./dataBase/companies')
const { json } = require('body-parser');
const express = require('express')
const cors = require('cors')

const app = express();

app.use(json());
app.use(cors());
const port = 3001

const users = [
    { name: "Jenny", password: "1234", role: "admin" },
    { name: "ayee", password: "1234", role: "staff" },
    { name: "kabai", password: "1234", role: "staff" }
] 


//for login
app.post('/login', (req, res) => {
    const { name, password } = req.body

    const user = users.find(u => u.name === name && u.password === password)

    if (!user) {
        return res.status(403).json({ msg: "username or password invalid" })
    }

    if (user.role === "admin") {
        return res.status(200).json({ msg: "welcome admin", role: 'admin', redirect: "/admindashboard" })
    } else {
        return res.status(200).json({ msg: "welcome staff", role: 'staff', redirect: "/preview" })
    }
})

app.get('/forbidden', (req, res) => {
    res.status(403).json({ msg: "You do not have permission to access this resource." });
});



app.get('/user', (req, res) => {
    res.status(200).json(users)
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/', (req, res) => {
    res.send('Hello world...')
})

app.get('/companies', (req, res) => {
    res.json(companies)
})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})