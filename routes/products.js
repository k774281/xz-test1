const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get('/products',function(req,res){
  var family_id=req.query.family_id;
  var sql=`SELECT gid, title, price, pic FROM game_detail where family_id = ?`;
  pool.query(sql,[family_id],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  });

});

module.exports=router;

