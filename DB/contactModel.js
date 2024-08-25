const mongoose = require("mongoose");
const { Schema, model } = mongoose;
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const kucContact = Schema(
  {
    email: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  
  },
  { timestamps: true }
);

const kucContacts = model("kucContacts", kucContact);
module.exports = kucContacts;
 