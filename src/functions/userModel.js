const mongoose = require("mongoose");

// creating a user schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, min: 7, max: 120 },
});

const User = mongoose.model("Users", userSchema);



// controller file for user creation object
exports.createUser = async (firstName, email, password, age) => {
  try {
    const user = new User({
      firstName,
      email,
      password,
      age
    })

  } catch (error) {
    throw new Error("Something went wrong in creating new user.")
  }

}




// module.exports = { User };
