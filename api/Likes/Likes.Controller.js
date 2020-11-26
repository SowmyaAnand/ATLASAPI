const {likes,likescount } =require("./Likes.service");

module.exports={
    Addlikes:(req,res)=>
    {
        const body=req.body;
        console.log(body);
        likes(body,(err,results)=>
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
    likescounts:(req,res)=>
    {
        const body=req.body;
        console.log(body);
        likescount(body,(err,results)=>
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