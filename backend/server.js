const db = require('./db/db'); // <- import MySQL connection

app.get('/products', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM products");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Database error", details: error });
    }
});
