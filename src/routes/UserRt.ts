import express from "express";
import { IndexHome } from "../controllers/UserCon";

export const userRt: express.Router = express.Router();
    userRt.get("/", IndexHome);



    