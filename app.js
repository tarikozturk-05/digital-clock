const saat = document.querySelector(".saat");
const dak = document.querySelector(".dak");
const saniye = document.querySelector(".saniye");
const pa= document.querySelector(".pm-am");

const zaman = ()=>{
        let second = new Date().getSeconds();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
       
if(hour<13){
    pa.innerHTML= `AM`;
     saat.innerHTML = `${hour}`;
     dak.innerHTML = `${minute}`;
     saniye.innerHTML = `${second}`;
}else{
    pa.innerHTML = `PM`;
     if(hour -12 <10){
         saat.innerHTML = `0${hour -12}`;
     }else{
         saat.innerHTML = `${hour -12}`;
     }
     dak.innerHTML = `${minute}`;
     saniye.innerHTML = `${second}`;
}

}
setInterval(zaman, 1000);
window.onload = () => {zaman()}


//? A.M ve P.M kısaltmaları Latince’den alınmışlardır. A.M yani “Ante Meridiem”, “öğleden önce” anlamına gelirken; P.M yani “Post Meridiem” ise “öğleden sonra” anlamına gelir.