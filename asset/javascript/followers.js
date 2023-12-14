const counter = document.querySelector('.counter');
const counter1 = document.querySelector('.counter1');
const counter2 = document.querySelector('.counter2');
let load = 0;
let load1 = 0;
let load2 = 0;

let int = setInterval(counterFor, 1);

function counterFor() {
    load++

    if (load == 168) {
        clearInterval(int);
    }
    counter.innerText = load + "K";
}


let int1 = setInterval(counterFor1, 1);

function counterFor1() {
    load1++

    if (load1 == 340) {
        clearInterval(int1);
    }
    counter1.innerText = load1 + "K";
}

let int2 = setInterval(counterFor2, 1);

function counterFor2() {
    load2++

    if (load2 == 289) {
        clearInterval(int2);
    }
    counter2.innerText = load2 + "K";
}

// another way to 


// const counters = document.querySelectorAll('.counter')

// counters.forEach(counter => {
//     counter.innerText = '0'

//     const updateCounter = () => {
//         const target = +counter.getAttribute('data-target')
//         const c = +counter.innerText

//         const increment = target / 200

//         if(c < target) {
//             counter.innerText = `${Math.ceil(c + increment)}`
//             setTimeout(updateCounter, 1)
//         } else {
//             counter.innerText = target
//         }
//     }

//     updateCounter()
// })