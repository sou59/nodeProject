const jwt = require('jsonwebtoken');

// clé secrete à ne jamais perdre
const JWT_SECRET_KEY = 'dskjh@jkhjkh&RRTdssdfsd213154654231piuQSD&llf$jksks';

// récupération des donnees de l'user, e jamais mettre de données sensible, pas dans les sessions non plus
// ici mode asynchrone donc on ne retourne rienn ici callback donc asynchrone
exports.generateToken = (user, callback) => {
    jwt.sign(
        {
            id: user.id,
            username: user.name
        },
        JWT_SECRET_KEY,
        {
            algorithm: 'HS256',
            expiresIn: 120
        },
        callback
    );
};

exports.checkToken = (token, callback) => {
    jwt.verify(
        token,
        JWT_SECRET_KEY,
        callback
    );
};

