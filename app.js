const saat = document.querySelector(".saat");
const dak = document.querySelector(".dak");
const saniye = document.querySelector(".saniye");
const pa= document.querySelector(".pm-am");

const zaman = ()=>{
        let second = new Date().getSeconds();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        saat.innerHTML = `${hour}`
        dak.innerHTML = `${second}`;
        saniye.innerHTML = `${minute}`;
}
setInterval(zaman, 1000);
// window.onload()