function addActive() {
    let opt = document.querySelectorAll(".href-link");
    let content = [];
    for(let i = 0; i < opt.length; i++) {
        content[i] = opt[i].getAttribute("data-id");
        opt[i].onclick = function() {
            for(let i = 0; i < opt.length; i++) {
                opt[i].classList.remove("active");
            }
            this.classList.add("active");
            let data = document.querySelectorAll(".href-items");
            for(let j = 0; j < data.length; j++) {
                data[j].style.display = "none";
            }
            document.getElementById(content[i]).style.display = "block";
        }
    }
}
function btnMenu() {
    let btn = document.getElementById("btn-menu");
    let menu = document.getElementById("menu");
    btn.onclick = function() {
        (menu.classList.contains("active")) ? menu.classList.remove("active") : menu.classList.add("active");
    }
}
window.onload = function() {
    document.getElementById("menu").classList.remove("active");
    document.getElementById("home").style.display = "block";
}
function mean(a, b, c) {
    
    return (a+b+c)/3;
}
function median(a, b, c) {
    var data = [a,b,c].sort();
    return data[1];
}
function modus(a, b, c) {
    let data = [a, b, c];
    let hitung = 0, max_hitung = 0, modus = 0;
    for (let i = 0; i < data.length; i++) {
        hitung = 0;
        for (let j = 0; j < data.length; j++) {
            if(data[i] == data[j]) {
                hitung++;
            }
        }
        if(hitung > max_hitung) {
            max_hitung = hitung;
            modus = data[i];
        }
    }
    if(max_hitung > 1) {
        return modus;
    }
    else {
        return "Tidak ada modus";
    }
    
}
function max(a,b,c) {    
    return Math.max(a,b,c);
}
function min(a,b,c) {
    return Math.min(a,b,c);
}
function hitung() {
    var a = parseFloat(document.querySelector("#nilaiA").value);
    var b = parseFloat(document.querySelector("#nilaiB").value);
    var c = parseFloat(document.querySelector("#nilaiC").value);
    var hasil = document.getElementById("hasilHitung");
    hasil.innerHTML = " \
    <table> \
    <tr><td>Mean</td><td>:</td><td>" + mean(a,b,c) + " </td></tr> \
    <tr><td>Median</td><td>:</td><td>" + median(a,b,c) + "</td></tr> \
    <tr><td>Modus</td><td>:</td><td>" + modus(a,b,c) + "</td></tr> \
    <tr><td>Max</td><td>:</td><td>" + max(a,b,c) + "</td></tr> \
    <tr><td>Min</td><td>:</td><td>" + min(a,b,c) + "</td></tr> \
    </table>"
}
function bersihkan() {
    let a = document.querySelector("#nilaiA").value = "";
    let b = document.querySelector("#nilaiB").value = "";
    let c = document.querySelector("#nilaiC").value = "";
    let hasil = document.getElementById("hasilHitung");
    hasil.innerHTML = "";
}
addActive();
btnMenu();