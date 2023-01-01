const express = require("express");
const routes = express.Router();
const DirectorModel = require("../models/DirectorModel");

// Get request to get all directors
routes.get("/", async (req, res) => {
	const directors = await DirectorModel.find();
	if (directors.length === 0)
		return res.status(404).json({ message: "No directors found" });
	res.json(directors);
});
//Get request to get a director by lastname
routes.get("/:lastname", async (req, res) => {
	const ln = req.params.lastname;
	const director = await DirectorModel.findOne({ lastName: ln });
	if (director.length === 0)
		return res
			.status(404)
			.json({ message: `No director found with the name ${ln}` });
	res.json(director);
});
//Post request to add a director
routes.post("/", async (req, res) => {
	const { lastName, firstName, dateOfBirth, dateOfDeath } = req.body;
	const director = new DirectorModel({
		lastName,
		firstName,
		dateOfBirth,
		dateOfDeath,
	});
	console.log(req.body);
	try {
		await director.save();
		res.status(201).json(director);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
//PUT request to update a director
routes.put("/:lastname", (req, res) => {
	const ln = req.params.lastname;
	const { lastName, firstName, dateOfBirth, dateOfDeath } = req.body;
	const director = DirectorModel.updateOne(
		{ lastName: ln },
		{ lastName, firstName, dateOfBirth, dateOfDeath },
		(err, docs) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Updated Docs : ", docs);
			}
		}
	);
});
//DELETE request to delete a director
routes.delete("/:lastname", (req, res) => {
	const ln = req.params.lastname;
	const director = DirectorModel.deleteOne({ lastName: ln }, (err, docs) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Deleted Docs : ", docs);
		}
	});
});

module.exports = routes;
