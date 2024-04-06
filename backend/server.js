const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const {registerController, loginController, getUserById} = require("./controllers/userController");
const { getAllWeaponController, createWeaponController, getWeaponsByID } = require("./controllers/weaponsController");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cors());

// Start the server

app.post("/register", registerController);
app.post('/login',loginController);
app.get('/user/:id',getUserById);
app.get('/weapons',getAllWeaponController);
app.post('/weapon',createWeaponController);
app.post('/:id',getWeaponsByID);

//socket.io controller

const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log("user connected", socket.id);

	socket.on("join_room", (room) => {
		socket.join(room);
		console.log(`User ${socket.id} joined ${room}`);
	});

	socket.on("send_message", (data) => {
		socket.to(data.room).emit("receive_message", data);
	});

	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
	});
});



mongoose.connect(process.env.MONGO_URI, {}).then(
	app.listen(process.env.PORT, () => {
		console.log(`Server is running on port ${process.env.PORT}`);
	})
	
).then(httpServer.listen(process.env.SOCKET_PORT));
