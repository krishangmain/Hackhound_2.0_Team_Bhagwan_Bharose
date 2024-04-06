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
			contacts:[]
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
		const { aadhaar, password } = req.body;

		const user = await User.findOne({ aadhaarNumber:aadhaar });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Invalid password" });
		}

		

		res.status(200).json({ message: "Login successful", user: user });
	} catch (error) {
		console.error("Error logging in user:", error);
		res.status(500).json({ message: "Failed to login user" });
	}
};

const getUserById = async (req,res) => {
    try{
        const id = req.params.id;

		const user = await User.findById(id);
		console.log(user.contacts)
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
        res.status(200).json({message: "User found", user: user});
    }catch(error){
        console.error("Error finding user:", error);
		res.status(500).json({ message: "Failed to find user" });
    }
}
const userData =  [
    {
        "firstName": "John",
        "lastName": "Smith",
        "authorityLevel": "Sergeant",
        "aadhaarNumber": "123456789012",
        "armyName": "Army",
        "armyRegistrationNumber": "AB123CD4",
        "dateOfBirth": "1985-01-15T10:00:00.000Z",
        "gender": "Male",
        "phoneNumber": "5551234567",
        "nationality": "Indian",
        "profilePic": "https://res.cloudinary.com/dnksvcscz/image/upload/v1712344242/hackhound%202.0/john_zpbp5r.jpg",
		"password": "abc@123"
    },
    {
        "firstName": "Emily",
        "lastName": "Johnson",
        "authorityLevel": "Lieutenant",
        "aadhaarNumber": "987654321098",
        "armyName": "Air Force",
        "armyRegistrationNumber": "EF987GH6",
        "dateOfBirth": "1990-03-28T10:00:00.000Z",
        "gender": "Female",
        "phoneNumber": "5559876543",
        "nationality": "Indian",
        "profilePic": "https://res.cloudinary.com/dnksvcscz/image/upload/v1712344240/hackhound%202.0/emily_k6jfgd.jpg",
		"password": "123456"
    },
    {
        "firstName": "David",
        "lastName": "Martinez",
        "authorityLevel": "Captain",
        "aadhaarNumber": "567890123456",
        "armyName": "Navy",
        "armyRegistrationNumber": "MN345OP8",
        "dateOfBirth": "1983-11-10T10:00:00.000Z",
        "gender": "Male",
        "phoneNumber": "5553456789",
        "nationality": "Indian",
        "profilePic": "https://res.cloudinary.com/dnksvcscz/image/upload/v1712344241/hackhound%202.0/david_ohvcyc.jpg",
		"password": "abcdef"
    },
    {
        "firstName": "Samantha",
        "lastName": "Brown",
        "authorityLevel": "Major",
        "aadhaarNumber": "234567890123",
        "armyName": "Army",
        "armyRegistrationNumber": "PQ678RS9",
        "dateOfBirth": "1978-07-05T10:00:00.000Z",
        "gender": "Female",
        "phoneNumber": "5557890123",
        "nationality": "Indian",
        "profilePic": "https://res.cloudinary.com/dnksvcscz/image/upload/v1712344241/hackhound%202.0/samantha_zlybgy.jpg",
		"password": "wasdef"
    },
    {
        "firstName": "Michael",
        "lastName": "Nguyen",
        "authorityLevel": "Colonel",
        "aadhaarNumber": "345678901234",
        "armyName": "Air Force",
        "armyRegistrationNumber": "UV456WX7",
        "dateOfBirth": "1980-09-20T10:00:00.000Z",
        "gender": "Male",
        "phoneNumber": "5552345678",
        "nationality": "Indian",
        "profilePic": "https://res.cloudinary.com/dnksvcscz/image/upload/v1712344243/hackhound%202.0/michael_mg54ix.jpg",
		"password": "qwerty"
    }
]



  

const addUsers = async () => {
	await Promise.all(
	  userData.map(async (u) => {
		const { publicKey, privateKey } = await generateKeys();
  
		const saltRounds = 12;
		const salt = await bcrypt.genSalt(saltRounds);
  
		const hashedPassword = await bcrypt.hash(u.password, salt);
  
		const newUser = new User({
		  firstName: u.firstName,
		  profileImage: u.profilePic,
		  lastName: u.lastName,
		  authorityLevel: u.authorityLevel,
		  aadhaarNumber: u.aadhaarNumber,
		  privateKey,
		  publicKey,
		  armyName: u.armyName,
		  armyRegistrationNumber: u.armyRegistrationNumber,
		  dateOfBirth: u.dateOfBirth,
		  //idCardUpload,
		  gender: u.gender,
		  phoneNumber: u.phoneNumber,
		  nationality: u.nationality,
		  password: hashedPassword,
		  contacts: [],
		});
  
		await newUser.save();
	  })
	);
  };
  




module.exports = {registerController ,loginController, getUserById};
