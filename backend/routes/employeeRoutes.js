import express from "express";
import protectRoute from "../middleware/protectRoute.js";  // ← correct relative path
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();


router.use(protectRoute);

router
  .route("/")
  .post(createEmployee)    
  .get(getEmployees);      

router
  .route("/:id")
  .get(getEmployeeById)  
  .put(updateEmployee)     
  .delete(deleteEmployee); 
export default router;
