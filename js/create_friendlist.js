
function create_friendlist()
{
	var xmlhttp;

	if(window.XMLHttpRequest)
	{
          xmlhttp = new XMLHttpRequest();

          xmlhttp.onreadystatechange = function()
          {
          	if(xmlhttp.readyState==4 && xmlhttp.status==200)
          	{
                  //alert(xmlhttp.responseText);
          		    $("#friends").html(xmlhttp.responseText);
          	}
          }
	}

	var data = "create_friendlist_livechat.php";
	xmlhttp.open("get",data,true);
  xmlhttp.send();
}