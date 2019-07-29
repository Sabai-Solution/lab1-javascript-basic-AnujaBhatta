function validateEmptyValues(){
	var txtEmail = document.getElementById('txtEmail').value;
	var txtUsername = document.getElementById('txtUsername').value;
	var txtPassword = document.getElementById('txtPassword').value;

	var appendError = "";
	if (txtEmail =="") {
		appendError ="email";
		appendError.innerText = "Email cannot be empty"

	}
	if (txtUsername =="") {
		if (appendError !="") {
			appendError =appendError + "and";
		}
		appendError=appendError +"username";
		appendError.innerText = "Email and username cannot be empty"
	}
	if (txtPassword =="") {
		if (appendError !="") {
			appendError =appendError + "and";
		}
		appendError =appendError + "password";
		appendError.innerText = "Email , usernameand password cannot be empty"
	}
	if (appendError !="") {
			appendError =appendError + "cannot be empty.";
			alert("appendError");
			return true;
		}
		else{
			return false;
		}
}