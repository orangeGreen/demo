var cassandra = require('./cassandra_support');
function test(a){
	cassandra.findgate(function(result){
			cassandra.nodenum(function(result1){
			//console.log(result1);
			},result);
		},a);
}

test('aaa');
