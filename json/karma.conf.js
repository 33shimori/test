module.exports = function(config){
    config.set({
        frameworks: ['mocha', 'chai', 'sinon-chai'],
        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            '../ng/**/module.js',
            '../ng/**/*.js',
            'test/ng/**/*.spec.js'
        ],
                reporters: ['progress'],
                port: 9876,
                colors: true,
                logLevel: config.LOG_INFO,
                autoWatch: true,
                browsers: ['PhantomJS'],
                singleRun: false
    })
}