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
        try {
            socket.join(room);
            console.log(`User ${socket.id} joined ${room}`);
        } catch (error) {
            console.error("Error joining room:", error);
        }
    });

    socket.on("send_message", (data) => {
        try {
            console.log(data);
            io.to(data.room).emit("receive_message", data);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    });

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
    });
});

contactsId = ["66106b11c1d08c27244d08c6","66106b11c1d08c27244d08ca","66106b11c1d08c27244d08c8"]
const addContacts = async (userId, contactIds) => {
	try {
	  // Find the user by ID
	  const user = await User.findById(userId);
	  if (!user) {
		throw new Error('User not found');
	  }
  
	  // Add the contact IDs to the user's contacts array
	  user.contacts.push(...contactIds);
  
	  // Save the updated user document
	  await user.save();
  
	  return user;
	} catch (error) {
	  console.error('Error adding contacts:', error);
	  throw error;
	}
  };


mongoose.connect(process.env.MONGO_URI, {}).then(
	app.listen(process.env.PORT, () => {
		console.log(`Server is running on port ${process.env.PORT}`);
		
	})
	
).then(httpServer.listen(process.env.SOCKET_PORT))
