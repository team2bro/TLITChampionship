
var btn=document.querySelector('.btn')
var btn2=document.querySelector('.btn-refresh')
function refresh() {
  document.querySelector('.nuwant').classList.remove('open')
  document.querySelector('.namwant').classList.remove('open')
}
  

btn.addEventListener('click',()=>{
  var genderWant=document.querySelectorAll('input[name="genderwant"]')
  genderWant.forEach(x => {
    if (x.checked==true && x.value=='nam') {
      document.querySelector('.nuwant').classList.add('open')
    }
    else if (x.checked==true && x.value=='nu'){
      document.querySelector('.namwant').classList.add('open')
    }
  });
  window.scroll({
    top:750,
    behavior: 'smooth'
  });
  $('.slider').slick({
    dots:true,
    infinite:true,
    arrow: true,
    speed:1200,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='btn__ btn__left fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='btn__ btn__right fa fa-angle-right' aria-hidden='true'></i></button>"
  })
})

