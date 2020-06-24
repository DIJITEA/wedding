setTimeout(Hello, 1000);
function Hello() {
  document.getElementById("Gborder").classList.toggle("gborder1");
  document.getElementById("Gborder").classList.add("gborder2");

  setTimeout(Hello2, 300);
}
function Hello2() {
  document.getElementById("P1").classList.toggle("p1");
  document.getElementById("P1").classList.add("p2");

  setTimeout(Hello3, 900);
}

function Hello3() {
  document.getElementById("P1").style.opacity = -0;
  document.getElementById("P1").style.top = 30 + "%";
  document.getElementById("P2").classList.toggle("p1");
  document.getElementById("P2").classList.add("p2");

  setTimeout(Hello4, 900);
}

function Hello4() {
  document.getElementById("P2").style.opacity = -0;

  document.getElementById("P3").classList.toggle("p3");
  document.getElementById("P3").classList.add("p2");

  setTimeout(Hello5, 1300);
}

function Hello5() {
  document.getElementById("P3").style.opacity = -0;
  document.getElementById("P4").classList.toggle("p4");
  document.getElementById("P4").classList.add("p2");

  setTimeout(Hello6, 900);
}
function Hello6() {
  document.getElementById("P4").classList.toggle("p2");
  document.getElementById("P4").classList.toggle("p4");

  document.getElementById("P5").classList.toggle("p4");
  document.getElementById("P5").classList.add("p2");

  setTimeout(Hello7, 300);
}

function Hello7(){
    document.getElementById("P5").classList.toggle("p2");
    document.getElementById("P5").classList.add("p4");

    setTimeout(Hello8, 900);
}

function Hello8(){
    document.getElementById("P6").classList.toggle("p1");
    document.getElementById("P6").classList.add("p2");
}