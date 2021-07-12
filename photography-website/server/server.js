const express = require('express');
const app = express();
const cors = require("cors");
const port = 8000;   

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config.js"); //  connecting to mongoose
require("./routes/blog.routes")(app);
require("./routes/customer.routes")(app);
require("./routes/images.routes")(app);
app.use(cors());

app.listen(port , () => console.log("Connected to  localhost " + port ));

