const OUT_DATE = document.querySelector(`.cardroom__sale-time`);
const SALE = document.querySelector(`.cardroom__sale`);

let time = 11880000;

const step = 1000;

const timeStep = setInterval(()=>{

    time -= step;

    let nowTime = new Date(time);

    let nowTimeHours = nowTime.getUTCHours();
    if (nowTimeHours < 10) nowTimeHours = `0${nowTimeHours}`;

    let nowTimeMinutes = nowTime.getUTCMinutes();
    if (nowTimeMinutes < 10) nowTimeMinutes = `0${nowTimeMinutes}`;

    let nowTimeSeconds = nowTime.getUTCSeconds();
    if (nowTimeSeconds < 10) nowTimeSeconds = `0${nowTimeSeconds}`;
    
    OUT_DATE.textContent = `${nowTimeHours}:${nowTimeMinutes}:${nowTimeSeconds}`;

    if(time < 0){
        clearInterval(timeStep);
        SALE.remove();
    };
}, step);