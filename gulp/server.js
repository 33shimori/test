var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

gulp.task('dev:server', function(){
    nodemon({
        script: '/home/gm/NetBeansProjects/MEANSampleProject/app/json/server.js',
        ext: 'js',
        ignore: ['ng*', 'gulp*', 'assets*']
    })
})
