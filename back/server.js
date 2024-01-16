const express = require("express");
const urlRoutes = require("./routes/url");
const app = express();
const PORT = 3000;

app.use("/apiurl", urlRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
