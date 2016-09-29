window.onload = function() {
	
	
		var img1 = document.getElementById('img1');
		var img2 = document.getElementById('img2');
		var img3 = document.getElementById('img3');
		var img4 = document.getElementById('img4');
		
		//var imgs = document.getElementsByClassName('item');
		var body = document.getElementById('chart');

		var i = 0;
		var j = 0;
		var k = 0;
		var m=0;
		img1.onclick = function() {
			i++;
			if(i % 2 == 0) {
				img1.src = '/img/lian.gif';
			} else {
				img1.src = '/img/24101_04.gif';
			}

		}
		img2.onclick = function() {
			j++;
			if(j % 2 == 0) {
				img2.src = '/img/ref_03.gif';
			} else {
				img2.src = '/img/24101_01.gif';
			}

		}
		img3.onclick = function() {
			k++;
			if(k % 2 == 0) {
				img3.src = '/img/shui.gif';
			} else {
				img3.src = '/img/24101_09.gif';
			}

		}
		
		img4.onclick = function() {
			m++;
			if(m % 2 == 0) {
				img4.src = '/img/light_icon_07.gif';
			} else {
				img4.src = '/img/24101_04.gif';
			}

		}

		
		var data = [
			['传感器1', '传感器2', '传感器3'],
			['传感器1', '传感器2', '传感器3', '4'],
			['传感器1', '传感器2', '传感器3', '4', '5'],
		];
     
/*function sensor(){
	var j_data1=[[]];
	$.ajax({
			type:"GET",
			url:"/chart",
			data:{
				sensor_name: $(obj).innerText
                         node_name:$(this).parent('ul').parent('li').children('a').children('span').innerText,
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
		
}*/
    //function a(){
      // 	var l_user=$('#l_user').val();
       //	var l_pass=$('#l_pass').val();
       //	var data={"l_user":l_user,"l_pass":l_pass};
       //	$.ajax({
       //		type:"post",
       //		url:"/login",
       //	    data:data,
       //	    datatype:"json",
       //	   success:function(data,status){
       //	   	if(status=='success'){
       //	   		var j_data=eval(data).node_num;
	//		    var n=j_data.num;
	//		    
	//			return n;
       	   //	}
       	   //},
       	//   error:function(data,status,e){
       	  // 	if(status=='error'){
       	   //		alert("发生错误");
       	   		
       	   	//}
       	   //}
       	//});
    //}
         
         
         
         
         
//        var n=a();
		var node0 = document.getElementById('ul_1');
		var nod = [];
		var a = [];
		var s = [];
		var ul = [];
		var uli = [];
		var ua = [];
		//var n=data.length;
		for(var i = 0; i < data.length; i++) {
			nod[i] = document.createElement('li');
			nod[i].setAttribute('class', 's2');
			a[i] = document.createElement('a');
			a[i].setAttribute('href', '#');
			a[i].setAttribute('class', 'la');
			
			s[i] = document.createElement('span');
			s[i].innerHTML = "节点" + (i + 1);
			ul[i] = document.createElement('ul');
			ul[i].setAttribute('class', 'p3');
			a[i].appendChild(s[i]);
			nod[i].appendChild(ul[i]);
			nod[i].appendChild(a[i]);
			node0.appendChild(nod[i]);
			for(var j = 0; j < data[i].length; j++) {
				uli[j] = document.createElement('li');
				uli[j].className = "a" + (i + 1);
				ua[j] = document.createElement('a');
				ua[j].setAttribute('href', '#');
				//ua[i].onclick=sensor();
				ua[j].innerHTML = '传感器' + (j + 1);
				uli[j].appendChild(ua[j]);
				ul[i].appendChild(uli[j]);

			}

		}
	
  
		document.getElementById('click').onmouseover = function() {

			var a1 = document.getElementsByClassName('a1');
			var a2 = document.getElementsByClassName('a2');
			var a3 = document.getElementsByClassName('a3');
			var a4 = document.getElementsByClassName('a4');
			var a5 = document.getElementsByClassName('a5');
			var a6 = document.getElementsByClassName('a6');
			var li = document.getElementsByClassName('la');
			var p3 = document.getElementsByClassName('p3');

			
			for(var a = 1; a < li.length; a++) {
				li[a].style.webkitTransform = "rotate(" + 90 * a / li.length + "deg)";
				li[a].style.MozTransform = "rotate(" + 90 * a / li.length + "deg)";
				li[a].style.msTransform = "rotate(" + 90 * a / li.length + "deg)";
				li[a].style.OTransform = "rotate(" + 90 * a / li.length + "deg)";
				li[a].style.transform = "rotate(" + 90 * a / li.length + "deg)";
			}

			for(var a = 1; a < a1.length; a++) {

				a1[a].style.webkitTransform = "rotate(" + 90 * a / a1.length + "deg)";
				a1[a].style.MozTransform = "rotate(" + 90 * a / a1.length + "deg)";
				a1[a].style.msTransform = "rotate(" + 90 * a / a1.length + "deg)";
				a1[a].style.OTransform = "rotate(" + 90 * a / a1.length + "deg)";
				a1[a].style.transform = "rotate(" + 90 * a / a1.length + "deg)";
			}

			for(var a = 1; a < a2.length; a++) {

				a2[a].style.webkitTransform = "rotate(" + 90 * a / a2.length + "deg)";
				a2[a].style.MozTransform = "rotate(" + 90 * a / a2.length + "deg)";
				a2[a].style.msTransform = "rotate(" + 90 * a / a2.length + "deg)";
				a2[a].style.OTransform = "rotate(" + 90 * a / a2.length + "deg)";
				a2[a].style.transform = "rotate(" + 90 * a / a2.length + "deg)";
			}

			for(var a = 1; a < a3.length; a++) {

				a3[a].style.webkitTransform = "rotate(" + 90 * a / a3.length + "deg)";
				a3[a].style.MozTransform = "rotate(" + 90 * a / a3.length + "deg)";
				a3[a].style.msTransform = "rotate(" + 90 * a / a3.length + "deg)";
				a3[a].style.OTransform = "rotate(" + 90 * a / a3.length + "deg)";
				a3[a].style.transform = "rotate(" + 90 * a / a3.length + "deg)";
			}

			for(var a = 1; a < a4.length; a++) {

				a4[a].style.webkitTransform = "rotate(" + 90 * a / a4.length + "deg)";
				a4[a].style.MozTransform = "rotate(" + 90 * a / a4.length + "deg)";
				a4[a].style.msTransform = "rotate(" + 90 * a / a4.length + "deg)";
				a4[a].style.OTransform = "rotate(" + 90 * a / a4.length + "deg)";
				a4[a].style.transform = "rotate(" + 90 * a / a4.length + "deg)";
			}

			for(var a = 1; a < a5.length; a++) {
				a5[a].style.webkitTransform = "rotate(" + 90 * a / a5.length + "deg)";
				a5[a].style.MozTransform = "rotate(" + 90 * a / a5.length + "deg)";
				a5[a].style.msTransform = "rotate(" + 90 * a / a5.length + "deg)";
				a5[a].style.OTransform = "rotate(" + 90 * a / a5.length + "deg)";
				a5[a].style.transform = "rotate(" + 90 * a / a5.length + "deg)";
			}

		};
 
/*    function c(){
    	    var list=[];
    	    var j_data2=[];
    	    var time1=$('#date1').val();
    	    var time2=$('#date2').val();
    	    var data={"time1":time1,"time2":time2};
    	    $.ajax({
    	    	type:"post",
    	    	url:"/chart",
    	    	data:data,
    	    	datatype:"json",
    	    	success:function(data,status){
　　　　　　          if(status == 'success'){
　　　　　　　　         j_data2=eval(data).message;
					for(var i=0;i<j_data2.length;i++){
						list[i]=j_data2[i].time+j_data2[i].txt;
						//list=[{213233,2323},{12134,342432},{132324,321323}];
　　　　　　                }
					  return list;
				  }
　　　　              },　　
　　　　          error:function(data,status,e){
　　　　　　            if(status == "error"){
　　　　　　　　         alert("发生错误");
　　　　　　            }
　　　　             }
    	   });
     } 
		
    
    	var list=[];
    	list=c();
    	var li = [];			
    	var ul = document.getElementById("lis");
    	for(var i = 0; i < list.length; i++) {
	       li[i] = document.createElement('li');
	       li[i].setAttribute('class', 'list');
	       li[i].innerHTML = list[i];
	       ul.appendChild(li[i]);
        }*/
 	

};
