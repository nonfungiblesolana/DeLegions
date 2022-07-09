if (sessionStorage.getItem("counter")) {
  if (sessionStorage.getItem("counter") >= 10) {
    var value = 132;
  } else {
    var value = sessionStorage.getItem("counter");
  }
} else {
  var value = 132;
}
document.getElementById('counter').innerHTML = value;

var counter = function () {
  if (value >= 10) {
    sessionStorage.setItem("counter", 132);
    value = 132;
  } else {
    value = parseInt(value) - 1;
    sessionStorage.setItem("counter", value);
  }
  document.getElementById('counter').innerHTML = value;
};

var interval = setInterval(counter, 1000);