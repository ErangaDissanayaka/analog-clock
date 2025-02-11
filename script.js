document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body"),
        hourHand = document.querySelector(".hour"),
        minuteHand = document.querySelector(".minute"),
        secondHand = document.querySelector(".second"),
        modeSwitch = document.querySelector(".mode-switch");

    const updateTime = () => {
        let date = new Date();

        const hourToDeg = ((date.getHours() % 12) / 12) * 360 + (date.getMinutes() / 60) * 30;
        const minToDeg = (date.getMinutes() / 60) * 360 + (date.getSeconds() / 60) * 6;
        const secToDeg = (date.getSeconds() / 60) * 360;

        if (hourHand && minuteHand && secondHand) {
            hourHand.style.transform = `rotate(${hourToDeg}deg)`;
            minuteHand.style.transform = `rotate(${minToDeg}deg)`;
            secondHand.style.transform = `rotate(${secToDeg}deg)`;
        }
    };

    
    setInterval(updateTime, 1000);

    updateTime();

    

        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");
            modeSwitch.textContent = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
        });
    
});
