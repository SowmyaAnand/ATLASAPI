const {createcomments,AllComments,commentscount } =require("./comments.service");

module.exports={
    createcomments:(req,res)=>
    {
        const body=req.body;
        console.log(body);
        createcomments(body,(err,results)=>
        { console.log(res.status);
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
    },
    AllCommentsList:(req,res)=>
    {const body=req.body;
        AllComments(body,(err,results)=>
        { 
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
    commentscounts:(req,res)=>
    {
        const body=req.body;
        console.log(body);
        commentscount(body,(err,results)=>
        { console.log(res.status);
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
}