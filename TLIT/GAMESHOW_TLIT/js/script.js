function goToFindLove() {
  window.open('../FindLove/index.html', '_blank');
}
function goToFruitGame() {
  window.open('../FruitGame/index.html', '_blank');
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
  }, 300)
}
setTimeout(()=>{
  document.querySelector('.main').classList.remove("wait")
  document.querySelector('.loadding').classList.add("wait")
},5000)