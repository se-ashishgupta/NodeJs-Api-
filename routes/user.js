import express from "express";
import {
  deleteUser,
  getAllUsers,
  getuserDetails,
  register,
  specialFunc,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/register", register);
router.get("/userid/special", specialFunc);

router
  .route("/userid/:id")
  .get(getuserDetails)
  .put(updateUser)
  .delete(deleteUser);

//OR
// router.get("/userid/:id", getuserDetails);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);

export default router;
