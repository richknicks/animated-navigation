const menuBars = document.getElementById('menu-bars');
const overLay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav () {
    // Toggle Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overLay.classList.toggle('overlay-active');
    if (overLay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overLay.classList.remove('overlay-slide-left');
        overLay.classList.add('overlay-slide-right');
    } else {
        //  Animate Out - Overlay
        overLay.classList.remove('overlay-slide-right');
        overLay.classList.add('overlay-slide-left');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);