function validateEmptyValues(){
	var txtEmail = document.getElementsById('txtEmail');
	var txtUn = document.getElementsById('txtUn');
	var txtPw = document.getElementsById('txtPw');

	var appendError= "";
	if (txtEmail=="") {
		appendError="email";
	}
	if (txtUn=="") {
		if (appendError!="") {
			appendError=appendError+"and";
		}
		appendError=appendError+"username";
	}
	if (txtPw=="") {
		if (appendError!="") {
			appendError=appendError+"and";
		}
		appendError=appendError+"password";
	}
	if (appendError!="") {
			appendError=appendError+"cannot be empty.";
			alert(appendError);
			return false;
		}
		else{
			return true;
		}
}
