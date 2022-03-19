const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require ('sass'));

function css( done){
    src('src/scss/app.scss') //Idnetificar el archivo .SCSS a compilar
        .pipe(sass()) //compilarlo
        .pipe(dest('build/css')) //almacenarla en el disco
    done();
}

//un watch para que este leyendo los cambios que sucedan en este archivo y los compile automaticamente

function dev (done){
    watch('src/scss/app.scss', css);
    done ();
}

exports.css = css;
exports.dev = dev;