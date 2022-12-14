const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});

// metodo para pasar a JSON y borrar contraseña
UserSchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

// metodo que compara dos contraseñas
UserSchema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password);
};

// hook para cada vex que se guarde un documento de mongoose
UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next;
});

module.exports = mongoose.model("user", UserSchema);
