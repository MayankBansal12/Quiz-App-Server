import { Router } from "express";
const router=Router();
import * as controller from "../controllers/controller.js";

router.route("/question").get(controller.getQuestions).post(controller.postQuestions).delete(controller.dropQuestions);
router.route("/result").get(controller.getResult).post(controller.storeResult).delete(controller.dropResult);
export default router;
