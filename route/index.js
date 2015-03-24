var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
	res.send("it worked route!")
})

// 注册其他模块的route
var fs = require("fs")
function handleDir(root,dirpath){
	fs.readdir(dirpath,function(err,files){
	// console.log(files);
	files.forEach(function(item){
		var path = dirpath+"/"+item
		 stat = fs.lstatSync(path);
		 if (!stat.isDirectory()){
		 	if(path!=__filename){
		 		var la = item.split(".")
		 		la.pop();
		 		router.use(root+la.join("."),require("."+root+item));
		 		// console.log("add path:"+root+la.join("."))
		 	}
		 }else{
		 	// console.log("dir:"+path)
		 	handleDir(root+item+"/",path);
		 }
	})
	
})
}
handleDir("/",__dirname);
module.exports = router;
