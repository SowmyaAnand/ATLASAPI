const pool =require("../../config/database")
module.exports={
    createApproved:(data,callBack)=>{
        pool.query(
            `insert into approvedposts(category,title,description,attachment,publishedby,date) values(?,?,?,?,?,?)`,
            [
                
                data.category,
                data.title,
                data.description,
                data.attachment,
                data.publishedby,
                data.date
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
    postsApproved:(data,callBack)=>{
        pool.query(
            `select PostId,category,title,description,attachment,publishedby,DATE_FORMAT(date,'%d %b %Y') as date from  approvedposts where category=?`,[data.category],
            (error,results,fields)=>
            {
                if(error)
                {
                    console.log(error);
                    console.log("error")
                  return  callBack(error);
  
                }
                return callBack(null,results)
            }
  
        )
    },
    Filterposts:(data,callBack)=>{
        pool.query(
            `select PostId,category,title,description,attachment,publishedby,DATE_FORMAT(date,'%d %b %Y') as date from approvedposts where date between ? and ?`,[data.fromdate,data.todate],
            (error,results)=>
            {
                if(error)
                {
                  return  callBack(error);

                }
                return callBack(null,results)
            }

        )
    },
    approvedpostscount:(callBack)=>
    {
        pool.query(
            `select category,count(*) as count from approvedposts Group By category`,
            (error,results)=>
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





