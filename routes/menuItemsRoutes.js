const express = require("express");
const router = express.Router();
const MenuItems = require("./../models/MenuItems");

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newMenu = new MenuItems(data); // Creating a new person object
    const response = await newMenu.save(); // Saving the person object to the database

    console.log("Data saved:", response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Server Error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await MenuItems.find();
    console.log("data fetch");
    res.status(200).json(data);
  } catch (e) {
    console.log(err);
    res.status(500).json({ err: "Server Error" });
  }
});
router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    console.log("Requested work type:", taste); // Log the received work type

    if (taste === "sour" || taste === "spicy" || taste === "sweet") {
      const response = await MenuItems.find({ work: taste });
      console.log("Response fetched:", response); // Log the fetched response
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Server Error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const updatedMenu = req.body;
    const response = await MenuItems.findByIdAndUpdate(menuId, updatedMenu, {
      new: true,
      runValidator: true,
    });
    if (!response) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    console.log("response fetch");
    res.status(200).json(response);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Server Error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const deletedmenu = await MenuItems.findByIdAndDelete(menuId);
    if (!deletedmenu) {
      return res.status(404).json({ error: "menuItem not found" });
    }
    console.log("Person deleted");
    res.status(200).json({ message: "menuItem deleted" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});
module.exports = router;
 