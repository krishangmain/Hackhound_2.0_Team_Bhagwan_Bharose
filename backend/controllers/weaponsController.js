const Weapon = require('../models/Weapon');

const createWeaponController = async (req, res) => {
  try {
    const { name, serialNumber, quantity, weaponType, manufacturer, countryOfOrigin } = req.body;

    const newWeapon = new Weapon({
      name,
      serialNumber,
      quantity,
      weaponType,
      manufacturer,
      countryOfOrigin,
    });

    await newWeapon.save();
    res.status(201).json({ message: 'Weapon created successfully', weapon: newWeapon });
  } catch (error) {
    console.error('Error creating weapon:', error);
    res.status(500).json({ message: 'Failed to create weapon' });
  }
};

const getAllWeaponController = async (req,res) => {
    try{
        const weapons = await Weapon.find({});
        res.status(200).json({message: "weapons Found", weapons: weapons});
    }catch(error){
        console.error('Error finding weapons:', error);
        res.status(500).json({ message: 'Failed to find weapons' });
    }
}

const getWeaponsByID = async (req,res) => {
    try{
        const id = req.params.id;
        const weapon = await Weapon.findById(id)
        if(!weapon){
            return res.status(404).json({message:"Weapon with id not found"});
        }
        res.status(200).json({message: "Weapon found", weapon: weapon});
    }catch(error){
        console.error('Error finding weapon:', error);
        res.status(500).json({ message: 'Failed to find weapon' });
    }
}

module.exports = {createWeaponController, getAllWeaponController, getWeaponsByID};
