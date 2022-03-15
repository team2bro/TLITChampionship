function goToLoveLine() {
  window.open('../LoveLine/index.html', '_blank');
}
function goToFruitGame() {
  window.open('../FruitGame/index.html', '_blank');
}
setTimeout(()=>{
  document.querySelector('.main').classList.remove("wait")
  document.querySelector('.loadding').classList.add("wait")
},5000)