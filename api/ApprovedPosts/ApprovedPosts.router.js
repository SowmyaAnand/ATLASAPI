const {createApprovedPost,ApprovedpostList,Filter,AddLikes,CountCategory} = require("./ApprovedPosts.controller");

const multer = require("multer");
const path = require("path");
const router =require("express").Router();

//storage engine
const storage =multer.diskStorage({
    destination:'./Approved/upload',
    filename:function(req,file,cb){
     return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  
    }
  })
  const upload =multer({
    storage:storage
  })

router.post("/approvepost",upload.single('attachment'),createApprovedPost);
router.post("/acceptedposts",ApprovedpostList);
router.post("/filter",Filter);
router.get("/categorycount",CountCategory);
module.exports=router;