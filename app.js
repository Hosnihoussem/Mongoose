const express = require("express");
const connectDB = require("./config/db");
const contactRouter = require("./routes/contact");
const app = express();

const port = 5000;

connectDB();
app.use(express.json());
app.use("/api/contacts", contactRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});