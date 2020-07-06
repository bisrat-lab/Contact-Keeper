const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

//get all contact
//api/contacts
router.get("/", auth, async (req, res) => {
  try {
    const contact = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contact);
  } catch (err) {
    console.error(err.massage);
    res.status(500).send("Server Error B!");
  }
});

//Add New contacts
//api/contacts
router.post(
  "/",
  [auth, [body("name", "Name is Required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.massage);
      res.status(500).send("Server Error B!");
    }
  }
);

//Update Contacts
//api/contacts/:id
router.put("/:id", (req, res) => {
  res.send("Update Contacts ");
});

//Delete Contacts
//api/contacts/:id
router.delete("/:id", (req, res) => {
  res.send("Delete Contacts ");
});

module.exports = router;
