const {
  createUser,
  getUsersById,
  getUsers,
  login,
} = require("./user_controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUsersById);
router.post("/login", login);
module.exports = router;
