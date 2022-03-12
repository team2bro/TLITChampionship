document.querySelector(".ico__helper").addEventListener("click", ()=>{
    if(document.querySelector(".helper--table").classList.contains("eblock")){
        document.querySelector(".helper--table").classList.remove("eblock")
    }
    else 
        document.querySelector(".helper--table").classList.add("eblock")
})
document.querySelector(".helper--table").addEventListener("click", (e)=>{
    e.stopPropagation();
})
document.querySelector(".ico__noti").addEventListener("click", ()=>{
    if(document.querySelector(".noti--table").classList.contains("eblock")){
        document.querySelector(".noti--table").classList.remove("eblock")
    } 
    else 
        document.querySelector(".noti--table").classList.add("eblock")
})
document.querySelector(".helper--table").addEventListener("click", (e)=>{
    e.stopPropagation();
})
const setTheme = theme => document.documentElement.className = theme;
function checkbox(x){
    if (x=="#off"){
        setTheme('light')
    }
    else 
        setTheme('dark')
    document.querySelector(x).checked=true
}
function openMoon(){
    document.querySelector(".f--helper").classList.add("nblock")
    document.querySelector(".moon--helper").classList.remove("nblock")
}
function closeMoon(){
    document.querySelector(".f--helper").classList.remove("nblock")
    document.querySelector(".moon--helper").classList.add("nblock")
}
var nB=0;
checkComment('.box--base')
function loveFirst(k){

    var i=document.querySelector(k+" .number--feel").textContent
    console.log(i)
    var loveBtn=document.querySelector(k+" .feel--love")
    var heart=  document.querySelector(k+" .heart")
    var feel=document.querySelector(k+" .number--feel")
    heart.classList.toggle("heart-active")
    loveBtn.classList.toggle("feel--love-active")
    if(loveBtn.classList.contains("feel--love-active") ){
        i++
        feel.innerText =i
    }
    else {
        i--
        feel.innerHTML=i


    }
};
function commentFirst(k){
var commentLove=document.querySelector(k+" .comment--love")
var closeAni=document.querySelector(k+" .close")
commentLove.classList.toggle("feel--love-active")
closeAni.classList.toggle("open2")

}
var btnClose=document.querySelector('.btn--close')
btnClose.addEventListener('click',function(){
    document.querySelector('.post').classList.remove('open')
})
function openBox(){
    document.querySelector('.post').classList.add('open')
}
function dangBai(){
   var status= document.querySelector("#khungdangbai").value
    document.querySelector(".status").innerHTML=`
    <div class="box box--${nB}" >
        <div class="box--header box--para">
            <div class="avt--box access__avt">
                <img class avt src="../main/img/avt.jpg" alt="avt">
            </div>
            <div class="access__name">
                <h5>Thắng</h5>
                <span class="time--post ctime">${Math.floor(Math.random() * 60)} giây · </span>
            </div>
        </div>
        <div class="box--body">
            <p> ${status}</p>
        </div>
        <div class="box--last">
            <div class="box--last__UI">
                <div class="feel__UI">
                    <img src="./assets/img/love.svg" alt="love">
                    <span class="number--feel">
                        0
                    </span>
                </div>
                <div class="comment__UI">
                    <span class="number--comment"></span> bình luận
                </div>
            </div>
            <hr  />
            <div class="box--last__UI2">
                <div class="UI2"> 
                    <div onclick="loveFirst('.box--${nB}')" class=" UI feel">
                        <span class="feel--love"><span class="heart"></span> Yêu thích</span>
                    </div>
                </div>
                <div class="UI2 ">
                    <div onclick="commentFirst('.box--${nB}')" class="UI comment">
                        <span class="comment--love"><i class="fa-solid fa-message"></i> Bình luận</span>
                    </div>
                </div>
            </div>
            <div class="box--comment close">
                <hr style="margin-top:10px;" />
    
                <div class="UXcomment">
                    <div class="comment--user">
                    </div>
                    <div class="mess__box">
                        <div class="access__avt active-access">
                            <img class avt src="../main/img/avt.jpg" alt="avt">
                            <div class="btn--active">
                            </div>
                        </div>
                        <div class="mess__text">
                            <input onclick="chatting('.box--${nB}')" class="chat__input" type="text" placeholder="Viết bình luận công khai..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`+document.querySelector(".status").innerHTML
    checkComment('.box--'+`${nB}`)
    getStatusAppear(document.querySelector(".appear").value,'.box--'+`${nB}`)
    nB++
}
function checkComment(k){
    var chat=document.querySelectorAll(k+" .chat")
    document.querySelector('.number--comment').innerHTML=chat.length
}
function chatting(k){
    var chatting=document.querySelector(k+" .chat__input");
    chatting.addEventListener("keydown",(e)=>{
        if (e.which==13 && chatting.value!=""){
            console.log(chatting.value)
            console.log(e.which)
            document.querySelector(k+" .comment--user").innerHTML=document.querySelector(k+" .comment--user").innerHTML+`
            <div class="chat">
            <div class="access__avt ">
                <img class avt src="../main/img/avt.jpg" alt="avt">
            </div>
            <div class="mess__chat">
                <div class="access__name">
                    <h5>Thắng</h5>
                    
                </div>
                <div class="chat--comment">
                    <p>${chatting.value}</p>
                </div>
            </div>
            </div>
            `
            chatting.value =""
            checkComment(k)
        }
    })   
}
function checkTime(){
    timeline(".box--base",8,0,0,8)
}
function timeline(k,hour, minute,second,date){
    var today = new Date();
    var timeHours=today.getHours();
    var timeDays = today.getDate();
    var timeMinutes = today.getMinutes();
    var timeSeconds = today.getSeconds();
    var giay=timeSeconds-second
    var phut=timeMinutes-minute
    var ngay=timeDays-date
    var gio=timeHours-hour
    if (ngay>0){
        document.querySelector(k+" .ctime").innerHTML=ngay+" ngày "
    }
    else if (gio>0){
        document.querySelector(k+" .ctime").innerHTML=gio+" giờ "
        }
        else if (phut>0){
            document.querySelector(k+" .ctime").innerHTML=phut+" phút "
            }
            else if (phut>0){
                document.querySelector(k+" .ctime").innerHTML=giay+" giây "
                }
}
function getStatusAppear(x,y){
    console.log(x)
    if (x==1){
       document.querySelector(y+" .ctime").innerHTML=document.querySelector(y+" .ctime").innerHTML+`<i class="time--post fa-solid fa-earth-americas"></i>`
    }
    if (x==2){
        document.querySelector(y+" .ctime").innerHTML=document.querySelector(y+" .ctime").innerHTML+`<i class="time--post fa-solid fa-user-group"></i>`
    }
}
