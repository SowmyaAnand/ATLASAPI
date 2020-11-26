const {Addlikes,likescounts} = require("./Likes.controller");
const router =require("express").Router();
router.post("/addlike",Addlikes);
router.post("/likecount",likescounts);


module.exports=router;