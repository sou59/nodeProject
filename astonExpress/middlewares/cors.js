/**
 * @see mdn cors
 */

module.exports = (req, res, next) => {
    /*nom de domaine*/
    res.header('Access-Control-Allow-Origin', '*');   // client angular 
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};