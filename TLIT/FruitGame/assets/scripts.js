
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
