require("dotenv").config(); 
const express =require("express");
const multer =require('multer')
const app=express();
const path = require("path");
//set storage engine

const storage = multer.diskStorage({
  destination: './public/upload',
  filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage,
  
})
app.use('/attachment', express.static('public/upload'));

app.post("/upload", upload.single('attachment'), (req, res) => {

    res.json({
        success: 1,
        profile_url: `http://localhost:3000/attachment/${req.file.filename}`
    })
})
function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
      res.json({
          success: 0,
          message: err.message
      })
  }
}
app.use(errHandler);




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
  const PostRouter =require("./api/Posts/Post.router");
const userRouter =require("./api/Users/user.router");
const ApprovedPostsRouter=require("./api/ApprovedPosts/ApprovedPosts.router");
const likesRouter=require("./api/Likes/Likes.router");
const commentsRouter=require("./api/comments/comments.router");
app.use(express.json());
app.use("/api/users",userRouter)
app.use("/api/posts",PostRouter)
app.use("/api/ApprovedPosts",ApprovedPostsRouter)
app.use("/api/likes",likesRouter)
app.use("/api/comments",commentsRouter)
app.listen(process.env.APP_PORT,()=>{
    console.log("server up and running on port");
})
 