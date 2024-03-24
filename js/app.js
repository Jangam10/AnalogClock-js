console.log("We are making a clock")

setInterval(() => {
    let date = new Date();
    htime = date.getHours();
    if (htime>12) {
        htime = htime-12;
    }
    mtime = date.getMinutes();
    stime = date.getSeconds();
    // console.log(htime,mtime,stime);
    
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6 *stime;
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`; 
}, 1000);

