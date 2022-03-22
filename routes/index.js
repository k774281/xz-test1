// const express=require("express");
// const router=express.Router();
// const pool=require("../pool");

// router.get("/",(req,res)=>{
//   var sql=`SELECT * FROM xz_index_product where seq_recommended!=0 order by seq_recommended`;
//   pool.query(sql,[],(err,result)=>{
//     if(err){
//       res.send(err);
//       console.log(err);
//     }else{
//       res.send(result);
//       /*res.writeHead(200,{
//         "Access-Control-Allow-Origin":
//           "*"
//       });
//       res.write(JSON.stringify(result));
//       res.end();*/
//     }
//   })
// })

// module.exports=router;

// const http=require('http');
// const fs=require('fs');
// const zlib=require('zlib');

// var app=http.createServer();
// app.listen(8080);
// app.on('request',function(req,res){
//   if(req.url==='/index'){
//     res.writeHead(200,{
//       'Content-Type':'text/html',
//       'Content-Encoding':'gzip'
//     });
//     var gzip=zlib.createGzip();
//     fs.createReadStream('index.html').pipe(gzip).pipe(res);
//   }
// })



const express=require('express');
const pool=require('../pool.js');
const router=express.Router();

router.get('/index',function(req,res){
  res.sendFile(__dirname+'../index.html');
  var gid=req.query.gid;
  var sql="select gd.*, gp.lg from game_detail gd inner join game_pic gp on gd.gid=gp.game_id WHERE gd.gid=?";

  pool.query(sql,[gid],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  });
})

module.exports=router;