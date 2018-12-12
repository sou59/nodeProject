// jabascript pas typé donc pas d'autocompletion

/**
 * @param {string} value 
 */
exports.toUpper = value => { // exports.nom = valeur (fonction, objet, caratère...)
    return value.toUpperCase();
}

// idem en es6 ou 7 s'il y a un return paramètre => le return sans un mot return
exports.toUpper = value => value.toUpperCase();

// pour exporter pour que cette fonction soit accessible d'ailleurs
// sans parenthese pour ne pas l'executer
// exports.toUpper = toUpper; 

// pour exporter autre chose qu'un objet
module.exports = function() {};


