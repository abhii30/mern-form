const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); // hide the url
const connectDB = require("./config/db");
const formRoutes = require("./routes/formRoutes");

dotenv.config();
connectDB();
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/form", formRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
