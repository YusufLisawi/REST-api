const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovieSchema = new Schema({
	title: { type: String, required: true },
	year: { type: String, required: true },
	runtime: { type: String, required: true },
	genres: [{ type: String, required: true }],
	director: { type: String, required: true },
	actors: { type: String, required: true },
	plot: { type: String, required: true },
	posterUrl: { type: String, required: true },
});

module.exports = mongoose.model("movies", MovieSchema);
