const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const {registerController, loginController, getUserById} = require("./controllers/userController");
const { getAllWeaponController, createWeaponController, getWeaponsByID } = require("./controllers/weaponsController");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cors());

// Start the server

app.post("/register", registerController);
app.get('/login',loginController);
app.get('/user/:id',getUserById);
app.get('/weapons',getAllWeaponController);
app.post('/weapon',createWeaponController);
app.post('/:id',getWeaponsByID);

mongoose.connect(process.env.MONGO_URI, {}).then(
	app.listen(process.env.PORT, () => {
		console.log(`Server is running on port ${process.env.PORT}`);
	})
);
