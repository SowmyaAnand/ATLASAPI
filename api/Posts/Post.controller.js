const {create,deleteUser,posts,postscount} =require("./Post.service");
module.exports={
    createPost:(req,res)=>
    {
        const body=req.body;
        
        console.log(req.file);
        body.attachment=req.file.filename;
        
        create(body,(err,results)=>
        {
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    sucess:0,
                    message: "Database connection error entered"

                });
                
            }
            return res.status(200).json({
                sucess:1,
                message:"success",
                
            })
        })
    },
    postList:(req,res)=>
    {

        posts((err,results)=>
        { console.log(results);
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    sucess:0,
                    message: "Database connection error"

                });
                
            }
            return res.status(200).json({
                sucess:1,
                data:results
            })
        })

    },
     deleteUser: (req, res) => 
     {
    const data = req.body;
    console.log("deleted")
    console.log("the data",req.body);
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if(!results){
          return res.json({
              sucess:0,
              message:"Failed"
          });
      }
      
      return res.json({
        success: 1,
        message: "success"
      });
    });
  },
  postcounts:(req,res)=>
    {
        
        postscount((err,results)=>
        { console.log(results);
            console.log("result");
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    sucess:0,
                    message: "Database connection error"

                });
                
            }
            return res.status(200).json({
                sucess:1,
                data:results,
                message:"success"
            })
        })
    }
   
};