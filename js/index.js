'use strict';

const spanF = document.querySelectorAll('.flower>span');

function scaF(){
    spanF.forEach((el, idx) => {
        el.style.transform = 'scale(0.5)';
        setTimeout(rotat1, 800);
    });
};

function rotat1() {
    spanF.forEach((el, idx) => {
        el.style.transform = 'translate(10px) rotate(10deg) scale(0.7)';
        setTimeout(rotat2, 800);
    });
};
function rotat2() {
    spanF.forEach((el, idx) => {
        el.style.transform = 'translate(-10px) rotate(-10deg) scale(1.1)';
        setTimeout(rotat3, 800);
    });
};
function rotat3() {
    spanF.forEach((el, idx) => {
        el.style.transform = 'translate(0) rotate(0) scale(1)';
        setTimeout(sca, 1000);
    });
};
function sca() {
    spanF.forEach((el, idx) => {
        el.classList.add('flower-anim');
        el.style.transition= 'all 1s';
    });
};

scaF();
// (()=>{
//     scaF();
// })();