module.exports = function () {
    $.gulp.task('webp', function () {
        return $.gulp.src('build/img/**/*.{png,jpg,svg}')
         .pipe($.gp.webp({quality:90}))
         .pipe($.gulp.dest('build/img'))
    });
};