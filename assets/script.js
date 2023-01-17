const newYear = '1 jan 2024';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let mins = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;
    

}