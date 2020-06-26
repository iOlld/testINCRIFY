const OUT_DATE = document.querySelector(`.cardroom__sale-time`)

let time = 11880000 / 1000;

let timeStep = setInterval(()=>{

    let timeDown = time--;

    if(time === 0) time = 11880

    timeDown = timeDown * 1000;

    let nowTime = new Date(timeDown);

    let nowTimeHours = nowTime.getUTCHours();
    if (nowTimeHours < 10) {
        nowTimeHours = `0${nowTimeHours}`;
    }
    let nowTimeMinutes = nowTime.getUTCMinutes();
    if (nowTimeMinutes < 10) {
        nowTimeMinutes = `0${nowTimeMinutes}`;
    }
    let nowTimeSeconds = nowTime.getUTCSeconds();
    if (nowTimeSeconds < 10) {
        nowTimeSeconds = `0${nowTimeSeconds}`;
    }
    
    OUT_DATE.textContent = `${nowTimeHours}:${nowTimeMinutes}:${nowTimeSeconds}`;

}, 1000);