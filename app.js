const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const sgMail = require("@sendgrid/mail");
const { SEND_GRID } = process.env;
sgMail.setApiKey(SEND_GRID);

const email = {
  to: "tirowe5415@picvw.com",
  from: "andrii.stp@gmail.com",
  subject: "Test email",
  text: "This is a test email",
  html: "<b>This is a test email</b>",
};

sgMail
  .send(email)
  .then(() => console.log("Email send succesfully"))
  .catch((err) => console.log(err.message));

const authRouter = require("./routes/api/auth.js");
const contactsRouter = require("./routes/api/contacts.js");
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/contacts", contactsRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
