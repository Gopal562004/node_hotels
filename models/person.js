const { uniqueId } = require("lodash");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});
personSchema.method.comparePassword = async (CandidatePassword) => {
  try {
    const isMatch=await bcrypt.compare(CandidatePassword,this.password);
    return isMatch;
  } catch (e) {
    throw e;
  }
};
personSchema.pre("save", async function (next){
  const person = this;
  if (!person.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(person.password, salt);
    person.password = hashedPassword;
    next();
  } catch (e) {
    return next(e);
  }
});

///create model
const person = mongoose.model("person", personSchema);
module.exports = person;
