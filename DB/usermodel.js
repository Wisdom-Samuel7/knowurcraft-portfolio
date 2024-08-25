const mongoose = require("mongoose");
const { Schema, model } = mongoose;
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const Usr = Schema(
  {
   
    email: {
      type: String,
      required: true,
    },
  
  },
  { timestamps: true }
);

const kucSubscribers = model("kucSubscribers", Usr);
module.exports = kucSubscribers;
 