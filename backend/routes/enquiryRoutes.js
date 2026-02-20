const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    const { email, name } = req.body;
    await sendEmail(email, name);

    res.status(201).json({ message: "saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving" });
  }
});

router.get("/", async (req, res) => {
  try {
    const enquiries = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
});

module.exports = router;
