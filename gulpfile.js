const { src, dest, watch, parallel } = require('gulp');

//Imagenes
const webp = require('gulp-webp');


//CSS
const sass = require('gulp-sass')(require ('sass'));
const plumber = require('gulp-plumber');



function css( done){
    src('src/scss/**/*.scss') //Idnetificar el archivo .SCSS a compilar
    .pipe(plumber())
    .pipe(sass()) //compilarlo
        .pipe(dest('build/css')) //almacenarla en el disco
    done();
}

function versionWebp (done){
    const opciones = {
        quality: 50
    };
    src('src/img/**/*')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function javaScript(done){
    src('src/js/**/*.js')
        .pipe(dest('build/js'));
    done();
}


//un watch para que este leyendo los cambios que sucedan en este archivo y los compile automaticamente
function dev (done){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javaScript);
    done ();
}

exports.versionWebp = versionWebp;
exports.js = javaScript;
exports.css = css;
exports.dev = parallel (dev, javaScript);