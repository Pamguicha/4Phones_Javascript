console.log("hello world");
//todo 12 functions
// selectors for RegisterForm 
const submitBtnRegisterForm = document.querySelector("#submitBtnRform");
const errorUserNameRf = document.querySelector("#usernameError");
const errorEmailRf = document.querySelector("#emailRegisterFormError");
const errorPassword = document.querySelector("#passwordError");
const errorConfirmPassword = document.querySelector("#confirmPasswordErrorRf");
const errorFirstNameRf = document.querySelector("#firstNameErrorRf");
const errorSurname = document.querySelector("#surnameErrorRf");
const errorGender = document.querySelector("#genderError");
const errorAddress = document.querySelector("#addressError");
const errorSuburb = document.querySelector("#suburbError");
const errorPostcode = document.querySelector("#postcodeError");
const errorState = document.querySelector("#stateError");
const errorMobileNumberRf = document.querySelector("#telephoneErrorRf");

submitBtnRegisterForm.addEventListener("click", function(ev){
  ev.preventDefault();
  return validateUserData();
});

const validateUserData = () =>{
  let error = 0;

  error = validateUsername(error);
  error = validateEmailRf(error);
  error = validatePassword(error);
  error = validateConfirmPassword(error);
  error = validateFirstNameRf(error);
  error = validateSurname(error);
  error = validateGender(error);
  error = validateAddress(error);
  error = validateSuburb(error);
  error = validatePostcode(error);
  error = validateState(error);
  error = validateMobileRf(error);

  if(error === 0) {
    return true; //no errors found
  }
  else {
    return false; // there are some errors
  }

}
//function for username 
//Required. Must be between 6 characters and 20 characters. Must not contain any special characters.
  function validateUsername(errorFound){
    let userdata = document.getElementById("#username").value;
     if (userdata.length >= 6 && userdata.length <=20){
      errorUserNameRf.innerHTML="*"; 

     } else {
      errorUserNameRf.innerHTML = "Your username must be between 6 and 20 characters";
      return ++errorFound;
     }
     let illegalChars = /\W/;
     if (illegalChars.test(userdata)) {
      errorUserNameRf.innerHTML = "Your username cannot contain illegal characters such as symbols";
      return ++errorFound;
     } 
     else { //no error found
      errorUserNameRf.innerHTML = "*";
      return errorFound;
     }
  }
  //function validateEmail 
  //Required. Must be a valid email address.
 function validateEmailRf(errorFound){
   let userdata = document.getElementById("email").value;
    let regExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regExpression.test(userdata)){
     errorEmailRf.innerHTML = "*";
      return 0;
    }
    else {
      errorEmailRf.innerHTML = "The email address is not valid";
      return ++errorFound;
    }
 }


//todo careful to select same name with name, email, phone number, message.