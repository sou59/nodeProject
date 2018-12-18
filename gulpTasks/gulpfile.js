'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('hello', done => {
    console.log('Hello, Gulp');

    done(); // pour dire que la tache est terminée
}); // appel task, lui donner un nom, 2e parametre fonction fléchée

gulp.task('styles', done => {
    gulp.src('./sass/**/*.scss')    // tous les fichiers sass
        .pipe(sass({
            outputStyle: 'expanded'   // en sortie compile et compresse le css compressed pour minifié
         }).on('error', sass.logError)) // appel évènement si erreur log mais ne stop pas le script
        .pipe(gulp.dest('./dist/css'));  // enregistrera tous dans le dossier qu'il créera auto
    done();
});

gulp.task('sass-watcher', done => {
    gulp.watch('./sass/**/*.scss', gulp.series('styles'));
    done();
});

gulp.task('dev', gulp.parallel('sass-watcher'));


