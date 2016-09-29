var loginweb = require('../config/loginweb');
var registerweb = require('../config/registerweb');
var cassandra = require('../config/cassandra_support');
module.exports = function(app) {
   app.get('/',function (req, res) {
   res.render('login',{user:req.session.user,
			     success:req.flash('success').toString(),
				error:req.flash('error').toString()});});
	//app.get('/login',checknotlogin);
    app.get('/login',function (req, res) {
   res.render('login',{user:req.session.user,
			     success:req.flash('success').toString(),
				error:req.flash('error').toString()});});
   app.post('/login',function(req,res){
	   var username=req.body.tuser;
	   var upassword=req.body.tpass;
	   console.log(username);
	   console.log(upassword);
	   console.log(req.session.user);
	   if((username!=null)&&(upassword!=null)){
			loginweb.loginweb(username,upassword,function(userresult){
				if(userresult==1000){
					req.session.user=username;
					req.flash('success','success login')
					console.log(req.session.user);
					res.redirect('chart');}
				else if(userresult==1030){
					req.flash('error','Invalid password');}
				else if(userresult==1050){
					req.flash('error','user not exist');}});
	   }
   });
    //app.get('/register',checknotlogin);
   app.get('/register',function(req,res){
   res.render('register',{user:req.session.user,
			     success:req.flash('success').toString(),
				error:req.flash('error').toString()});});
   app.post('/register',function(req,res){
	   var username=req.body.tuser;
	   var pass=req.body.tpass;
	   var gateid=req.body.gateid;
	   var permission="vip";
	   console.log(username);
	   console.log(pass);
	   console.log(gateid);
	   console.log(req.session.user);
	   if(username!=null){
		registerweb.registerweb(username,pass,gateid,permission,function(found){
			if(found==2000){
				res.redirect('login');}
			if(found==2100){
				res.render("User already exist");}	
		});}
   });
    app.get('/chart',checklogin);
   /*app.get('/chart',function(req,res,next){
	/*	var username = req.session.user;
		console.log(username);
		cassandra.findgate(function(result){
			cassandra.nodenum(function(result1){
			console.log(result1);
			 res.render('chart',{user:req.session.user,
			     success:req.flash('success').toString(),
				error:req.flash('error').toString()});
			},result);
		},username);		
	   res.render('chart',{user:req.session.user,
			     success:req.flash('success').toString(),
				error:req.flash('error').toString()});
	next();
   });
//app.get('/chart',function(req,res){
//		if(req.query.node_name&&req.query.sensor_name){
//			render(req.query.node_name+"ss"+req.query.sensor_name)}})
	app.post('/chart',function(req,res){
//		var nodename=req.body.node_name;
//		console.log(nodename);
//		var sensorname=req.body.sensor_name;
//		console.log(sensorname);
		var time1=req.body.time1;
		var time2=req.body.time2;
		var datemin1=time1.substr(5,2);
		var datemin2=time2.substr(8,2);
		var datemin=datemin1+datemin2;
		var hourmin=time1.substr(11,2);
		var minmin=time1.substr(14,2);
		console.log(datemin);
		console.log(hourmin);
		console.log(minmin);
		var nodeid = '1';
		var senor = 'Humidity';
		console.log(time1);
		console.log(time2);
		cassandra.findgate(function(err,result){if(err) throw err;
			else {
				cassandra.getdata(function(result1){
				},result,)
			}
		},req.session.user);
});
app.get('/chart',function(req,res){
	if(req.query.name=="back"){
		req.session.user==null;
		res.redirect('login');}})*/
app.get('/chart',function(req,res){res.render('chart')})
app.post('/chart',function(req,res){
		var sensor=req.body.sensor;
		var node=req.body.node;
		var date1=req.body.date1;
		var date2=req.body.date2;
		if(sensor!=null&&node!=null&&date1!=null&&date2!=null){
			res.render(sensor+node+date1+date2)}})
    function checklogin(req,res,next){
	    if(!req.session.user){
			req.flash('error','you need store');
			res.redirect('login');}
		next();}
     function checknotlogin(req,res,next){
		if(req.session.user){
			req.flash('error','you has store');
			res.redirect('back');}
			next();}
};
