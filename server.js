require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const ActorRoute = require("./routes/actor");
const DirectorRoute = require("./routes/director");
const MovieRoute = require("./routes/movie");
var bodyParser = require("body-parser");

const app = express();
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(express.json());

const port = process.env.PORT;
const url = process.env.URL_MONGOOSE;
const dbname = process.env.DBNAME;

app.use("/actor", ActorRoute);
app.use("/director", DirectorRoute);
app.use("/movie", MovieRoute);

mongoose
	.connect(`${url}/${dbname}`, { useNewUrlParser: true })
	.then(() => console.log("Connection established " + url + "/" + dbname))
	.catch((error) => console.log("Failed to connect to database ..."));

app.listen(port, (err) => {
	if (err) console.log("Failed to start server ...");
	else console.log("Server started at port " + port);
});
