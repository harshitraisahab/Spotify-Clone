console.log("welcome to spotify");

//initializing the variables 

let songindex=0;
let audioelement= new Audio('1.mp3');
// audioelement.play();
let play=document.getElementById('play');
let gif=document.getElementById('gif');
let progressbar=document.getElementById('progressbar');

let songitems= Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songname:"dekha teri mast nighoan",filepath:"1.mp3",coverpath:"1.jpg"},
    {songname:"ali ali",filepath:"2.mp3",coverpath:"2.jpg"},
    {songname:"Haath mera thaam lo",filepath:"3.mp3",coverpath:"3.jpg"},
    {songname:"Teri woh batein ",filepath:"4.mp3",coverpath:"4.jpg"},
    {songname:"kamr patli",filepath:"5.mp3",coverpath:"5.jpg"},
    {songname:"Boys attitude",filepath:"6.mp3",coverpath:"6.jpg"},
    {songname:"hmare saath raghunath",filepath:"7.mp3",coverpath:"7.jpg"},
     
]

songitems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src =songs[i].coverpath;
    //  element.getElementsByName('img')[0].src =song[i].coverpath;
    element.getElementsByClassName('songname')[0].innerHTML = songs[i].songname;
});
// audioelement.play();
// 

//handle play/pause click
play.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime <= 0){
     audioelement.play();
play.classList.remove('fa-circle-play');
play.classList.add('fa-circle-pause');
gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to events

audioelement.addEventListener('timeupdate',()=>{
//update seekbar
let progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
progressbar.value = progress;

})

progressbar.addEventListener('change',()=>{
    audioelement.currentTime = ((progressbar.value * audioelement.duration)/100);
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeallplays();
      songindex = parseInt(e.target.id);
    //   console.log(index);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    audioelement.src= `${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songindex >=  7){

        songindex =0;    }
        else{
            songindex+=1;
        }
        audioelement.src= `${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songindex <= 0){

        songindex = 0;    }
        else{
            songindex-=1;
        }
        audioelement.src= `${songindex}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
})


















