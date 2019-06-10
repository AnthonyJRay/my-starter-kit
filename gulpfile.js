var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch');





gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css'));
})





    gulp.task('default', ['sass'], function() {
    gulp.watch('./src/scss/**/*', ['sass'])
})
