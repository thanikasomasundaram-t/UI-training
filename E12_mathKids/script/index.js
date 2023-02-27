const shapes = {
    circle: {
        heading: "2. Enter Radius",
        area: ()=> {
            console.log();
        },
        perimeter: 2 * 22.7 * 1,
    }
}

document.querySelector('.shapes').addEventListener('click', (event) => {
    let children = document.querySelector('.shapes').children;

    for(i in children) {
        children[i].innerHTML = '';
    }

    // TICK ELEMENT
    let tick = document.createElement('div');
    tick.className = 'tick';
    event.target.appendChild(tick);

    // localStorage.setItem('')
});

document.querySelector('#next-button').addEventListener('click', (event) => {
    document.querySelector('.step-1').style.display='none';
    document.querySelector('.step-2').style.display='flex';
});

document.querySelector('#calculate-button').addEventListener('click', (event) => {
    document.querySelector('.step-2').style.display='none';
    document.querySelector('.step-3').style.display='flex';
});

document.querySelector('#start-again-button').addEventListener('click', (event) => {
    document.querySelector('.step-3').style.display='none';
    document.querySelector('.step-1').style.display='flex';
});
