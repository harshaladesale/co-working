const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.post("/", async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    const newReview = new Review({
      name,
      rating,
      comment,
    });

    await newReview.save();

    res.status(201).json({
      message: "Review added successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error adding review" });
  }
});

/* 🔹 Get All Reviews (Frontend) */
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }
});

module.exports = router;
