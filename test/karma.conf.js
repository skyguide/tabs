module.exports = function(config) {
    return config.set({
        basePath: '..',
        browsers: ['PhantomJS'],
        frameworks: ['commonjs', 'jasmine'],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'src/**/*.js': ['commonjs', 'coverage'],
            'bower_components/bskyb-core/src/**/*.js': ['commonjs'],
            'bower_components/jquery/dist/jquery.js': ['commonjs'],
            'test/**/*.js': ['commonjs'],
            '_site/*.html': ['html2js']
        },
        plugins:['karma-html2js-preprocessor', 'karma-coverage', 'karma-commonjs', 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-chrome-launcher'],
        coverageReporter: {
            dir : 'test/coverage/',
            reporters: [
                { type: 'html',
                    subdir: function(browser) {
                        return browser.toLowerCase().split(/[ /-]/)[0];
                    },
                    watermarks: {
                        statements: [0, 85], //75
                        lines: [0, 85],//75
                        functions: [0, 85],//75
                        branches:[0, 85]//75
                    }},
                { type: 'json-summary', subdir: '.', file: 'summary.json' },
            ]
        },
        files: [
            {pattern: '_site/*.html', watched: false },
            {pattern: 'bower_components/bskyb-core/src/**/*.js', included: true },
            {pattern: 'bower_components/jquery/dist/jquery.js', included: true },
            {pattern: '_site/**/*.*', included: false, served: true},
            'src/**/*.js',
            'test/**/*.spec.js'
        ],
        exclude: [
            'src/**/*.requirejs.js'
        ]
    });
};