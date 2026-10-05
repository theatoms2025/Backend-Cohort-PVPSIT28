const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productsRoutes = require("./routes/product");

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "working"
    });
});

app.use("/products", productsRoutes)

app.use((req, res) => {
    res.status(404).json({
        message: "Page not found"
    })
})

app.listen(PORT, () => {
    connectDB();
    console.log("server listening on " + PORT);
})
// trainbit124_db_user
// hbdHLumiUWUv3O6R