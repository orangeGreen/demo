var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints:['127.0.0.1'],keyspace:'iotserver'});
function signup(callback,account,gateid,password,permission){
	var s1 ="INSERT INTO userdata ";
	s1 += "(account,gateid,password,permission) VALUES";
	s1 += " ('";
	s1 += account;
	s1 += "','";
	s1 += gateid;
	s1 += "','";
	s1 += password;
	s1 += "','";
	s1 += permission;
	s1 += "');"
	client.execute(s1,function(err,result){
	if(!err){
		console.log("Insert succeed!");
		callback(err,result);
	}
});
}

function getgate(callback,account){
	var s1 ="select gateid from userdata where account ='"
	s1 += account;
	s1 += "';"
	client.execute(s1,function(err,result){
	if(!err){
	console.log(result);
	callback(err,result);
	}
});
}

function chgepass(callback,account,password){
	var s1 ="update userdata set password = '"
	s1 += password;
	s1 +="' where account ='"
	s1 +=account;
	s1 +="';"
	client.execute(s1,function(err,result){if(!err)callback(err,result);else throw err;});
}
function finduser(callback,account){
	var s1 ="select * from userdata where account = '";
	s1 += account;
	s1 += "';";
	client.execute(s1,function(err,result){
		if(!err){
		//console.log(s1);
		callback(err,result);
		}else throw err;
	});
}
module.exports.signup = signup;
module.exports.chgepass = chgepass;
module.exports.finduser = finduser;
module.exports.getgate = getgate;
