const nodemailer = require("nodemailer");

const sendEmail = async (email, name) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for enquiry",
    text: `Hello ${name}, Thank you for contacting us.`,
  });
};

module.exports = sendEmail;
