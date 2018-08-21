function validate() {
	var flag=true;
	var fname=document.getElementById("fname").value;
	var nameexp=/^[a-zA-Z]*$/;
	var numexp=/^[0-9]+$/;
	var emailexp= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(fname == "") {
		document.getElementById("Fname").innerHTML="First Name can't be Empty";
		flag=false;
	}
	else if(!fname.match(nameexp)) {
		document.getElementById("Fname").innerHTML="First Name can't have number";
		flag=false;
	}
	else {
		document.getElementById("Fname").innerHTML="";
	}
	
	var lname=document.getElementById("lname").value;
	
	if(!lname.match(nameexp)) {
		document.getElementById("Lname").innerHTML="Last Name can't have number";
		flag=false;
	}
	
	else {
		document.getElementById("Lname").innerHTML="";
	}
	
	var pnum=document.getElementById("phnumber").value;
	
	if(!pnum.match(numexp) || pnum.length!=10) {
		document.getElementById("num").innerHTML="Number is not correct format";
		flag=false;
	}
	
	else {
		document.getElementById("num").innerHTML="";
	}
	
	var mail=document.getElementById("email").value;
	
	if(!mail.match(emailexp)) {
		document.getElementById("mail").innerHTML="E-mail is not correct format";
		flag=false;
	}
	
	else{
		document.getElementById("mail").innerHTML="";
	}
	
	if(!document.getElementById("male").checked && !document.getElementById("female").checked && !document.getElementById("trans").checked) {
		document.getElementById("check").innerHTML="Gender must be selected";
		flag=false;
	}
	
	else {
		document.getElementById("check").innerHTML="";
	}
	
	return flag;
}
