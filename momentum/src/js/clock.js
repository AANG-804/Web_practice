const clock = document.querySelector("#Clock");


function renewClock(event) {
    const date = new Date()
    const new_hour = String(date.getHours()).padStart(2, "0");
    const new_minute = String(date.getMinutes()).padStart(2, "0");
    const new_second = String(date.getSeconds()).padStart(2, "0");
    console.log(`${new_hour}:${new_minute}:${new_second}`);
    clock.innerText = `${new_hour}:${new_minute}:${new_second}`;
}

renewClock()
setInterval(renewClock, 1000);