const {create,getusers,validateUser,validateUserreadpost,updatecount,updatecountinnovation,updatecountit,updatecounttraining,updatecountpeople,updatecountcurrent,updatecountaccolades } =require("./user.service");
const {genSaltSync,hashSync} =require("bcrypt");
module.exports={
    createUser:(req,res)=>
    {
        const body=req.body;
        // const salt = genSaltSync(10);
        // body.Token = hashSync(body.Password,salt);
        create(body,(err,results)=>
        { console.log(body);
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
    updatecounts:(req,res)=>
    {
        const body=req.body;
        // const salt = genSaltSync(10);
        // body.Token = hashSync(body.Password,salt);
        updatecount(body,(err,results)=>
        { console.log(body);
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
                data:"updated"
            })
        })
    },
    updateInnovationcounts:(req,res)=>
    {
        const body=req.body;
        // const salt = genSaltSync(10);
        // body.Token = hashSync(body.Password,salt);
        updatecountinnovation(body,(err,results)=>
        { console.log(body);
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
    updateitcounts:(req,res)=>
    {
        const body=req.body;
        // const salt = genSaltSync(10);
        // body.Token = hashSync(body.Password,salt);
        updatecountit(body,(err,results)=>
        { console.log(body);
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
    }, updatepeoplecounts:(req,res)=>
    {
        const body=req.body;
        // const salt = genSaltSync(10);
        // body.Token = hashSync(body.Password,salt);
        updatecountpeople(body,(err,results)=>
        { console.log(body);
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
    }, updatetrainingcounts:(req,res)=>
    {
        const body=req.body;
        // const salt = genSaltSync(10);
        // body.Token = hashSync(body.Password,salt);
        updatecounttraining(body,(err,results)=>
        { console.log(body);
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
    }, updatecurrentcounts:(req,res)=>
    {
        const body=req.body;
        // const salt = genSaltSync(10);
        // body.Token = hashSync(body.Password,salt);
        updatecountcurrent(body,(err,results)=>
        { console.log(body);
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
    }, updateaccoladescounts:(req,res)=>
    {
        const body=req.body;
        // const salt = genSaltSync(10);
        // body.Token = hashSync(body.Password,salt);
        updatecountaccolades(body,(err,results)=>
        { console.log(body);
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
    getusersList:(req,res)=>
    {
        getusers((err,results)=>
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
    validateUser:(req,res)=>
    {const body=req.body;
        console.log(body);
        
        validateUser(body,(err,results)=>
        {
            if(err)
            {
                console.log(err);
                return ;
                
                
            }
            if(results=="")
            {console.log("enter");
                return res.json({
                    sucess:0,
                    message:"Invalid",
                    data:"Invalid"
                })
            }
            else{
                console.log("enter");
                return res.status(200).json({
                    sucess:1,
                    message:"valid",
                    data:results
                });
            }
          
        });
    },
    validateUserreadposts:(req,res)=>
    {const body=req.body;
        console.log(body);
        
        validateUserreadpost(body,(err,results)=>
        {
            if(err)
            {
                console.log(err);
                return ;
                
                
            }
            if(results=="")
            {console.log("enter");
                return res.json({
                    sucess:0,
                    message:"Invalid"
                })
            }
            else{
                console.log("enter");
                return res.status(200).json({
                    sucess:1,
                    message:"valid",
                    data:results
                });
            }
          
        });
    }
};