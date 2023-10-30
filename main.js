const form = document.getElementById("form"); //for accessing data written by user
const email = document.getElementById("email");
const password = document.getElementById("password");

//when submitting there wont be question mark in the website url. we use addeventlistener and prevent default for it.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

//for email validation
const isemail = (emailval) => {
  var atsymbol = emailval.indexOf("@");
  if (atsymbol < 1) return false; //to not put @in the starting.ie. if @ is at the index less than one.
  var dot = emailval.lastIndexOf("."); //usually there is no double triple . before @. But in case , if there is, we are putting lastindexof.
  if (dot <= atsymbol + 3) return false; //if dot index is less than after@ 3 values
  if (dot === emailval.length - 1) return false; //if .is in the last
  return true;
};

//now for validation , validation function
const validate = () => {
  //trim removes any white spaces before and after username,phone number or anything.
  const emailval = email.value.trim();
  const cpasswordval = cpassword.value.trim();

  //validating email
  if (emailval === "") {
    seterrormsg(email, "Email cannot be blank");
  }
  //inside else if , a function is called i.e is email.email value is passed through it.
  else if (!isemail(emailval)) {
    seterrormsg(email, "Not a valid email");
  } else {
    setsuccessmsg(email);
  }

  //validating password
  if (passwordval === "") {
    seterrormsg(password, "Password cannot be blank");
  } else if (passwordval <= 6) {
    errormsg(password, "Minimum 6 characters.");
  } else {
    setsuccessmsg(password);
  }
};

function seterrormsg(input, errormsgs) {
  //to show email error during email, username error during username:
  //we have class form control and small.here in small, in errormsg of small, we are sending seterrormsge of emails,username.
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "formcontrol error"; //to get red color when wrong csspart is accessed.
  small.innerText = errormsgs; //to end seerror msge.
}

function setsuccessmsg(input) {
  const formControl = input.parentElement;
  formControl.className = "formcontrol success";
}
