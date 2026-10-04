const express = require("express");
const productsRoutes = require("./routes/product");
const app = express();
const PORT = 3000;

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
    console.log("server listening on " + PORT);
})