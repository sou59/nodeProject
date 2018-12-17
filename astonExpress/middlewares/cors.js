/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTTP/CORS
 */
module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-Width, Content-Type');
    next();
};