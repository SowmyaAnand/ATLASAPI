const {createUser,getusersList,validateUser, validateUserreadposts,updatecounts,updateInnovationcounts,updateitcounts,updatepeoplecounts,updatetrainingcounts,updatecurrentcounts,updateaccoladescounts} = require("./user.controller");
const router =require("express").Router();
router.post("/",createUser);
router.get("/",getusersList);
router.post("/validate",validateUser);
router.post("/validateread", validateUserreadposts);
router.post("/update",updatecounts);
router.post("/updateinnovation",updateInnovationcounts);
router.post("/updateit",updateitcounts);
router.post("/updatepeople",updatepeoplecounts);
router.post("/updatetraining",updatetrainingcounts);
router.post("/updatecurrent",updatecurrentcounts);
router.post("/updateaccolades",updateaccoladescounts);
module.exports=router;