let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");

 function SetAnalogClock() {
     let date = new Date();
     let h = date.getHours();
     let m = date.getMinutes();
     let s = date.getSeconds();

     //degree
     let hourDeg = h * 30 + m * 0.5;
     let minuteDeg = m * 6 + s * 0.1;
     let secondDeg = s * 6;

   hour.style.transform = `rotateZ(${hourDeg}deg)`;
   minute.style.transform = `rotateZ(${minuteDeg}deg)`;
   second.style.transform = `rotateZ(${secondDeg}deg)`;
   digitalClock.innerHTML = ` ${h % 12}:${m}:${s} ${h > 12 ? "PM" : "AM"}`;


 }
 SetAnalogClock();
 setInterval(SetAnalogClock, 1000);
