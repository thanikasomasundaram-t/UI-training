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
                formula: '&pi; r * r',
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

const outputContainer = document.querySelector(".output-container");


// WHEN SHAPES CLICKED, TICK APPEARS

document.querySelector('.shapes').addEventListener('click', (event) => {
    let children = event.target.parentElement.children;

    for(i in children) {
        if(children[i].className === event.target.className) {
            let tick = document.createElement('div');
            tick.className = 'tick';
            event.target.appendChild(tick);
            document.querySelector('.button').style.visibility = 'visible';
        }
        else {
            children[i].innerHTML = '';
        }
    }
    localStorage.setItem('shape', event.target.className);
});

// CLICK NEXT BUTTON - STEP1

document.querySelector('#next-button').addEventListener('click', (event) => {
    document.querySelector('.step-1').style.display='none';
    document.querySelector('.step-2').style.display='flex';

    // ADD HAEDING RESPECTIVE TO SELECTED SHAPE
    let selectedShape = localStorage.getItem('shape');

    document.querySelector('#step2 > .heading').innerHTML = shapes[selectedShape].heading;
});


// CLICK CALCULATE BUTTON - STEP2

document.querySelector('#calculate-button').addEventListener('click', (event) => {
    document.querySelector('.step-2').style.display='none';
    document.querySelector('.step-3').style.display='flex';

    let selectedShape = localStorage.getItem('shape');

    let spanShape = document.querySelector('.step-3 > span');

    spanShape.className = selectedShape;
    spanShape.style.height = '155px';

    let heading = document.querySelector('#step3 > .heading');
    heading.innerHTML = shapes[selectedShape].fullName;

    localStorage.setItem('userValue', document.querySelector('input').value);

    // CREATE TABLE FOR DISPLAYING OUTPUT CALCULATIONS
    const fragement = new DocumentFragment();

    for(index = 0; index<3; index++) {
        const selectedShape = localStorage.getItem('shape')

        let parentDiv = document.createElement('div');

        let propertyName = document.createElement('span');
        let formula = document.createElement('span');
        let value = document.createElement('span');

        propertyName.innerHTML = shapes[selectedShape].property[index].name;
        formula.innerHTML = shapes[selectedShape].property[index].formula;
        value.innerHTML = shapes[selectedShape].property[index].solution(localStorage.getItem('userValue'));
        
        parentDiv.appendChild(propertyName);
        parentDiv.appendChild(formula);
        parentDiv.appendChild(value);
        fragement.appendChild(parentDiv);
    };

    outputContainer.appendChild(fragement);

});

// CLICK START AGAIN BUTTON - STEP3

document.querySelector('#start-again-button').addEventListener('click', () => {
    document.querySelector('.step-3').style.display='none';
    document.querySelector('.step-1').style.display='flex';

    outputContainer.innerHTML = '';

    let selectedShape = localStorage.getItem('shape');
    document.querySelector('.'+selectedShape).innerHTML = '';

    document.querySelector('input').value = '';

    localStorage.removeItem('shape');
    localStorage.removeItem('userValue');
});





