//  start the coding of form page 
//  start the coding of form page 
document.getElementById("button").addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let mailExp = /^[a-z]*\@gmail\.com$/i;
  let passExp = "Osama160195"
  if (email.value.match(mailExp) && password.value === passExp) {
    location.href = './Dashboard.html'
  } else {
    alert("the form is no valided")
    email.value = "";
    password.value = "";
    location.reload();
  }
}
)
