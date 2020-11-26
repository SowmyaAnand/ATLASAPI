const {createcomments,commentscounts,AllCommentsList} = require("./comments.Controller");
const router =require("express").Router();
router.post("/addcomments",createcomments);
router.post("/commentsList",AllCommentsList)
router.post("/commentscount",commentscounts)

module.exports=router;