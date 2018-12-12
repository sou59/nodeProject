/*
arguments 
.\arguments. js toto 50
comment récupérer ces arguments ?
les arguments sont dans l'objet process

*/
// que contient process
// c'est un tableau, chemin complet du programme node, le fichier dans lequel on travaille actuellement
// si on ajoute notre argument toto, 
/* affichage
C:\wamp64\www\nodeProject> node .\arguments.js toto 20
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\wamp64\\www\\nodeProject\\arguments.js',
  'toto',
  '20' ]

  pour récupérer toto : 
*/
//console.log(process.argv);
//console.log(process.argv[2]);

/*avoir des arguments nommés
fonction getFlag
*/

function getFlag(name, args) {
    args = args || process.argv;

    const index = args.indexOf('--' + name);

    if(index === -1) {
        throw new Error(`Flag name "${name}"`);
    }
    return args[index + 1];
}

console.log(getFlag('age'));

// fonctio création liste flag en commentaire dans le code de Vincent