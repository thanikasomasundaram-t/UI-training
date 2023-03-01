// SHAPE OBJECT
const shapes = {
    circle: {
        heading: "2. Enter Radius",
        property: [
            {
                name: 'RADIUS',
                formula: 'r',
                solution: (radius) => radius + ' cm',
            },
            {
                name: 'AREA',
                formula: '&pi; r * r;',
                solution: (radius) => parseFloat((22/7 * radius * radius).toFixed(2)) + ' sq cm',
            },
            {
                name: 'PERIMETER',
                formula: '2 &pi; r',
                solution: (radius) => parseFloat((2 * 22/7 * radius).toFixed(2)) + ' cm',
            },
        ],
        fullName: 'Circle',
    },
    triangle: {
        heading: "2. Enter Side (Base & Height)",
        property: [
            {
                name: 'SIDE',
                formula: 's',
                solution: (radius) => radius + ' cm',
            },
            {
                name: 'AREA',
                formula: '0.433 * s * s',
                solution: (radius) => parseFloat((22/7 * radius * radius).toFixed(2)) + ' sq cm',
            },
            {
                name: 'PERIMETER',
                formula: '3 * s',
                solution: (radius) => parseFloat((2 * 22/7 * radius).toFixed(2)) + ' cm',
            },
        ],
        fullName: 'Equilateral Triangle',
    },
    square: {
        heading: "2. Enter Radius",
        property: [
            {
                name: 'RADIUS',
                formula: 's',
                solution: (radius) => radius + ' cm',
            },
            {
                name: 'AREA',
                formula: 's * s',
                solution: (radius) => parseFloat((22/7 * radius * radius).toFixed(2)) + ' sq cm',
            },
            {
                name: 'PERIMETER',
                formula: '4 * s',
                solution: (radius) => parseFloat((2 * 22/7 * radius).toFixed(2)) + ' cm',
            },
        ],
        fullName: 'Square',
    }
}

// WHEN SHAPES CLICKED, TICK APPEARS

document.querySelector('.shapes').addEventListener('click', (event) => {
    let children = document.querySelector('.shapes').children;
    console.log(document.querySelector('.shapes').children);

    for(i in children) {
        if(children[i].className === event.target.className) {
            let tick = document.createElement('div');
            tick.className = 'tick';
            event.target.appendChild(tick);
        }
        else {
            children[i].innerHTML = '';
        }
    }
    localStorage.setItem('shape', event.target.className)
});

// CLICK NEXT BUTTON - STEP1

document.querySelector('#next-button').addEventListener('click', (event) => {
    document.querySelector('.step-1').style.display='none';
    document.querySelector('.step-2').style.display='flex';

    let selectedShape = localStorage.getItem('shape');

    document.querySelectorAll('.heading')[1].innerHTML = shapes[selectedShape].heading;
});


// CLICK CALCULATE BUTTON - STEP2

document.querySelector('#calculate-button').addEventListener('click', (event) => {
    document.querySelector('.step-2').style.display='none';
    document.querySelector('.step-3').style.display='flex';

    let selectedShape = localStorage.getItem('shape');

    let spanShape = document.querySelector('.step-3 > span');

    spanShape.className = selectedShape;
    spanShape.style.height = '155px';

    let heading = document.querySelectorAll('.heading')[2];
    console.log("iiii", heading);
    heading.innerHTML = shapes[selectedShape].fullName;

    localStorage.setItem('userValue', document.querySelector('input').value);
    console.log(document.querySelector('input').value);

    let outputContainer1 = document.querySelector('.output-container').children;
    console.log("ithan da ");
    console.log(outputContainer1);

    let outputContainer = document.querySelectorAll(".output-container > div");
    
    for(index in outputContainer) {
        let propertyName = document.createElement('span');
        let formula = document.createElement('span');
        let value = document.createElement('span');
        console.log(shapes[selectedShape].property[index].name);

        propertyName.innerHTML = shapes[selectedShape].property[index].name;
        formula.innerHTML = shapes[selectedShape].property[index].formula;
        value.innerHTML = shapes[selectedShape].property[index].solution(localStorage.getItem('userValue'));
        
        outputContainer[index].appendChild(propertyName);
        outputContainer[index].appendChild(formula);
        outputContainer[index].appendChild(value);
    };

});

// CLICK START AGAIN BUTTON - STEP3

document.querySelector('#start-again-button').addEventListener('click', (event) => {
    document.querySelector('.step-3').style.display='none';
    document.querySelector('.step-1').style.display='flex';

    let outputContainer = document.querySelectorAll(".output-container > div");

    let selectedShape = localStorage.getItem('shape');
    console.log("ffff", document.querySelector('.'+selectedShape).innerHTML = '');
    for(index in outputContainer) {
        outputContainer[index].innerHTML='';
    };
});





