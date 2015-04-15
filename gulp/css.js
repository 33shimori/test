var gulp = require('gulp')
var stylus = require('gulp-stylus')

gulp.task('css',function (){
    gulp.src('/home/gm/NetBeansProjects/MEANSampleProject/app/css/**/*.styl')
            .pipe(stylus())
            .pipe(gulp.dest('/home/gm/NetBeansProjects/MEANSampleProject/app/assets'))
})