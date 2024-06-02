import express from "express";
import UsersController from "../controllers/usersController.js";

const UserRouter = express.Router();

UserRouter.get('/', UsersController.getUsers);

UserRouter.get("/:id", UsersController.getUserById);

UserRouter.post('/', UsersController.addUser);

UserRouter.put("/:id", UsersController.updateUser);

UserRouter.delete("/:id", UsersController.deleteUser);

UserRouter.get("/:id/links", UsersController.getLinks)

export default UserRouter;