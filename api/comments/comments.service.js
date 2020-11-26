const pool =require("../../config/database")
module.exports={
    createcomments:(data,callBack)=>{
        pool.query(
            `insert into comments(comment,username,postid) values(?,?,?)`,
            [
                
                data.comment,
                data.username,
                data.postid,
                
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
    AllComments:(data,callBack)=>{
        pool.query(
            `select * from comments where postid=?`,[data.postid],
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
    commentscount:(data,callBack)=>{
        pool.query(
            `select count(*) from comments where postid=?`,[data.postid],
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