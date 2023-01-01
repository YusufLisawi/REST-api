const mongoose = require("mongoose");
const { Schema } = mongoose;

const ActorSchema = new Schema({
	name: { type: String, required: true },
	rating: { type: Number, required: true },
	image_path: { type: String, required: true },
	alternative_name: { type: String, required: false },
	objectID: { type: String, required: true },
});

module.exports = mongoose.model("actors", ActorSchema);
