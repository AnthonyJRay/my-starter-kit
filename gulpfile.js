var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');




gulp.task('sass:minify', function () {
    return gulp.src('./public/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public'))
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

gulp.task('production', ['sass:minify'])