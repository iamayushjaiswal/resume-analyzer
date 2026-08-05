const express=require("express")
const authRouter=express.Router()
const authController=require("../controllers/auth.controller")
const authMiddleware=require("../middlewares/auth.middleware")


//POST /api/auth/register

authRouter.post("/register",authController.registerUserController)


//POST /api/auth/login
 
authRouter.post("/login",authController.loginUserController)


//GET /api/auth/logout

authRouter.get("/logout",authController.logoutUserController)


//GET /api/auth/get-me

authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)

module.exports=authRouter;
  