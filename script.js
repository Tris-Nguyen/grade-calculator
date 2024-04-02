// CS10 Grade Calculator

// Button click listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let mod1 = +document.getElementById("module1").value;
  let mod2 = +document.getElementById("module2").value;
  let mod3 = +document.getElementById("module3").value;
  let mod4 = +document.getElementById("module4").value;
  let mod5 = +document.getElementById("module5").value;

  // PROCESS
  let average = (mod1 + mod2 + mod3 + mod4 + mod5) / 5;

  // OUTPUT
  document.getElementById("output").innerHTML = Math.ceil(average);
}
