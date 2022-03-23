const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require ('sass'));
const plumber = require('gulp-plumber');

function css( done){
    src('src/scss/**/*.scss') //Idnetificar el archivo .SCSS a compilar
    .pipe(plumber())
    .pipe(sass()) //compilarlo
        .pipe(dest('build/css')) //almacenarla en el disco
    done();
}

//un watch para que este leyendo los cambios que sucedan en este archivo y los compile automaticamente

function dev (done){
    watch('src/scss/**/*.scss', css);
    done ();
}

exports.css = css;
exports.dev = dev;