
var i = 0;
var loading  = document.querySelector(".loadding--layer");
move()
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;

    var id = setInterval(frame, Math.floor(Math.random() * 51)+10 );
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        endLoading()
        setTimeout(opa(),2000);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function endLoading(){
    var a  = document.querySelector(".sun");
    a.classList.add('sun--active')
}
function opa(){
    loading.classList.add('endloading')
    setTimeout(()=>{
        loading.classList.add('close')
    },2000);
    
}
//game
document.querySelector(".level--start .header--home").addEventListener("click",()=>{
  location.href="../FRUITGAME/index.html";
})
document.querySelector(".level--1 .header--home").addEventListener("click",()=>{
  location.href="../FRUITGAME/index.html";
})
document.querySelector(".level--2 .header--home").addEventListener("click",()=>{
  location.href="../FRUITGAME/index.html";
})
document.querySelector(".level--3 .header--home").addEventListener("click",()=>{
  location.href="../FRUITGAME/index.html";
})
document.querySelector(".level--4 .header--home").addEventListener("click",()=>{
  location.href="../FRUITGAME/index.html";
})
document.querySelector(".level--start .header--goback").addEventListener("click", ()=>{
  location.href=".././GAMESHOW_TLIT/index.html";
})
// go back button
document.querySelector(".level--1 .header--goback").addEventListener("click",()=>{
  document.querySelector(".level--main").classList.remove("close")
  document.querySelector(".game--level__close").classList.toggle("game--level__open")
})
document.querySelector(".level--2 .header--goback").addEventListener("click",()=>{
  document.querySelector(".level--1").classList.remove("close")
  document.querySelector(".level--2").classList.toggle("game--next__close")
})
document.querySelector(".level--3 .header--goback").addEventListener("click",()=>{
  document.querySelector(".level--2").classList.remove("close")
  document.querySelector(".level--3").classList.toggle("game--next__close")
})
document.querySelector(".level--4 .header--goback").addEventListener("click",()=>{
  document.querySelector(".level--3").classList.remove("close")
  document.querySelector(".level--4").classList.toggle("game--next__close")
})