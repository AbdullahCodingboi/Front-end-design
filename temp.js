function Calculates(){
    let Farenhiet=parseFloat(document.querySelector("#Farenhiet").value);
    let Celsius=(Farenhiet - 32) * 5/9;
   return document.querySelector("#Celsius").value=Math.round(Celsius)
}
function Clear(){
    document.querySelector("#Farenhiet").value="";
    document.querySelector("#Celsius").value=""
}