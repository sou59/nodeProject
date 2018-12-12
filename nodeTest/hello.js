console.log('Hello');

// objet global
// stdout envoie sortie
// write : écrit sur la sortie
process.stdout.write('Coucou Toto ! \n ');
// \n retour à la ligne

process.stderr.write("Une erreur c'\est produite!\n")
process.stdout.write("\rBonjour!");
process.stdout.write("\rHolla!");

