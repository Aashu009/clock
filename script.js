let hr = document.getElementById("hour");
let mn = document.getElementById("min");
let sc = document.getElementById("sec");

function displayTime()
{
    let date = new Date();

    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();


    let hRotation = 30*hh + mm/2;
    let mrotate = 6*mm;
    let srotate = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    mn.style.transform = `rotate(${mrotate}deg)`;
    sc.style.transform = `rotate(${srotate}deg)`;


}

setInterval(displayTime, 1000);
