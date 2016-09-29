var nodemailer = require('nodemailer');
var cassandra = require('./user_support');

var smtpTransport = nodemailer.createTransport("SMTP",{
	auth: {
		user:"a b-cup dressed",
		pass:"******"
	}
});

exports.cpass = function(account,oldpass,newpass,callback){
	var userresult = "Null";
	cassandra.finduser(function(err,result){
if(err) throw err;
else if(result.rows[0].password == oldpass) {

	cassandra.chgepass(function(err,result){
	if(err) throw err;
	else {console.log("Password Sucessfully Changed");userresult={'response':"Password Sucessfully Changed"};}
		},account,newpass);
}

else if(result.rows[0].password != oldpass) {
	console.log("Invalid Password");userresult={'response':"Invalid Password"};}
	},account);
	callback(userresult);
}
