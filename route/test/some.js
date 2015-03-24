var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
	res.send("it worked some route!")
})
// 注册其他模块的route


module.exports = router;