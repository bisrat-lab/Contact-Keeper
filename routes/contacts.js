const express = require("express");

const router = express.Router();

//get all contact
//api/contacts
router.get("/", (req, res) => {
  res.send("get all contact");
});

//Add New contacts
//api/contacts
router.post("/", (req, res) => {
  res.send("Add contact  ");
});

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
