function a(){
	var l_user=$('#l_user').val();
	var l_pass=$('#l_pass').val();
	var data={"username":l_user,"upassword":l_pass};
	$ajax({
		url:'/login',
		type:'POST',
		data:data
	});
}



