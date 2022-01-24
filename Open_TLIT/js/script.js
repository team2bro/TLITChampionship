
function goToPage(){
    location.href="https://www.facebook.com/CLB.TinHoc.TLU"
}
const btn_1=document.querySelector('.btn__1')
const btn_2=document.querySelector('.btn__2')
const logIn=document.querySelector('.page--dangnhap')
const signUp=document.querySelector('.page--dangki')
btn_1.addEventListener('click',() => {
    logIn.classList.add('open')
})
document.querySelector('.times').addEventListener('click',() => {
    logIn.classList.remove('open')
    logIn.classList.add('close')
    setTimeout(()=>{
        logIn.classList.remove('close')
    },1200)
   
})
btn_2.addEventListener('click',() => {
    signUp.classList.add('open')
})
document.querySelector('.times2').addEventListener('click',() => {
    signUp.classList.remove('open')
    signUp.classList.add('close')
    setTimeout(()=>{
        signUp.classList.remove('close')
    },1200)
   
})
function diDenTrangChu(){
    location.href="../TLIT/Web_TLIT/index.html"
}
document.querySelector('.link__signup').addEventListener('click',() => {
    logIn.classList.remove('open')
    signUp.classList.add('open')
})