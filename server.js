const mongoose = require("mongoose");
const app = require("./app");
const DB_HOST =
  "mongodb+srv://AndriiStp:wgT4BuTdxYLs1Gsy@cluster0.6lf9fue.mongodb.net/db-contacts";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => console.log(error.message));

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
