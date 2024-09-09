const express = require("express");
const app = express();
const categorizePackage = require("./utils/categorizePackage"); // Adjust the path as needed

app.use(express.json());

app.post("/categorize", (req, res) => {
    const { width, height, length, mass } = req.body;
    try {
        const category = categorizePackage(width, height, length, mass);
        res.json({ category });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
