const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const { MONGODB, PORT } = require("./config")
const productRoutes = require("./routes/productsRoutes")
const userRoutes = require("./routes/userRoutes")

app.use(cors());
app.use(express.json())
app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)


mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to mongodb');
        return app.listen(PORT);
    })
    .then(() => console.log('server running at 3300'))
    .catch(err => console.log(err.message));