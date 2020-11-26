const pool =require("../../config/database")
module.exports={
    likes:(data,callBack)=>{
        pool.query(
            `insert into likes(postid,username) values(?,?)`,
            [
                data.postid,
                data.username,
                
                
            ],
            (error,results,fields)=>
            {
                if(error)
                {
                  return  callBack(error);

                }
                return callBack(null,results)
            }
        )
    },
    likescount:(data,callBack)=>
    {
        pool.query(
            `select count(*) from likes where postid=?`,[data.postid],
            (error,results,fields)=>
            {
                if(error)
                {
                  return  callBack(error);
  
                }
                return callBack(null,results)
            }
  
        )
    }
}