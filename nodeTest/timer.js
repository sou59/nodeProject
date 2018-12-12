// horlogue digital
let heure = 0;
let min = 0;
let sec = 0;

setInterval(function() {

    seconds++

    process.stdout.write(`\r${h}:${m}:${s} loading...`);
    counter++;

}, 1000);

function numberformat() {
    if (String(value).length === 1) {
        return '0' + value;
    }
    return value;
}