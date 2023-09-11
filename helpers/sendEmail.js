const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SEND_GRID } = process.env;
sgMail.setApiKey(SEND_GRID);

const sendEmail = async (data) => {
  const email = { ...data, from: "andrii.stp@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;

// const email = {
//   to: "tirowe5415@picvw.com",
//   from: "andrii.stp@gmail.com",
//   subject: "Test email",
//   text: "This is a test email",
//   html: "<b>This is a test email</b>",
// };

// sgMail
//   .send(email)
//   .then(() => console.log("Email send succesfully"))
//   .catch((err) => console.log(err.message));
