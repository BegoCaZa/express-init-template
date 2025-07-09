const mongoose = require("mongoose");

console.log("Conectado a BD");
mongoose.connect(process.env.MONGO_URL);
