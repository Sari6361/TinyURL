import express from "express";
import RedirectController from "../controllers/redirectController.js";

const RedirectRouter = express.Router();

RedirectRouter.get("/:url", RedirectController.redirect);

export default RedirectRouter;