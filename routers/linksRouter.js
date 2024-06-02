import express from "express";
import LinksController from "../controllers/linksController.js";

const LinkRouter = express.Router();

LinkRouter.get('/', LinksController.getLinks);

LinkRouter.get("/:id", LinksController.getLinkById);

LinkRouter.post('/:userId', LinksController.addLink);

LinkRouter.put("/:id", LinksController.updateLink);

LinkRouter.delete("/:userId/:id", LinksController.deleteLink);

LinkRouter.post('/:id/target', LinksController.addTarget);

LinkRouter.get('/:id/target', LinksController.getTargets);

export default LinkRouter;