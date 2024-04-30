const express = require("express");
const {isAuthenticated} = require("../middlewares/auth.middleware");
const authRoutes=require('../routes/auth.routes')

const createRouter = () => {
  const router = express.Router();

  // Public routes
router.use("/", authRoutes);

  // Protected routes
//   router.get("/profile", isAuthenticated, (req, res) => {
//     res.json({
//       status: "ok",
//       message: "You are authenticated",
//       user: req.user,
//     });
//   });

  return router;
};

module.exports = createRouter;
