import userModel from "../models/userModel.js";
import UserSchema from "../models/userModel.js";

const UsersController = {

    getUsers: async (req, res) => {
        console.log("get tasks");
        try {
            const users = await userModel.find();
            res.json({ users });
        }
        catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id);
            if (!user)
                res.status(404).json({ message: "User Not Found!" });
            res.json(user);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    addUser: async (req, res) => {
        console.log("add user");
        const { name, email, password } = req.body;
        try {
            const newUser = await userModel.create({ name, email, password });
            console.log("new user", newUser);
            res.status(201).json(newUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    updateUser: async (req, res) => {
        const { id } = req.params;
        try {
            const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.json(updatedUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;
        console.log("del");
        try {
            const deleted = await userModel.findByIdAndDelete(id);
            if (!deleted)
                res.status(404).json({ message: "Id Not Found!" });
            console.log("user was deleted");
            res.json(deleted);
        } catch (e) {
            console.log("failed deleted");

            res.status(400).json({ message: e.message });
        }
    },

    getLinks: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await userModel.findById(id);
            const links = user.links;
            res.json(links);
        }
        catch (e) {
            res.status(400).json({ messege: e.message });
        }

    }

}

export default UsersController;