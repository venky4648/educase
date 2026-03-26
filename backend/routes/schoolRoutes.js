import express from 'express';
const router = express.Router();

import { addSchool, listOfSchools,getAllSchools } from "../controllers/schoolController.js";

router.post("/add", addSchool);
router.get("/list", listOfSchools);
router.get("/all", getAllSchools);


export default router;
