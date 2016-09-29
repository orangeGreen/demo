var cassandra = require('cassandra-driver');
var uuid = require('uuid');
var client = new cassandra.Client({contactPoints:['127.0.0.1'],keyspace:'iotserver'});

function createkeyspace(callback,spacename){
	var s1 ="CREATE KEYSPACE ";
	s1 += spacename;
	s1 += " WITH replication={'class':'SimpleStrategy','replication_factor':3};"
	client.execute(s1,function(err,result){
		if(!err){
			console.log("Create succeed!");
		}
});
}

function dropkeyspace(call,spacename){
	var s1 ="DROP ";
	s1 += spacename;
	client.execute(s1,function(err,result){
		if(!err){
			console.log("Drop succeed!");
		}
});
}




function select(callback,selector){
	var s1 ="select * from A20160907 where nodeid =";
	s1 +="'";
	s1 +=selector;
	s1 +="' allow filtering;"
	client.execute(s1,function(err,result){
		if(!err){
			if(result.rows.length>0){
				//var user=result.rows[0];
				//console.log(result);
			}else{
				console.log("No results");
			}
		callback(err,result);
		}
	});
}

function insert(callback,tablename,date,hour,mins,nodeid,senor,value){
	var s1 ="INSERT INTO ";
	var timeid = uuid.v4();
	s1 += tablename;
	s1 += " (timeid,date,hour,min,nodeid,senor,value) VALUES";
	s1 += " (";
	s1 +=timeid;
	s1 += ",'";
	s1 +=date;
	s1 +="','";
	s1 +=hour;
	s1 +="','";
	s1 +=mins;
	s1 +="','";
	s1 +=nodeid;
	s1 += "','";
	s1 +=senor;
	s1 += "',"
	s1 +=value;
	s1 +=");";
	client.execute(s1,function(err,result){
	if(!err){
		console.log("Insert succeed!");
		callback(err,null);
	}
});
}

function createtable(callback,tablename){
	var s1 ="CREATE TABLE ";
	s1 += tablename;
	s1 +=" (timeid uuid PRIMARY KEY,date text,hour text,min text,nodeid text,senor text,value float)WITH comment='Important biological records' AND read_repair_chance=1.0;";
	client.execute(s1,function(err,result){
	console.log(s1);
	if(!err){
		console.log("Create succeed!");
		callback(err,null);
	}
});
}

function droptable(callback,tablename){
	var s1 ="DROP TABLE ";
	s1 += tablename;
	s1 += ";"
	client.execute(s1,function(err,result){
	if(!err){
		console.log("Drop succeed!");
		callback(err,null);
	}
});
}

function findgate(callback,account){
	var s1 = "select gateid from userdata where ";
	client.execute(s1,function(err,result){
	console.log(s1);
	if(!err){
		console.log(typeof(result));
		callback(result);
	}
	else console.log(err);
});
}

function master(callback,cql){
	var s1 = cql;
	console.log(s1);
	client.execute(s1,function(err,result){
	if(!err){
		callback(err,result);
		console.log(result);
	}
	else console.log(err);
});
}

function clientshut(callback){
	client.shutdown(function(err){if(err) throw err;});
}
module.exports.insert= insert;
module.exports.select = select;
module.exports.clientshut = clientshut;
module.exports.findgate = findgate;
module.exports.createtable=createtable;
//create(null,"A20160902");
//insert(null,"A20160901",uuid.v1(),'1','2','12',21);

//master(function(err,result){if(err) console.log(err);},'describe tables;');

//findgate(function(result){},"gatetable");
//select(function(err,result){if(err) throw err;},1);
//createtable(function(err){if(err) throw err;},"A20160907");
//insert(function(err){if(err)throw err;},"A20160907",uuid.v1(),'0909','16','12','1','humidity',21);
//client.shutdown();

//droptable(function(err){if(err) throw err;process.exit0();},"A20160907");
//createkeyspace(function(err){if(err) throw err;},"iotserver");
//client.shutdown(function(err){if(err) throw err;});
