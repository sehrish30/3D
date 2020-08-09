let x = 0,
    bool = false,
    interval;

const rotate = () => {
    const cubes = document.querySelectorAll('.cube');
    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
}

/*-------------------------------------
     toggling buttons
-------------------------------------*/

const changePlayPause = () => {
    const btn = document.querySelector('.play-pause i');
    const cls = btn.classList[1];
    if (cls == 'fa-play') {
        btn.classList.remove('fa-play');
        btn.classList.add('fa-pause');
    } else {
        btn.classList.remove('fa-pause');
        btn.classList.add('fa-play');
    }
}

const playPause = () => {
    if (!bool) {
        interval = setInterval(() => {
            x -= 90;
            rotate();
        }, 3000);
        changePlayPause();
        bool = true;
    } else {
        clearInterval(interval);
        bool = false;
        changePlayPause();
    }
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    x += 90;
    rotate();
    if (bool) {
        playPause();
    }
})

document.querySelector('.right-arrow').addEventListener('click', () => {
    x -= 90;
    rotate();
    if (bool) {
        playPause();
    }
})

document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    x += 25;
    rotate();
})

document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    x -= 25;
    rotate();
})

document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    x -= 25;
    rotate();
})

document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    x += 25;
    rotate();
})

/*-------------------------------------
     Play-Pause button
-------------------------------------*/
document.querySelector('.play-pause').addEventListener('click', () => {
    playPause();
})