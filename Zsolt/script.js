function getInput() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  let credentials = firstName + " " + lastName + " " + age
  // console.log(credentials)

  document.getElementsByClassName("result")[0].innerHTML += credentials + "<br>"

  
}

document.getElementById("btn").addEventListener("click", getInput);
