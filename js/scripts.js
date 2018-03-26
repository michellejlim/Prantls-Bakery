

function validate(){
	
	var zipcode = $("#zipcode").val();
	if(isNaN(zipcode)||zipcode.length!= 5){
		alert("Zipcode must be 5 numbers long.");
		return false;
	}
	var email=$("#email").val();
	if (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email) == false) {
			
			return false;
		}
}
		