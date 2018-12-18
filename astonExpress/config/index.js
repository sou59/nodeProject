/*
app.get('env') === NODE_ENV
 console.log(app.get('env'));
*/
const fs = require('fs');
const path = require('path');

let config = null;

function loadFile(filename) {
    if (!fs.existsSync(filename)) {
        throw new Error(`"${filename}" does not exist`)
    }
    if (config === null) {
        config = require(filename);
    }
    return config;
}

exports.load = () => {
    const env = app.get('env');
    return loadFile(path.join(__dirname, `${env}.json`));
}
