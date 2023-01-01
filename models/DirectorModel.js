const mongoose = require("mongoose");
const { Schema } = mongoose;

const DirectorSchema = new Schema({
	lastName: { type: String, required: true },
	firstName: { type: String, required: true },
	dateOfBirth: { type: String, required: true },
	dateOfDeath: { type: String, required: false },
});

module.exports = mongoose.model("directors", DirectorSchema);
