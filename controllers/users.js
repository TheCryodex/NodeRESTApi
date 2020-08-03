const User = require('../models/user');
const Car = require('../models/car');

module.exports = {
  /*  Using Callbacks Finding Users
  index : (req, res, next)=>{

    User.find({}, (err, users)=>{
      if (err){
        next(err);
      }
      res.status(200).json(users);
    });

  },
  */

  /* Callback Saving Method
  newUser : (req, res, next)=>{
    const newUser = new User(req.body);
    newUser.save((err, user)=>{
      res.status(201).json(user);
    });
  }
  */

  /* Using Promises Finding User
    index: (req, res,next)=> {
      User.find({})
        .then(users=>{
          res.status(200).json(users);
        })
        .catch(err =>{
          next(err);
        });
    },
    */

  /*
    //Promises Saving Method
    newUser  : (req, res, next)=>{
      const newUser = new User(req.body);
      newUser.save()
        .then(user =>{
          res.status(201).json(user);
        })
        .catch(err =>{
          next(err);
        })
    }
  */

  index: async (req, res, next) => {

    const users = await User.find({});
    res.status(200).json(users);

  },

  newUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(201).json(user);

  },
  getUser: async (req, res, next)=>{
    //const userId = req.params.userId;
    //Above line can also be written as :
    const {userId} = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);

  },
  replaceUser : async (req, res, next)=>{
    //req.body must contain all the fields
    const {userId} = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(201).json({success: true});
  },
  updateUser : async (req, res, next) =>{
    const {userId} = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(userId, newUser);
    res.status(201).json({success: true});
  },

  getUserCars: async (req, res, next)=>{
    const {userId} = req.params;
    const user = await User.findById(userId).populate('cars');
    console.log('user\'s cars', user.cars);
    res.status(200).json(user.cars);
  },
  newUserCar: async (req, res, next)=>{
    const {userId} = req.params;
    const newCar = new Car(req.body);

    const user = await User.findById(userId);
    //Assing user as a cars seller
    newCar.seller = user;
    await newCar.save();
    //Add car to the user's selling array 'cars'
    user.cars.push(newCar);
    //Save the user

    await user.save();

    res.status(201).json(newCar);

  }
};
