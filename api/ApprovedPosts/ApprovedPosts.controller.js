const {createApproved,postsApproved,Filterposts,likes,approvedpostscount} =require("./ApprovedPosts.service");
module.exports={
    createApprovedPost:(req,res)=>
    {
        const body=req.body;
    
        createApproved(body,(err,results)=>
        {
            console.log(results);
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
                message:"success"
            })
        })
    },
    ApprovedpostList:(req,res)=>
    {const body=req.body;
    
        postsApproved(body,(err,results)=>
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
    Filter:(req,res)=>
    {const body=req.body;
        
        Filterposts(body,(err,results)=>
        { console.log(results);
            if(err)
            {
                console.log(err);
                return ;
                
                
            }
            if(results=="")
            {
                return res.json({
                    sucess:0,
                    message:"Invalid"
                })
            }
            else{
                return res.status(200).json({
                    sucess:1,
                    data:results
                });
            }
          
        });
    },
    CountCategory:(req,res)=>
    {
        approvedpostscount((err,results)=>
        { console.log(results);
            if(err)
            {
                console.log(err);
                return ;
                
                
            }
            
            else{
                return res.status(200).json({
                    sucess:1,
                    data:results
                });
            }
          
        });
    },
   
};