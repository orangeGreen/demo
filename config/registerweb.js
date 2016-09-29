var cassandra = require('./user_support');
var cassandra_table = require('./cassandra_support');
exports.registerweb=function(account,password,gateid,permission,callback){
	cassandra.finduser(function(err,result){
	if(err) throw err;
	else if(result.rows.length>0){
	console.log("User already exist");var userresult=2100;
	callback(userresult);}
	else if(result.rows.length==0){
	cassandra.gateexists(function(err,result){
			if(result.rows.length==1){
				cassandra.signup(function(err) {if(err) throw 						err;},account,gateid,password,permission);
				cassandra_table.createtable(function(){if(err) throw err;},gateid);
			}
		},gateid);
	var userresult = 2000;
	//cassandra_table(function{});
callback(userresult);}
});
}
