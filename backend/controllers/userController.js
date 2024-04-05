const User = require("../models/User"); // Assuming the User model is in a file named userModel.js
const bcrypt = require("bcrypt");
const generateKeys = require("../utils/generateKeys");

const registerController = async (req, res) => {
	try {
		const {
			firstName,
			//profileImage,
			lastName,
			authorityLevel,
			aadhaarNumber,
			armyName,
			armyRegistrationNumber,
			dateOfBirth,
			//idCardUpload,
			gender,
			phoneNumber,
			nationality,
			educationalQualifications,
			message,
			password,
		} = req.body;

		const existingUser = await User.findOne({ aadhaarNumber });
		if (existingUser) {
			return res
				.status(400)
				.json({ message: "User with this Aadhaar number already exists" });
		}

		const { publicKey, privateKey } = generateKeys();

		const saltRounds = 12;
		const salt = await bcrypt.genSalt(saltRounds);

		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			firstName,
			//profileImage,
			lastName,
			authorityLevel,
			aadhaarNumber,
			privateKey,
			publicKey,
			armyName,
			armyRegistrationNumber,
			dateOfBirth,
			//idCardUpload,
			gender,
			phoneNumber,
			nationality,
			educationalQualifications,
			message,
			password: hashedPassword,
		});

		await newUser.save();
		res
			.status(201)
			.json({ message: "User registered successfully", user: newUser });
	} catch (error) {
		console.error("Error registering user:", error);
		res.status(500).json({ message: "Failed to register user" });
	}
};

const loginController = async (req, res) => {
	try {
		const { aadhaarNumber, password } = req.body;

		const user = await User.findOne({ aadhaarNumber });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Invalid password" });
		}

		const userData = {
			firstName: user.firstName,
			lastName: user.lastName,
			authorityLevel: user.authorityLevel,
			publicKey: user.publicKey,
			privateKey: user.privateKey,
			armyName: user.armyName,
			gender: user.gender,
			phoneNumber: user.phoneNumber,
			nationality: user.nationality,
		};

		res.status(200).json({ message: "Login successful", user: userData });
	} catch (error) {
		console.error("Error logging in user:", error);
		res.status(500).json({ message: "Failed to login user" });
	}
};

const getUserById = async (req,res) => {
    try{
        const id = req.params.id;

		const user = await User.findById(id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
        res.status(200).json({message: "User found", user: user});
    }catch(error){
        console.error("Error finding user:", error);
		res.status(500).json({ message: "Failed to find user" });
    }
}


module.exports = {registerController ,loginController, getUserById};
