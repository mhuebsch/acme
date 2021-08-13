
function navToggle() {
    var x = document.getElementById("topNav");
    if (x.className === "nav-wrapper") {
      x.className += " open";
    } else {
      x.className = "nav-wrapper";
    }
}

