window.onload = function () {

  function validateForm() {
  var fname = document.getElementById("firstname").value;
  var lname = document.getElementById("lastname").value;
  var address = document.getElementById("street").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var query = document.getElementById("query").value;


  if (fname!='' && lname!='' && address!='' && email!='' && phone!='' && query!='') {
    {window.location = "http://www.funkyawesome.com";}


  } else {
  alert("Please fill out all fields");
  return false;
  }
  }
