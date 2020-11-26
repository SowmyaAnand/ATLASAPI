const pool =require("../../config/database")
module.exports={
    create:(data,callBack)=>{
        pool.query(
            `insert into posts(category,title,description,attachment,publishedby,date) values(?,?,?,?,?,?)`,
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
                console.log(results);
                return callBack(null,results)
            }
        )
    },
    posts:callBack=>{
      pool.query(
          `select PostId,category,title,description,attachment,publishedby,DATE_FORMAT(date,'%d %b %Y') as date,DATE_FORMAT(date,'%Y-%m-%d') as newdate from Posts`,[],
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
    deleteUser: (data, callBack) => {
        pool.query(
          `delete from posts where PostId = ?`,
          [data.PostId],
          (error, results, fields) => {
            console.log(data.PostId);
            if (error) {
                console.log(error);
             return callBack(error);
             
            }
            
            return callBack(null, results);
          }
        );
      },

      postscount:callBack=>
    {
        pool.query(
            `select count(*) as count from posts`,
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





