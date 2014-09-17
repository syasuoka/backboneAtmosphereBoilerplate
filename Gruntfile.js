'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

/*
    // Load tasks and configuration.
    grunt.loadTasks('build');

    // Register alias tasks.
    grunt.registerTask('setup-dev',
        'Prepare development environment',
        ['test-unit', 'clean:prod', 'jade:dev', 'stylus:dev', 'server:dev']);
    grunt.registerTask('lint',
        'Statically analyze the project JavaScript for errors and code style',
        ['jscs', 'jshint']);
    grunt.registerTask('test-unit',
        'Run the unit tests in a headless browser',
        ['lint', 'mocha']);
    grunt.registerTask('test-integration',
        'Run integration tests in a real browser',
        ['setup-dev', 'spawn:mochaTest']);

    grunt.registerTask('prod',
        'Compile for production.',
        [
            'test-unit', 'clean:prod', 'jade:prod', 'stylus:prod', 'requirejs',
            'copy:prod', 'server:prod'
        ]);
    grunt.registerTask('dev',
        'Start a development web server.',
        ['setup-dev', 'watch']);

    grunt.registerTask('server',
        'Start the REST and connect servers.',
        function() {
            require('./server/server');
            grunt.task.run('connect:' + this.args.join(':'));
        }
    );

    grunt.registerTask('default', ['dev']);
    */

};