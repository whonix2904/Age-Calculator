var input = document.getElementById("date");
input.max = new Date().toISOString().split("T")[0];

var calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculate);


function calculate() {
  let birthday = new Date(input.value);
  let y1 = birthday.getFullYear();
  let m1 = birthday.getMonth() + 1;
  let d1 = birthday.getDate();
  let h1 = birthday.getHours();
  let mi1 = birthday.getMinutes();

  let today = new Date();

  let y2 = today.getFullYear();
  let m2 = today.getMonth() + 1;
  let d2 = today.getDate();
  let h2 = today.getHours();
  let mi2 = today.getMinutes();
  let sec = today.getSeconds();

  let y3, m3, d3, h3, mi3;

  y3 = y2 - y1;

  if (m2 < m1) {
    y3--;
    m3 = 12 + m2 - m1;
  } else {
    m3 = m2 - m1;
  }

  if (d2 < d1) {
    m3--;
    d3 = getdaysinmonth(y1, m1) + d2 - d1;
  } else {
    d3 = d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  if (h2 < h1) {
    d3--;
    h3 = 24 + h2 - h1;
  } else {
    h3 = h2 - h1;
  }

  if (mi2 < mi1) {
    h3--;
    mi3 = 60 + mi2 - mi1;
  } else {
    mi3 = mi2 - mi1;
  }

  if (mi3 < 0) {
    h--
    mi3 = 60 + mi3
  }

  if (h3 < 0) {
    d3--;
    h3 = 24 + h3;
  }
  function getdaysinmonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  let resultElement = document.getElementById("result");
  resultElement.textContent = `You are ${y3} years ${m3} months ${d3} days ${h3} hours ${mi3} minutes ${sec} seconds old`;
  resultElement.classList.add("animation");

  // setTimeout(function() {
  //     resultElement.classList.remove("animation"); 
  // }, 2000);

   

  
setInterval(calculate,1000)
}
