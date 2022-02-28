
$(document).ready(function(){
    var i=5
    $('.feel').click(function(){

        $('.heart').toggleClass("heart-active")
        $('.feel--love').toggleClass("feel--love-active")
        if( $('.feel--love').hasClass("feel--love-active") ){
            i++
            $('.number--feel').text(i)
        }
        else {
            i--
            $('.number--feel').text(i)

        }
       
    });
    $('.comment').click(function(){
        $('.comment--love').toggleClass("feel--love-active")
        $('.close').toggleClass("open2")

    })
});
var btnClose=document.querySelector('.btn--close')
btnClose.addEventListener('click',function(){
    document.querySelector('.post').classList.remove('open')
})
function openBox(){
    document.querySelector('.post').classList.add('open')
}