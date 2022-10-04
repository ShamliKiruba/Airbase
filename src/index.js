import { componentOne } from './componentOne';
import { componentTwo } from './componentTwo';


export const shimmmer = (component) => {
    /* left side - raw data */
    var rawData = document.createElement('div');
    rawData.innerHTML = component();
    const leftPane = document.getElementById("leftPane");
    if(leftPane.firstElementChild) {
        leftPane.removeChild(leftPane.firstElementChild);
    }
    leftPane.appendChild(rawData);

    /* right side - shimmer data */
    var shimmerData = document.createElement('div');
    shimmerData.innerHTML = component();
    const rightPane = document.getElementById("rightPane");
    if(rightPane.firstElementChild) rightPane.removeChild(rightPane.firstElementChild);
    rightPane.appendChild(shimmerData);
    
    /* Targeting all the end nodes of DOM */
    var all = rightPane.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
        if(all[i].children.length == 0) {
            console.log('target element', all[i]);
            all[i].classList.add('animate');
        }
    }
};

document.getElementsByTagName('select')[0].addEventListener('change', (e) => {
    if(e.target.value == 1) {
        shimmmer(componentOne);
    } else {
        shimmmer(componentTwo);
    }
});

shimmmer(componentOne);