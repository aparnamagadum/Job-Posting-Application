import express from 'express'
import { addPosting ,getPosting ,deletePost ,updatePost } from "../controller/controller.js";
const router=express.Router();
router.get("/" ,getPosting)
router.post("/addJobs" , addPosting );
router.put("/updateJob/:id" , updatePost);
router.delete("/deleteJob/:id" , deletePost);
export default router;
