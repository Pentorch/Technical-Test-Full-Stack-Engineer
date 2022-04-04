const express = require("express");

const router = express.Router();

const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");
const { login, register, checkAuth } = require("../controllers/auth");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getProfile,
} = require("../controllers/user");
const {
  getLists,
  getList,
  updateList,
  deleteList,
  addList,
} = require("../controllers/list");

router.post("/login", login);
router.post("/register", register);

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user", auth, uploadFile("image"), updateUser);
router.get("/profile", auth, getProfile);
router.delete("/user/:id", deleteUser);
router.get("/check-auth", auth, checkAuth);

router.post("/list", addList);
router.get("/lists", getLists);
router.get("/list/:id", getList);
router.patch("/list/:id", updateList);
router.delete("/list/:id", deleteList);

module.exports = router;
