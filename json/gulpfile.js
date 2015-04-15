var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')


gulp.task('js', function () {
    gulp.src(['/home/gm/NetBeansProjects/MEANSampleProject/app/ng/module.js',
        , '/home/gm/NetBeansProjects/MEANSampleProject/app/ng/**/*.js'])
            .pipe(concat('app.js'))
            .pipe(sourcemaps.init())
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('/home/gm/NetBeansProjects/MEANSampleProject/app/assets'))
})

gulp.task('watch:js', ['js'], function () {
    gulp.watch('/home/gm/NetBeansProjects/MEANSampleProject/app/ng/**/*.js', ['js'])
})

var fs = require('fs')
fs.readdirSync('/home/gm/NetBeansProjects/MEANSampleProject/app/gulp').forEach(function (task) {
    require('/home/gm/NetBeansProjects/MEANSampleProject/app/gulp/' + task)
})

gulp.task('watch:css', function () {
    gulp.watch('/home/gm/NetBeansProjects/MEANSampleProjects/app/css/**/*.styl', ['css'])
})

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server'])

