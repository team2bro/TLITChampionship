//-----------------khai bao----------------------------------

var level=document.querySelectorAll(".your--level")
var dataLevel=1;
var score=document.querySelectorAll(".your--score")
var dataScore=0;
var flip=document.querySelectorAll(".your--flip")
var dataFlip=0;
var second=document.querySelector(".your--seconds")
var dataSecond=0;
var minute=document.querySelector(".your--minutes")
var dataMinute=0;
var where=0;
//help for-=---------------------------------------------------
function helpBtn(){
    var gameStart = document.querySelector(".game--start__open")
    var helpLevel = document.querySelector(".help--level__close")
    gameStart.classList.toggle("close")
    helpLevel.classList.toggle("game--level__open")
}
document.querySelector(".help .header--goback").addEventListener("click",()=>{
helpBtn();
})

function play() {
    var gameStart = document.querySelector(".game--start__open")
    var gameLevel = document.querySelector(".game--level__close")
    gameStart.classList.toggle("close")
    gameLevel.classList.toggle("game--level__open")
    dataCheckLevel(0)
}

function dataCheckLevel(i) {
    level[i].innerText = dataLevel;
    score[i].innerText = dataScore;
}
function check(a, b, c,x,where) {
    var congrat = document.querySelector(".congrat")
    if ((a.toUpperCase() == b) || (a.toUpperCase() == c)) {
        dataScore++
        congrat.innerHTML = `<img class="tb" src="./assets/img/congrat.gif" alt="">`
        setTimeout(() => {
            document.querySelector(".tb").remove();
        }, 3000)
        
        x.outerHTML =`<button onclick="${where}" class="btn--sub btn--check"><i class="fa-solid fa-check"></i></button>`;
    }
    else {
        congrat.innerHTML = `<img class="tb2" src="./assets/img/cry.gif" alt="">`
        setTimeout(() => {
            document.querySelector(".tb2").remove();
        }, 3000)
        x.outerHTML =`<button onclick="${where}" class="btn--sub btn--check"><i class="fa-solid fa-xmark"></i></button>`;
    }
    document.querySelector(".answer--form input").classList.add("epointer")
}
function nextLevel2() {
    where=1;
    document.querySelector(".level--1").classList.add("close")
    document.querySelector(".level--2").classList.remove("game--next__close")
    var dataAnswer = document.querySelector(".level--1 input").value
    var btnLevel=document.querySelector(".level--1 .btn--sub");
    if (!btnLevel.classList.contains("btn--check")) {
        check(dataAnswer, "BANANAS", "BANANA",btnLevel,"nextLevel2()")
    }
    dataLevel=2
    dataCheckLevel(where)
}
function nextLevel3() {
    where=2;
    document.querySelector(".level--2").classList.add("close")
    document.querySelector(".level--3").classList.remove("game--next__close")
    var dataAnswer = document.querySelector(".level--2 input").value
    var btnLevel=document.querySelector(".level--2 .btn--sub");
    if (!btnLevel.classList.contains("btn--check")) {
        check(dataAnswer, "ORANGES", "ORANGE",btnLevel,"nextLevel3()")
    }
    dataLevel=3
    dataCheckLevel(where)
}
function nextLevel4() {
    where=3;
    document.querySelector(".level--3").classList.add("close")
    document.querySelector(".level--4").classList.remove("game--next__close")
    var dataAnswer = document.querySelector(".level--3 input").value
    var btnLevel=document.querySelector(".level--3 .btn--sub");
    if (!btnLevel.classList.contains("btn--check")) {
        check(dataAnswer, "STRAWBERRYS", "STRAWBERRY",btnLevel,"nextLevel4()")
    }
    dataLevel=4
    dataCheckLevel(where)
    dataCheckCardFlip(where)
    dataCheckCardScore(where)
    updateSeconds();
    updateMinutes();
    timeRun()
}
document.querySelector(".level--1 .btn--sub").addEventListener("click", () => {
    nextLevel2()
})
document.querySelector(".level--1").addEventListener("keydown", (e) => {
    if (e.which == 13) {
        nextLevel2()
    }
})
document.querySelector(".level--2 .btn--sub").addEventListener("click", () => {
    nextLevel3()
})
document.querySelector(".level--2").addEventListener("keydown", (e) => {
    if (e.which == 13) {
        nextLevel3()
    }
})
document.querySelector(".level--3 .btn--sub").addEventListener("click", () => {
    nextLevel4()
})
document.querySelector(".level--3").addEventListener("keydown", (e) => {
    if (e.which == 13) {
        nextLevel4()
    }
})

//------------------------------------------------------
//---------------game card------------------------------
//------------------------------------------------------




var valueNameCard=document.querySelectorAll(".flip-card-back img")
var valueCard=document.querySelectorAll(".flip-card")
var posThe=[]
var none=document.querySelectorAll(".none")
var k=0;
function dataCheckCardFlip(i){
    flip[i-3].innerText = dataFlip;
}
function dataCheckCardScore(i){
    score[i].innerText = dataScore;
}
function latThe(i){
    none[i].classList.toggle("act")
    var dem=0
    for(var x=0;x<none.length;x++){
        if(none[x].classList.contains("act")){
            dem++
        }
    }
    dataFlip++;
    dataCheckCardFlip(where)
    if (dem%2==0){
        for(var x=0;x<none.length;x++){
            if(none[x].classList.contains("act")){
                posThe[k]=x;
                k++;              
            }
        }
        checkCard(posThe[0],posThe[1])
        k=0
    }
}
function upThe(i){
    none[i].classList.toggle("act")
}
function checkCard(i,j){
    if(valueNameCard[i].getAttribute("alt")==valueNameCard[j].getAttribute("alt")){
        valueCard[i].classList.add("active--card")
        valueCard[j].classList.add("active--card")
        none[i].classList.toggle("act")
        none[j].classList.toggle("act")
        none[j].classList.add("actimp")
        none[i].classList.add("actimp")
        dataScore =dataScore+10;
        dataCheckCardScore(where)
        checkWin();
    }
    else{
        setTimeout(function(){
            upThe(posThe[0])
            upThe(posThe[1])
        },1000)
       
    }
}
function checkWin(){
    var k=0;
    for(var x=0;x<none.length;x++){
        if(none[x].classList.contains("actimp")){
            k++
        }
    }
    if (k==18){
        setTimeout(function(){
            document.querySelector(".firework").classList.remove("firework--")
            document.querySelector(".diem").innerHTML=dataScore;
            if (dataMinute==0){
                document.querySelector(".tg").innerHTML=dataSecond +" Giây"
            }
            else
            document.querySelector(".tg").innerHTML=dataMinute+" Phút "+ dataSecond +" Giây"
            document.querySelector(".lat").innerHTML=dataFlip +" Lần"
        },1000)
    }
}

function updateSeconds(){
    if (dataSecond<10){
        second.innerHTML ="0" +dataSecond
    }
    else 
    second.innerHTML = dataSecond
}
function updateMinutes(){
    if (dataMinute<10){
        minute.innerHTML ="0" +dataMinute
    }
    else 
    minute.innerHTML = dataMinute
    
}
function timeRun(){
    setInterval(function(){
        setTimeout(function(){
            dataSecond++;
            updateSeconds()
        },1000)
        if (dataSecond==60){
            dataSecond=0;
            dataMinute++;
            updateMinutes(where)
        }
    },1000)
    
   
}