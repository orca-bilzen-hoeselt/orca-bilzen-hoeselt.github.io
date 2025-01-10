function updateClock() {
    const clockElement = document.getElementById('clock');

    // Create a new Date object and adjust for Belgium timezone (UTC +2 in daylight saving, +1 otherwise)
    const date = new Date();
    const options = { timeZone: 'Europe/Brussels', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const time = date.toLocaleTimeString('en-GB', options);

    clockElement.innerText = time;
}

// Update the clock every second
setInterval(updateClock, 100);

// Initial call to set the time immediately
updateClock();
