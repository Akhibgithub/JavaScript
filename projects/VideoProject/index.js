
const Btn = document.querySelector('.switch-btn')
const Video = document.querySelector('.video-container')

Btn.addEventListener('click', ()=>{
    if(!Btn.classList.contains('slide')){
        Btn.classList.add('slide')
        Video.pause();
    } else{
        Btn.classList.remove('slide')
        Video.play();
    }
})

//preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', ()=>{
    preloader.classList.add('hide-preloader')
})