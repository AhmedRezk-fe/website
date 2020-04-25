var gulp = require('gulp');
var rtlcss = require('gulp-rtlcss');
 
gulp.task('default', function () {
    return gulp.src('./css/style.css')
        .pipe(rtlcss())
        .pipe(gulp.dest('./css/styleen.css'));
});