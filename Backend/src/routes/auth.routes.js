const express=require("express")
const authController=require("../controllers/auth.controller")
const authMiddleware=require("../middlewares/auth.middleware")
const authRouter=express.Router()

//POST
authRouter.post("/register",authController.registerUserController)


//POST
authRouter.post("/login",authController.loginUserController)

//GET
authRouter.post("/logout",authController.logoutUserController)

authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)
module.exports=authRouter