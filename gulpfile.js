var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload




gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/**/*'))
    .pipe(browserSync.stream())
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: './public',
        notify: false,
        open: false
    })
})

    gulp.task('default', ['sass', 'browser-sync'], function() {
    gulp.watch('./src/scss/**/*', ['sass'])
})