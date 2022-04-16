import express from "express";
import handler from "./controllers/hnadler.mjs";
export const router=express.Router();

router.get('/',handler.home)