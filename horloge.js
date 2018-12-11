// fonctio que l'on peur réutiliser

function clockdisplay(date) {
    // équivalent \r
    // process : processus courant de ton programme, on écrit dans la sortie
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    const data = date.toLocaleString().split(' '); // date local en chaine de caractère
    process.stdout.write(data[1]); // en récupère la partie heure:min:sec
}

setInterval(function() {
    clockdisplay(new Date());
}, 1000);