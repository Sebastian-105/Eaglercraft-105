// Varibles
let version = document.getElementById("version");
let eagler152 = document.getElementById("eagler152");
let placeholder = document.getElementById("placeholder");
let eagler188 = document.getElementById("eagler188");
let eageroffline152 = document.getElementById("eagleroffline152");
let eagleroffline188 = document.getElementById("eagleroffline188");
let value = version.getAttribute("value");
let options = document.getElementsByClassName("options");
// Event Listeners
document.getElementById("152options").onchange = changeListener152;
document.getElementById("188options").onchange = changeListener188;
document.getElementById("version").onchange = changeListener;

function changeListener152() {
  var value = this.value;
  console.log(value);

  if (value == "Precision") {
    window.open("1.5/precision/index.html");
  } else if (value == "resent") {
    alert(
      "This is currently not working, this is not a but, do not report this!\n- Sebastian-105"
    );
  } else if (value == "Vanilla") {
    window.open("1.5/vanilla/index.html");
  } else if (value == "placeholder152") {
    alert("You must choose an option.\n- Sebastian-105");
  }
}
function changeListener188() {
  var value = this.value;
  console.log(value);

  if (value == "Vanilla188") {
    window.open("1.8/vanilla/index.html");
  } else if (value == "Resent188") {
    window.open("1.8/resent/index.html");
  } else if (value == "placeholder188") {
    alert("You must choose an option.\n- Sebastian-105");
  }
}
function changeListener() {
  var value = this.value;
  console.log(value);

  if (value == "eagler152") {
    $(".diva").fadeIn("slow");
  } if (value == "eagler188") {
    $(".dive").fadeIn("slow");
  } if (value == "placeholder") {
    alert("You must choose an option.\n- Sebastian-105");
  }
}
