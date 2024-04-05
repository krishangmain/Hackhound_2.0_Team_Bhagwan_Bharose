const crypto = require("crypto");

const generateKeys = () => {
	console.log("generating");
	const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
		modulusLength: 2048, // key length
		publicKeyEncoding: {
			type: "spki", // Public Key Infrastructure
			format: "pem", // Privacy-Enhanced Mail
		},
		privateKeyEncoding: {
			type: "pkcs8", // Public-Key Cryptography Standards #8
			format: "pem", // Privacy-Enhanced Mail
		},
	});
	return {publicKey: publicKey,privateKey: privateKey};
};

module.exports = generateKeys;
