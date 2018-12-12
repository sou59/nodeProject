/*
app.get('env') === NODE_ENV
 console.log(app.get('env'));

*/

let config = null;

function loadFile(filename) {
    if (config === null) {
        config = require(filename);
    }
    return config;
}
exports.load = () => {
    const env = app.get('env');
    if(env === 'production') {
        return loadFile('./prod.json')
    } else if (env === 'development') {
        return loadFile('./dev.json')
    }
}
