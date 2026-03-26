import express from 'express';
const router = express.Router();

import { addSchool, listOfSchools } from "../controllers/schoolController.js";

router.post("/add", addSchool);
router.get("/list", listOfSchools);

export default router;
