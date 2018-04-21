function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var city=document.getElementById("city_row"+no);
 var age=document.getElementById("age_row"+no);
 var mobile=document.getElementById("mobile_row"+no);
 var email=document.getElementById("email_row"+no);
 var password=document.getElementById("password_row"+no);
 var state=document.getElementById("state_row"+no);
 var country=document.getElementById("country_row"+no);
 var pincode=document.getElementById("pincode_row"+no);
 var imagepath=document.getElementById("imagepath_row"+no);
 var documenttype=document.getElementById("documenttype_row"+no);
	
 var name_data=name.innerHTML;
 var city_data=city.innerHTML;
 var age_data=age.innerHTML;
 var mobile_data=mobile.innerHTML;
 var email_data=email.innerHTML;
 var password_data=password.innerHTML;
 var state_data=state.innerHTML;
 var country_data=country.innerHTML;
 var pincode_data=pincode.innerHTML;
 var imagepath_data=imagepath.innerHTML;
 var documenttype_data=documenttype.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 city.innerHTML="<input type='text' id='city_text"+no+"' value='"+city_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
 mobile.innerHTML="<input type='text' id='mobile_text"+no+"' value='"+mobile_data+"'>";
 email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
 password.innerHTML="<input type='text' id='password_text"+no+"' value='"+password_data+"'>";
 state.innerHTML="<input type='text' id='state_text"+no+"' value='"+state_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 pincode.innerHTML="<input type='text' id='pincode_text"+no+"' value='"+pincode_data+"'>";
 imagepath.innerHTML="<input type='text' id='imagepath_text"+no+"' value='"+imagepath_data+"'>";
 documenttype.innerHTML="<input type='text' id='documenttype_text"+no+"' value='"+documenttype_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var city_val=document.getElementById("city_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;
 var mobile_val=document.getElementById("mobile_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 var password_val=document.getElementById("password_text"+no).value;
 var state_val=document.getElementById("state_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var pincode_val=document.getElementById("pincode_text"+no).value;
 var imagepath_val=document.getElementById("imagepath_text"+no).value;
 var documenttype_val=document.getElementById("documenttype_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("city_row"+no).innerHTML=city_val;
 document.getElementById("age_row"+no).innerHTML=age_val;
 document.getElementById("mobile_row"+no).innerHTML=mobile_val;
 document.getElementById("email_row"+no).innerHTML=email_val;
 document.getElementById("password_row"+no).innerHTML=password_val;
 document.getElementById("state_row"+no).innerHTML=state_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("pincode_row"+no).innerHTML=pincode_val;
 document.getElementById("imagepath_row"+no).innerHTML=imagepath_val;
 document.getElementById("documenttype_row"+no).innerHTML=documenttype_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_city=document.getElementById("new_city").value;
 var new_age=document.getElementById("new_age").value;
 var new_mobile=document.getElementById("new_mobile").value;
 var new_email=document.getElementById("new_email").value;
 var new_password=document.getElementById("new_password").value;
 var new_state=document.getElementById("new_state").value;
 var new_country=document.getElementById("new_country").value;
 var new_pincode=document.getElementById("new_pincode").value;
 var new_imagepath=document.getElementById("new_imagepath").value;
 var new_documenttype=document.getElementById("new_documenttype").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='city_row"+table_len+"'>"+new_city+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td id='mobile_row"+table_len+"'>"+new_mobile+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='password_row"+table_len+"'>"+new_password+"</td><td id='state_row"+table_len+"'>"+new_state+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='pincode_row"+table_len+"'>"+new_pincode+"</td><td id='imagepath_row"+table_len+"'>"+new_imagepath+"</td><td id='documenttype_row"+table_len+"'>"+new_documenttype+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_city").value="";
 document.getElementById("new_age").value="";
 document.getElementById("new_mobile").value="";
 document.getElementById("new_email").value="";
 document.getElementById("new_password").value="";
 document.getElementById("new_state").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_pincode").value="";
 document.getElementById("new_imagepath").value="";
 document.getElementById("new_documenttype").value="";
}