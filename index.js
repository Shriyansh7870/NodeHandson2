const express = require("express");
const app = express();
const port = 3000;


const contactRoutes = require("./Route/contact");
const technologyRoutes = require("./Route/Technology");
const foodRoutes = require("./Route/Food");
const expressRoutes = require("./Route/express");


app.use("/api/main", contactRoutes);
app.use("/api/main", technologyRoutes);
app.use("/api/main", foodRoutes);
app.use("/api/main", expressRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
