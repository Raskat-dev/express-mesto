const userRouter = require('express').Router();
const {
  getUsers, getUser, createUser, editUser, editUserAvatar,
} = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.get('/:_id', getUser);
userRouter.post('/', createUser);
userRouter.patch('/me', editUser);
userRouter.patch('/me/avatar', editUserAvatar);

module.exports = userRouter;
