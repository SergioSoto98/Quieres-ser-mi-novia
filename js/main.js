var si = document.getElementById('si');
si.addEventListener("click", function (e) {
    alert(
        "FELICIDADES!!" + "\n" + 
        "SABIA QUE DIRIAS QUE SI MI AMOR" + 
        "\n" + "AHORA YA SOMOS NOVIOS <3");
});

var no = document.getElementById('no');
no.addEventListener("mousemove", function (e) {
    var x = Math.round(Math.random() * 93 );
    var y = Math.round(Math.random() * 93 );
    no.style.left = x + "%";
    no.style.top = y + "%";
});