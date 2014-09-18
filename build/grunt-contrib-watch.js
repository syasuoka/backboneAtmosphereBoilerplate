'use strict';

module.exports = function(grunt) {
    grunt.config.set('watch', {
        livereload: {
            options: {
                livereload: true,
            },
            files: ['src/**/*.{js,html}', 'prod/*', '<%= watch.tests.files %>'],
        },
        jshintrc: {
            files: ['**/.jshintrc'],
            tasks: ['jshint'],
        },
        build: {
            files: ['<%= jshint.build.src %>'],
            tasks: ['jscs', 'jshint:build'],
        },
        scripts: {
            files: ['<%= jshint.app.src %>'],
            tasks: ['jscs', 'jshint:app'],
        },
        stylus: {
            files: ['src/**/*.styl'],
            tasks: ['stylus:dev'],
        },
        jade: {
            files: ['<%= jade.dev.src %>'],
            tasks: ['jade:dev'],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
