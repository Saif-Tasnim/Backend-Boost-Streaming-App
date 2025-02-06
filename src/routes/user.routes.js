import { Router } from "express";
import {
  loginUser,
  logOutUser,
  registerUser,
  refreshAccessToken,
  getCurrentUser,
  changePassword,
  updateAccountDetails,
  updateUserAvatar,
  updateCoverImage,
  getUserProfile,
  getWatchedHistory,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

router.route("/refresh-token").post(refreshAccessToken);

// secure routes
router.route("/get-user").get(verifyJWT, getCurrentUser);
router.route("/logout").post(verifyJWT, logOutUser);
router.route("/change-password").patch(verifyJWT, changePassword);
router.route("/update-details").patch(verifyJWT, updateAccountDetails);
router
  .route("/update-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/update-cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateCoverImage);
router.route("/get-user-profile/:username").get(verifyJWT, getUserProfile);
router.route("/history").get(verifyJWT, getWatchedHistory);



export { router };
