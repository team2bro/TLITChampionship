$('.slider').slick({
   autoplay:true,
   autoplaySpeed:3000,
   dots:true,
   infinite:true,
   arrow: true,
   speed:1500,
   prevArrow:"<button type='button' class='slick-prev pull-left'><i class='btn__ btn__left fa fa-angle-left' aria-hidden='true'></i></button>",
   nextArrow:"<button type='button' class='slick-next pull-right'><i class='btn__ btn__right fa fa-angle-right' aria-hidden='true'></i></button>"
})
function gotogioithieu(){
   location.href = '../../TLIT/GIOITHIEU_TLIT/index.html';
}
setTimeout(()=>{
   document.querySelector('.main').classList.remove("wait")
   document.querySelector('.loadding').classList.add("wait")
},7000)

//---------------------------------

ScrollReveal({ 
   reset: true ,
   distance:'150px',
   duration: 1000,
   delay:400,
});
ScrollReveal().reveal('.taget__picture', { delay: 200 , origin:'left'});
ScrollReveal().reveal('.content--taget', { delay: 200 , origin:'right'});
ScrollReveal().reveal('.law--btn ', { delay: 200 , origin:'bottom'});
ScrollReveal().reveal('.law--btn ', { delay: 200 , origin:'bottom'});
ScrollReveal().reveal('.law--section__header ', { delay: 200 , origin:'top'});
ScrollReveal().reveal('.law--section__body ', { delay: 200 , origin:'top'});
ScrollReveal().reveal('.section__body__1 ', { delay: 100 , origin:'bottom'});
ScrollReveal().reveal('.section__body__2 ', { delay: 200 , origin:'bottom'});
ScrollReveal().reveal('.section__body__3 ', { delay: 300 , origin:'bottom'});
ScrollReveal().reveal('.section__body__4 ', { delay: 400 , origin:'bottom'});





