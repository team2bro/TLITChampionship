function addRote(){
    document.querySelector(".spiner").classList.add("container")
    document.querySelector("body").classList.add("bg__face")
    setTimeout(function(){
        document.querySelector(".spiner").classList.remove("container")
        document.querySelector("body").classList.remove("bg__face")
    },3500)
    setTimeout(function(){
        document.querySelector('.request--div').classList.add('open')
    },4100)
}
document.querySelector('.times').addEventListener('click',function(){
    document.querySelector('.request--div').classList.remove('open')

})