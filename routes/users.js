const express = require('express');
//const router = express.Router();
const router = require('express-promise-router')(); //Global try catch, doesn't require manual try-catch blocks

const UsersController =  require('../controllers/users');

router.route('/')
  .get(UsersController.index)
  .post(UsersController.newUser);


//users/:id

router.route('/:userId')
  .get(UsersController.getUser)
  .put(UsersController.replaceUser)
  .patch(UsersController.updateUser);


//users/:usersid/cars

router.route('/:userId/cars')
  .get(UsersController.getUserCars)
  .post(UsersController.newUserCar);


module.exports = router;
