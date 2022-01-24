const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

//path:api/contact/test
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.send({ msg: "list contact", contacts });
  } catch (error) {
    res.send("error");
  }
});

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const contact = new Contact({
      name,
      email,
      age,
    });
    await contact.save();
    res.send({ msg: "contact added", contact });
  } catch (error) {
    res.send("impossible to add contact");
  }
});
router.delete("/:contactId", async (req, res) => {
  const { contactId } = req.params;
  try {
    await Contact.findByIdAndDelete(contactId);
    res.send("contact deleted");
  } catch (error) {
    res.statut(500).send("error");
  }
});
router.put("/:contactId", async (req, res) => {
  const { contactId } = req.params;
  const newcontact = req.body;
  try {
    await Contact.findByIdAndUpdate(contactId, { $set: { ...newcontact } });
    res.send("contact updated");
  } catch (error) {
    res.send("error");
  }
});

module.exports = router;