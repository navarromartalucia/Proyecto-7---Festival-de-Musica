const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require ('sass'));

function css( done){
    src('src/scss/app.scss') //Idnetificar el archivo .SCSS a compilar
        .pipe(sass()) //compilarlo
        .pipe(dest('build/css')) //almacenarla en el disco
    done();
}



exports.css = css;