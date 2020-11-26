const {createPost, deleteUser,postList,postcounts} = require("./Post.controller");
const multer = require("multer");
const path = require("path");
const router =require("express").Router();

//storage engine
const storage =multer.diskStorage({
    destination:'./public/upload',
    filename:function(req,file,cb){ 
     return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  
    }
  })
  const upload =multer({
    storage:storage
  })

router.post("/addpost",upload.single('attachment'),createPost);
router.delete("/delete", deleteUser);
router.get("/inboxPosts",postList);
router.get("/messagecount",postcounts);
module.exports=router;