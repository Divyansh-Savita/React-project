// let cardNumInput = 
// 	document.querySelector('#cardNum') 

// cardNumInput.addEventListener('keyup', () => { 
// 	let cNumber = cardNumInput.value 
// 	cNumber = cNumber.replace(/\s/g, "") 

// 	if (Number(cNumber)) { 
// 		cNumber = cNumber.match(/.{1,4}/g) 
// 		cNumber = cNumber.join(" ") 
// 		cardNumInput.value = cNumber 
// 	} 
// })
function validate(){
    var name = document.getElementById("name").value;
    // var email = document.getElementById("#email").value;
    // var address = document.getElementById("#address").value;
    // var city = document.getElementById("#city").value;
    // var state = document.getElementById("#state").value;
    // var zip = document.getElementById("#zip").value;
    // var cardName = document.getElementById("#cardName").value;
    // var cardNum = document.getElementById("#cardNum").value;
    // var month = document.getElementById("#month").value;
    // var month = document.getElementById("#month").value;
    if ( name == "Divyansh Savita" ){
    alert ("Payment successfully");
    window.location = "index.html"; // Redirecting to other page.
    return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }}
}