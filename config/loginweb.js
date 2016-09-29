var cassandra = require('./user_support');

exports.loginweb = function(account,password,callback){
	//var userresult = "Null";
	cassandra.finduser(function(err,result){
	if(err) throw err;
	else if(result.rows.length>0){
	 if(result.rows[0].password == password){
		console.log("Login Sucess");
		//var userresult = {'response':"Login Sucess"};
		var userresult=1000;
callback(userresult);}
	 else {
		console.log("Invalid Password");
		//var userresult = {'response':"Invalid Password"};
		var userresult=1030;
callback(userresult);
		}
	}
	else if(result.rows.length ==0){
	 console.log("User not exist");
	 //var userresult = {'response':"User not exist"};
	var userresult=1050;
callback(userresult);
	}
	},account);
	//callback(userresult);
}

