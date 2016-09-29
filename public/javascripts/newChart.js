window.onload=function(){
	var box1=document.getElementById('divselect1'),
	    title1=box1.getElementsByTagName('cite')[0],
	    menu1=box1.getElementsByTagName('ul')[0],
	    as1=box1.getElementsByTagName('a'),
        index1=-1,
		flag1=0;
	var box2=document.getElementById('divselect2'),
	    title2=box2.getElementsByTagName('cite')[0],
	    menu2=box2.getElementsByTagName('ul')[0],
	    as2=box2.getElementsByTagName('a'),
        index2=-1,
		flag2=0;
   
    // 点击三角时
    title1.onclick=function(event){
      event = event||window.event;
     if (flag1==0){
          menu1.style.display = "block";
          flag1 = 1;
      }else{
          menu1.style.display = "none";
          flag1 = 0;
      }
	  if(event.stopPropagation){
		 event.stopPropagation(); 
	  }else{
	     event.cancelBubble = true;		  
	  }
	  document.onkeyup = function(event){
		event = event||window.event;
		if(event.keyCode==40){
			index1++;
			if(index1>=as.length) index=0;
			for(var i=0; i<as.length;i++){
			  as1[i].style.background = '#fff';
			}
			as1[index].style.background = '#ccc';
		} 
		if(event.keyCode==38){
			index1--;
			if(index1<0) index1=as1.length-1;
			for(var i=0; i<as1.length;i++){
			  as1[i].style.background = '#fff';
			}
			as1[index].style.background = '#ccc';
		}
		if(event.keyCode==13){
			for(var i=0; i<as1.length;i++){
			  as1[i].style.background = '#fff';
			}
			title1.innerHTML = as1[index1].innerHTML;
			menu1.style.display = 'none';
		}  
	  }
    }  
    
    title2.onclick=function(event){
      event = event||window.event;
     if (flag2==0){
          menu2.style.display = "block";
          flag2 = 1;
      }else{
          menu2.style.display = "none";
          flag2 = 0;
      }
	  if(event.stopPropagation){
		 event.stopPropagation(); 
	  }else{
	     event.cancelBubble = true;		  
	  }
	  document.onkeyup = function(event){
		event = event||window.event;
		if(event.keyCode==40){
			index2++;
			if(index2>=as2.length) index=0;
			for(var i=0; i<as2.length;i++){
			  as2[i].style.background = '#fff';
			}
			as2[index2].style.background = '#ccc';
		} 
		if(event.keyCode==38){
			index2--;
			if(index2<0) index2=as2.length-1;
			for(var i=0; i<as2.length;i++){
			  as2[i].style.background = '#fff';
			}
			as2[index2].style.background = '#ccc';
		}
		if(event.keyCode==13){
			for(var i=0; i<as2.length;i++){
			  as2[i].style.background = '#fff';
			}
			title2.innerHTML = as2[index2].innerHTML;
			menu2.style.display = 'none';
		}  
	  }
    }  
     
    
   // 滑过滑过、离开、点击每个选项时
    for(var i=0; i<as1.length; i++){
      	 as1[i].num = i
		 as1[i].onmouseover = function(){
			this.style.background = '#ccc'
			index1 = as1[i].num-1;	 
		 }
		 as1[i].onmouseout = function(){
			this.style.background = '#fff'	 
		 }
		 as1[i].onclick = function(event){
			event = event||window.event;
			if(event.stopPropagation){
			   event.stopPropagation(); 
			}else{
			   event.cancelBubble = true;		  
			}
			menu1.style.display = 'none';
			title1.innerHTML = this.innerHTML;	 
		 }  
	  }
    
    for(var i=0; i<as2.length; i++){
      	 as2[i].num = i
		 as2[i].onmouseover = function(){
			this.style.background = '#ccc'
			index2 = as2[i].num-1;	 
		 }
		 as2[i].onmouseout = function(){
			this.style.background = '#fff'	 
		 }
		 as2[i].onclick = function(event){
			event = event||window.event;
			if(event.stopPropagation){
			   event.stopPropagation(); 
			}else{
			   event.cancelBubble = true;		  
			}
			menu2.style.display = 'none';
			title2.innerHTML = this.innerHTML;	 
		 }  
	  }
   // 点击页面空白处时
    document.onclick = function(){
    	 menu1.style.display = 'none'; 
    	 menu2.style.display = 'none'; 
	  }
    
 }

