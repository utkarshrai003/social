function message()
{
	var email = document.create_account.email.value;
	var password = document.create_account.password.value;
	var name = document.create_account.name.value;
	var dob = document.create_account.dob.value;
	var work = document.create_account.work.value;

	var xmlhttp;

	if(window.XMLHttpRequest)
	{
	     xmlhttp = new XMLHttpRequest();
         
	     xmlhttp.onreadystatechange = function() {
             if(xmlhttp.readyState==4 && xmlhttp.status==200)
             {
             	//alert("i am working");
                //alert(xmlhttp.responseText);	
             	$("#message_box").html(xmlhttp.responseText);
             	document.create_account.email.value = "";
                document.create_account.password.value = "";
				document.create_account.name.value="";
				document.create_account.dob.value="";
				document.create_account.work.value="";

				$('#name').css({ "border": ''});
				$('#email2').css({ "border": ''});
				$('#dob').css({ "border": ''});
				$('#pwd').css({ "border": ''});
				$('#work').css({ "border": ''});

             }
           }	
	 }

	var data = "create_user.php?&email="+email + "&password=" + password + "&name=" + name  +"&dob=" + dob +  "&work=" +work ;
	xmlhttp.open("get" , data , true);
	xmlhttp.send();
 }