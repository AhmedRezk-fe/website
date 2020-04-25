var gulp         = require('gulp'),
    minyImg      = require('gulp-image');


gulp.task('minyImg1', function () {
    gulp.src('img/**/*').pipe(minyImg()).pipe(gulp.dest('img/min'));
    });

gulp.task('default', ['minyImg1'])