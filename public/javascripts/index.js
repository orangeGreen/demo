
//************************************************************
// Data notice the structure
//************************************************************
var data = 	[
	[{'x':1,'y':0},{'x':2,'y':5},{'x':3,'y':10},{'x':4,'y':0},{'x':5,'y':6},{'x':6,'y':11},{'x':7,'y':9},{'x':8,'y':4},{'x':9,'y':11},   {'x':10,'y':2}],
	[{'x':0,'y':12},{'x':12,'y':12}],
	[{'x':0,'y':2},{'x':12,'y':2}]
	
];

/*function sensor(obj){
	var j_data1=[[]];
	$.ajax({
			type:"GET",
			url:"/chart",
			data:{
				sensor_name: $(obj).innerText
                         node_name:$(obj).parent('ul').parent('li').children('a').children('span').innerText,
			},
			datatype:"json",
			success:function(data){
				if(data.success){
				 j_data1[0]=eval(obj).sensor;
				 j_data1[1]=eval(obj).sensor_up;
				 j_data1[2]=eval(obj).sensor_down; 
				 return j_data1;
				}else{
					alert("出现错误")
				}
			}
		})
		
}
				
var data=[[]];
data=sensor(this);*/

var colors = [
	'steelblue',
	'red',
	'green',
]
 
 
//************************************************************
// Create Margins and Axis and hook our zoom function轴、缩放功能
//************************************************************
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 860 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
	
var x = d3.scale.linear()
    .domain([0, 12])
    .range([0, width]);
 
var y = d3.scale.linear()
    .domain([-1, 16])
    .range([height, 0]);
	
var xAxis = d3.svg.axis()
    .scale(x)
	.tickSize(-height)
	.tickPadding(10)	
	.tickSubdivide(true)	
    .orient("bottom");	
	
var yAxis = d3.svg.axis()
    .scale(y)
	.tickPadding(10)
	.tickSize(-width)
	.tickSubdivide(true)	
    .orient("left");
	
var zoom = d3.behavior.zoom()
    .x(x)
    .y(y)
    .scaleExtent([1, 10])
    .on("zoom", zoomed);	
	
	
 
	
	
//************************************************************
// Generate our SVG object 生成SVG对象
//************************************************************	
//var b=document.getElementById("line");
var svg = d3.select("body").append("svg")
	.call(zoom)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
 
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
 
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
 
//svg.append("g")
//	.attr("class", "y axis")
//	.append("text")
//	.attr("class", "axis-label")
//	.attr("transform", "rotate(-90)")
//	.attr("y", (-margin.left) + 20)
//	.attr("x", -height/2)
//	.text('history line-chart');	
 
svg.append("clipPath")
	.attr("id", "clip")
	.append("rect")
	.attr("width", width)
	.attr("height", height);
	
	
	
	
	
//************************************************************
// Create D3 line object and draw data on our SVG object创建D3线对象和我们的SVG对象绘制的数据
//************************************************************
var line = d3.svg.line()
    .interpolate("linear")	
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); });		
	
svg.selectAll('.line')
	.data(data)
	.enter()
	.append("path")
    .attr("class", "line")
	.attr("clip-path", "url(#clip)")
	.attr('stroke', function(d,i){ 			
		return colors[i%colors.length];
	})
    .attr("d", line);		
	
	
	
	
//************************************************************
// Draw points on SVG object based on the data given基于数据给出SVG对象绘制点
//************************************************************
var points = svg.selectAll('.dots')
	.data(data)
	.enter()
	.append("g")
    .attr("class", "dots")
	.attr("clip-path", "url(#clip)");	
 
points.selectAll('.dot')
	.data(function(d, index){ 		
		var a = [];
		d.forEach(function(point,i){
			a.push({'index': index, 'point': point});
		});		
		return a;
	})
	.enter()
	.append('circle')
	.attr('class','dot')
	.attr("r", 2.5)
	.attr('fill', function(d,i){ 	
		return colors[d.index%colors.length];
	})	
	.attr("transform", function(d) { 
		return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
	);
	
 
	
	
	
	
//************************************************************
// Zoom specific updates放大特定的更新
//************************************************************
function zoomed() {
	svg.select(".x.axis").call(xAxis);
	svg.select(".y.axis").call(yAxis);   
	svg.selectAll('path.line').attr('d', line);  
 
	points.selectAll('circle').attr("transform", function(d) { 
		return "translate(" + x(d.point.x) + "," + y(d.point.y) + ")"; }
	);  
}

var con=document.getElementsByClassName('dot');
for(var i=0;i<con.length;i++){
	con[i].onclick=function(){
	alert();
    }
	
}

