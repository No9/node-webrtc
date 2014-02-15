'use strict';

module.exports = function(grunt) {

  var banner = ['/*!',
     ' * node-webrtc v<%= pkg.version %>',
     ' *',
     ' * Released under the BSD license',
     ' *',
     ' * <%= grunt.template.today("yyyy-mm-dd") %>',
     ' */\n\n'
   ].join('\n');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: [
          'lib/**.js',
          'bin/**.js'
        ]
      },
      test: {
        src: [
          'test/**.js'
        ]
      }
    },
    tape: {
      options: {
        pretty: true,
        output: 'console'
      },
      files: ['test/all.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-tape');

  // Default tasks (when type grunt on terminal).
  grunt.registerTask('default', [
    'jshint',
    'tape'
  ]);
};
