const music = new Audio('audio/1.mp3');

const songs =[
    {
        id: "1",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/1.jpg',
    },

    {
        id: "2",
        songName:`On My Way <br> <div class="sub">Son Tung</div>`,
        poster:'img/2.jpg',
    },
    {
        id: "3",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/3.jpg',
    },
    {
        id: "4",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/4.jpg',
    },
    {
        id: "5",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/5.jpg',
    },
    {
        id: "6",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/6.jpg',
    },
    {
        id: "7",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/7.jpg',
    },
    {
        id: "8",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/8.jpg',
    },
    {
        id: "9",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/9.jpg',
    },
    {
        id: "10",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/10.jpg',
    },
    {
        id: "11",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/11.jpg',
    },
    {
        id: "12",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/12.jpg',
    },
    {
        id: "13",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/13.jpg',
    },
    {
        id: "14",
        songName:`On My Way <br><div class="sub">Alan Walker</div>`,
        poster:'img/14.jpg',
    },
    {
        id: "15",
        songName:`On My Way <br><div class="sub">Alan Walker</div>`,
        poster:'img/15.jpg',
    },
    {
        id: "16",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/16.jpg',
    },
    {
        id: "17",
        songName:`On My Way <br> <div class="sub">Alan Walker</div>`,
        poster:'img/17.jpg',
    },
    {
        id: "18",
        songName:`On My Way <br><div class="sub">Alan Walker</div>`,
        poster:'img/18.jpg',
    },
    {
        id: "19",
        songName:`On My Way <br><div class="sub">Alan Walker</div>`,
        poster:'img/19.jpg',
    },
    {
        id: "20",
        songName:`On My Way <br><div class="sub">Alan Walker</div>`,
        poster:'img/20.jpg',
    },
    
]

Array.from(document.getElementsByClassName('SongItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    
});

//Search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `<img src="${poster}" alt=""><div class="content1">${songName}</div>`;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content1')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if(input_value == 0){
            search_results.style.display = "none";

        }
        else{
            search_results.style.display = "";
        }
        
    }
});

//Search data end


let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");
masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime <= 0)
        {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        }
    else
        {
            music.pause();
            wave.classList.remove('active1');
            masterPlay.classList.remove('bi-pause-fill');
            masterPlay.classList.add('bi-play-fill');
        }
    
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 470;

});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 490;

});

let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_artist_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 500;

});

pop_artist_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 500;

});
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
            el.classList.add('bi-play-circle-fill');
            el.classList.remove('bi-pause-fill');
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('SongItem')).forEach((el) => {
        el.style.background = 'rgb(105,105,105,.0)'
    })
}
let index = 1;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
let download_music = document.getElementById('download_music');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');
        download_music.href = `audio/${index}.mp3`;
        let songTitles = songs.filter((els) => {
            return els.id==index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
            let name = songName.split("<br>").join("");
            name = name.split('<div class="sub">').join("");
            name = name.split('</div>').join('');
            download_music.setAttribute('download', name);
            
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = 'rgb(105,105,105,.1)';
        makeAllplays();
        el.target.classList.add('bi-pause-circle');
        el.target.classList.remove('bi-play-circle-fill');
    })
    

})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }

    currentStart.innerText =`${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) *100);
    seek.value = progressBar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left =`${seekbar}%`;


});


seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100; 
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value ==0 ){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    }
    if (vol.value > 50){
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    if(index > 1)
    index -=1;
    else 
    index = 1;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    download_music.href = `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id==index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        let name = songName.split("<br>").join("");
            name = name.split('<div class="sub">').join("");
            name = name.split('</div>').join('');
            download_music.setAttribute('download', name);
        
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = 'rgb(105,105,105,.1)';
    makeAllplays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle');
    
});

next.addEventListener('click', ()=>{
    if(index < Array.from(document.getElementsByClassName('SongItem')).length)
    index ++;
    else
    index = 1;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    download_music.href = `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id==index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        let name = songName.split("<br>").join("");
            name = name.split('<div class="sub">').join("");
            name = name.split('</div>').join('');
            download_music.setAttribute('download', name);
        
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = 'rgb(105,105,105,.1)';
    makeAllplays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle');
    
});



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{

    let a = shuffle.innerHTML;

    switch(a){
        case "next":
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-repeat-1');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = "repeat1";
            break;
        case "repeat1":
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.classList.remove('bi-repeat-1');
            shuffle.innerHTML = "random";
            break;
        case "random":
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.remove('bi-repeat-1');
            shuffle.innerHTML = "next";
            break;

    }
});

const next_music = ()=>{
    if(index < Array.from(document.getElementsByClassName('SongItem')).length)
    index ++;
    else
    index = 1;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    download_music.href = `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id==index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        let name = songName.split("<br>").join("");
            name = name.split('<div class="sub">').join("");
            name = name.split('</div>').join('');
            download_music.setAttribute('download', name);
        
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = 'rgb(105,105,105,.1)';
    makeAllplays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle');
}

const repeat_music = ()=>{
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    download_music.href = `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id==index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        let name = songName.split("<br>").join("");
            name = name.split('<div class="sub">').join("");
            name = name.split('</div>').join('');
            download_music.setAttribute('download', name);
        
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = 'rgb(105,105,105,.1)';
    makeAllplays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle');
}
music.addEventListener('ended', ()=>{

})
const random_music = ()=>{

    if(index == Array.from(document.getElementsByClassName('SongItem')).length)
    index = 1;
    else
    index = Math.floor((Math.random() * Array.from(document.getElementsByClassName('SongItem')).length) + 1);

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');
    download_music.href = `audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id==index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        let name = songName.split("<br>").join("");
            name = name.split('<div class="sub">').join("");
            name = name.split('</div>').join('');
            download_music.setAttribute('download', name);
        
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = 'rgb(105,105,105,.1)';
    makeAllplays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle');
}
music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch(b){
        case "next":
            next_music();
            break;
        case "repeat1":
            repeat_music();
            break;
        case "random":
            random_music();
            break;
    }
})
