const pool =require("../../config/database")
module.exports={
    create:(data,callBack)=>{
        pool.query(
            `insert into users(Username,Password,Type) values(?,?,?,?)`,
            [
                
                data.Username,
                data.Password,
                data.Type,
                
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
    updatecount:(data,callBack)=>{
        pool.query(
            `Update users  Set Trendingcount = ? , Totalcount = ?  WHERE Username=?;`,
            [
                
                
                data.categoryname,
                data.totalcnt,
                data.Username,
                
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
    updatecountinnovation:(data,callBack)=>{
        pool.query(
            `Update users  Set Innovationcount = ? , Totalcount = ?  WHERE Username=?;`,
            [
                
                
                data.categoryname,
                data.totalcnt,
                data.Username,
                
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
    updatecountit:(data,callBack)=>{
        pool.query(
            `Update users  Set Itcount = ? , Totalcount = ? WHERE Username=?;`,
            [
                
                
                data.categoryname,
                data.totalcnt,
                data.Username,
                
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
    updatecounttraining:(data,callBack)=>{
        pool.query(
            `Update users  Set Trainingcount = ? , Totalcount = ? WHERE Username=?;`,
            [
                
                
                data.categoryname,
                data.totalcnt,
                data.Username,
                
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
    updatecountpeople:(data,callBack)=>{
        pool.query(
            `Update users  Set Peoplecount = ? , Totalcount = ?  WHERE Username=?;`,
            [
                
                
                data.categoryname,
                data.totalcnt,
                data.Username,
                
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
    updatecountcurrent:(data,callBack)=>{
        pool.query(
            `Update users  Set Currentcount = ? , Totalcount = ?  WHERE Username=?;`,
            [
                
                
                data.categoryname,
                data.totalcnt,
                data.Username,
                
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
    updatecountaccolades:(data,callBack)=>{
        pool.query(
            `Update users  Set Accoladescount = ? , Totalcount = ?  WHERE Username=?;`,
            [
                
                
                data.categoryname,
                data.totalcnt,
                data.Username,
                
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
    
    getusers:callBack=>{
        pool.query(
            `select Username,Password,Type from users`,[],
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
    validateUser:(data,callBack)=>{
        pool.query(
            `select * from users where Username=? and Password=?`,[data.Username,data.Password],
            (error,results)=>
            {
                if(error)
                {
                    console.log(error);
                  return  callBack(error);

                }
                return callBack(null,results)
            }

        )
    },
     validateUserreadpost:(data,callBack)=>{
        pool.query(
            `select * from users where Username=?`,[data.Username],
            (error,results)=>
            {
                if(error)
                {
                    console.log(error);
                  return  callBack(error);

                }
                return callBack(null,results)
            }

        )
    }
}