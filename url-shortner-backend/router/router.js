import { addData ,getData,getUrl} from "../controllers/controller.js";
import express from 'express'
const router=express.Router();
router.post("/addUrl" ,addData);
router.get("/:shortCode", getUrl);
router.get('/',getData);
export default router;
