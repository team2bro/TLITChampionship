function goToFindLove() {
  window.open('../FindLove/index.html', '_blank');
}
function goToChatChung() {
  window.open('https://chatchungtlit.herokuapp.com/', '_blank')
}
function speech1() {
  document.querySelector('.speech1').play()
}
function speech2() {
  document.querySelector('.speech2').play()
}
function speech3() {
  document.querySelector('.speech3').play()
}
function speech4() {
  document.querySelector('.speech4').play()
}
function returnPage() {
  location.href = "../../Web_TLIT/index.html"
}
function botSupported() {
  document.querySelector('.speech1').play()
  document.querySelector('.addbot').innerHTML = `
  <div class="bot bot--1">
            <div class="bot--sister__talk setout_text">
                <div class="bot--sister ">
                    <img onclick="speech1()"  src="./CSS/IMG/bot.png" alt="bot">
                </div>
                <div class="anim-typewriter line-1"> 
                    Xin chào mình là cô bot của TLIT. Rất vui được giúp đỡ bạn.
                </div>
                <div class="anim-typewriter line-1"> 
                    Bạn đã biết được những tính năng trang GAMESHOW này chưa.
                </div>
            </div>
            <div class="btn--bot setout">
                <button onclick="closebotbtn1()" class="yes btn__bot">
                    Rồi!
                </button>
                <button onclick="goOn1()" class="no btn__bot ">
                    Chưa!
                </button>
            </div>
    </div>

    <div class="bot bot--2">
        <div class="bot--sister__talk setout_text2">
            <div class="bot--sister ">
                <img onclick="speech2()" src="./CSS/IMG/bot.png" alt="bot">
            </div>
            <div class="anim-typewriter line-1"> 
                Click vào đây để phát nhạc, sẽ giúp bạn giải tỏa căng thắng
            </div>
            <div class="anim-typewriter line-1"> 
                Tất nhiên khi bạn click lần nữa thì nhạc sẽ dừng 
            </div>
        </div>
        <div class="btn--bot setout2">
            <button onclick="closebotbtn2()" class="yes btn__bot">
                Đã hiểu!
            </button>
            <button onclick="goOn2()" class="no btn__bot ">
                Tiếp tục
            </button>
        </div>
    </div>

    <div class="bot bot--3">
        <div class="bot--sister__talk setout_text3">
            <div class="bot--sister ">
                <img onclick="speech3()" src="./CSS/IMG/bot.png" alt="bot">
            </div>
            <div class="anim-typewriter line-1"> 
                Click vào đây để tới FindLove và ChatChungTLIT. Do ChatChungTLIT
            </div>
            <div class="anim-typewriter line-1"> 
                chưa hoàn thiện, 
                nên chỉ vào test chứ dùng mess tiện hơn :)
            </div>
            <div class="anim-typewriter line-1"> 
            </div>
        </div>
        <div class="btn--bot setout3">
            <button onclick="closebotbtn3()" class="yes btn__bot">
                Đã hiểu!
            </button>
            <button onclick="goOn3()" class="no btn__bot ">
                Tiếp tục
            </button>
        </div>
    </div>

    <div class="bot bot--4">
        <div class="bot--sister__talk set__ setout_text4">
            <div class="bot--sister ">
                <img onclick="speech4()" src="./CSS/IMG/bot.png" alt="bot">
            </div>
            <div class="anim-typewriter line-1"> 
                Click vào cây thông để đến phần nhạc dành riêng cho chị Trang.
            </div>
            <div class="anim-typewriter line-1"> 
                Đừng vào khi bạn chưa được cho phép của chị Trang.
            </div>
            <div class="anim-typewriter line-1"> 
            </div>
        </div>
        <div class="btn--bot setout4">
            <button onclick="closebotbtn4()" class="yes btn__bot">
                kết thúc!
            </button>
        </div>
    </div>
  `
}

var el = document.getElementById("pacman");

function go2048() {
  window.open('https://play2048.co/', '_blank');
}
var btnPacman = document.querySelector('.btn__pacman')
var closePacMan = document.querySelector('.close')

btnPacman.addEventListener('click', () => {
  if (!document.querySelector('.gamepacmanmodal').classList.contains('kiemtra')) {
    document.querySelector('.gamepacmanmodal').classList.add('kiemtra')
    if (Modernizr.canvas && Modernizr.localstorage) {
      window.setTimeout(function () { PACMAN.init(el, "./"); }, 0);
    } else {
      el.innerHTML = "Sorry, needs a decent browser<br /><small>" +
        "(firefox 3.6+, Chrome 4+, Opera 10+ and Safari 4+)</small>";
    }
  }
  document.querySelector('.gamepacmanmodal').classList.add('open')
})
closePacMan.addEventListener('click', () => {
  document.querySelector('.gamepacmanmodal').classList.remove('open')
})
var playMusic = document.querySelector('.icon__cute__1')
var music = document.querySelector('.music')
playMusic.addEventListener('click', () => {
  if (music.paused) {
    music.play()
  }
  else {
    music.pause()

  }
})
function closebotbtn1() {
  document.querySelector('.setout').classList.add('godropclose')
  document.querySelector('.setout_text').classList.add('godropclosetext')
  setTimeout(function () {
    document.querySelector('.bot--1').classList.add('close__')

  }, 800)

}
function goOn1() {
  document.querySelector('.bot--1').classList.add('close__')
  document.querySelector('.bot--2').classList.add('open__')
  document.querySelector('.icon__cute__1').classList.add('help__music')
  document.querySelector('.speech2').play()
}
function closebotbtn2() {
  var a = document.querySelectorAll('.setout2')
  a.forEach(x => x.classList.add('godropclose'));
  document.querySelector('.setout_text2').classList.add('godropclosetext')
  setTimeout(function () {
    document.querySelector('.bot--2').classList.remove('open__')
    document.querySelector('.bot--2').classList.add('close__')
    document.querySelector('.icon__cute__1').classList.remove('help__music')
  }, 800)

}
function goOn2() {
  document.querySelector('.bot--2').classList.remove('open__')
  document.querySelector('.bot--3').classList.add('open__')
  var b = document.querySelectorAll('.btn__')
  b.forEach(x => x.classList.add('help__btn'))
  document.querySelector('.speech3').play()
  document.querySelector('.icon__cute__1').classList.remove('help__music')
}
function closebotbtn3() {
  var a = document.querySelectorAll('.setout3')
  a.forEach(x => x.classList.add('godropclose'));
  document.querySelector('.setout_text3').classList.add('godropclosetext')
  setTimeout(function () {
    document.querySelector('.bot--3').classList.remove('open__')
    var b = document.querySelectorAll('.btn__')
    b.forEach(x => x.classList.remove('help__btn'))

  }, 800)
}
function goOn3() {
  document.querySelector('.bot--3').classList.remove('open__')
  document.querySelector('.bot--4').classList.add('open__')
  document.querySelector('.caythong').classList.add('help__caythong')
  document.querySelector('.speech4').play()
  var b = document.querySelectorAll('.btn__')
  b.forEach(x => x.classList.remove('help__btn'))
}
function closebotbtn4() {
 document.querySelector('.setout4').classList.add('godropclose');
  document.querySelector('.setout_text4').classList.add('godropclosetext')
  setTimeout(function () {
    document.querySelector('.bot--4').classList.remove('open__')
    document.querySelector('.caythong').classList.remove('help__caythong')
  }, 800)
}
// music here
var noel = document.querySelector('.caythong')
noel.addEventListener('click', () => {
  document.querySelector('.modal--caythong').classList.remove('caythongout')
  document.querySelector('.modal--music').classList.add('open')
  document.querySelector('.modal--caythong').classList.add('caythongin')
  var checkMusic = document.querySelector('#music')
  checkMusic.onchange = checkMusicChange
  function checkMusicChange() {
    var a = checkMusic.options[checkMusic.selectedIndex].value
    console.log(typeof (a))
    switch (a) {
      case '1':
        document.querySelector('.song--play').outerHTML = `
        <audio class='song--play play1' controls >
        <source class="theSong Song1" src="./Audio-Trang sister/Brenda Lee  Rockin Around The Christmas Tree Official Lyric Video.mp3" type="audio/mp3">
        </audio>
        `;
        break;
      case '2':
        document.querySelector('.song--play').outerHTML = `
        <audio class='song--play play2' controls >
        <source class="theSong Song1" src="./Audio-Trang sister/Elvis Presley  Cant Help Falling In Love Audio.mp3" type="audio/mp3">
        </audio>
        `;
        break;
      case '3':
        document.querySelector('.song--play').outerHTML = `
        <audio class='song--play play3' controls >
        <source class="theSong Song1" src="./Audio-Trang sister/Frank Sinatra  Jingle Bells.mp3" type="audio/mp3">
        </audio>
        `;
        break;
      case '4':
        document.querySelector('.song--play').outerHTML = `
        <audio class='song--play play4' controls >
        <source class="theSong Song1" src="./Audio-Trang sister/Life Could Be A Dream Trap Remix.mp3" type="audio/mp3">
        </audio>
        `;
        break;
      case '5':
        document.querySelector('.song--play').outerHTML = `
        <audio class='song--play play5' controls >
        <source class="theSong Song1" src="./Audio-Trang sister/Michael Bublé  Holly Jolly Christmas Official HD.mp3" type="audio/mp3">
        </audio>
        `;
        break;
      case '6':
        document.querySelector('.song--play').outerHTML = `
        <audio class='song--play play6' controls >
        <source class="theSong Song1" src="./Audio-Trang sister/Michael Bublé  Its Beginning To Look A Lot Like Christmas Official HD Audio.mp3" type="audio/mp3">
        </audio>
        `;
        break;
      case '7':
        document.querySelector('.song--play').outerHTML = `
        <audio class='song--play play7' controls >
        <source class="theSong Song1" src="./Audio-Trang sister/Sleigh Ride Christmas Song with Lyrics.mp3" type="audio/mp3">
        </audio>
        `;
        break;
      case '8':
        document.querySelector('.song--play').outerHTML = `
        <audio class='song--play play8' controls >
        <source class="theSong Song1" src="./Audio-Trang sister/VietsubLyrics Last Christmas  George Michael  Wham  Beth Acoustic Piano Cover.mp3" type="audio/mp3">
        </audio>
        `;
        break;
    }
  }
})
function closeMusic() {

  document.querySelector('.modal--caythong').classList.remove('caythongin')

  document.querySelector('.modal--caythong').classList.add('caythongout')
  setTimeout(function () {
    document.querySelector('.modal--music').classList.remove('open')
  }, 500)
}
