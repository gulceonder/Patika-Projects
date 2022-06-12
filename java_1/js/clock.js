function showTime() {

    var dat = new Date();
    var h = dat.getHours();
    var m = dat.getMinutes();
    var s = dat.getSeconds();
    h=checkzero(h);
    m=checkzero(m);
    s=checkzero(s);
    var tim = h + " :" + m + ":" + s;
    document.getElementById('myClock').innerHTML = tim;
    // document.getElementById('MainContent_TextBox1').value = tim;
    var t = setTimeout("showTime()", 1000);

}

function checkzero(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

let fullName = prompt("Lutfen Adinizi Giriniz: ")

let greeting = document.querySelector("#myName")

greeting.innerHTML = `${greeting.innerHTML} <small >${fullName}</small>`

showTime()