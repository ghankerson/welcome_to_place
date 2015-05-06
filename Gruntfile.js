module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'app/styles/components/components.css': 'app/styles/components/components.scss'
        }
      }
    },
    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: {
          'app/styles/components/main.min.css': ['app/styles/components/components.css']
        }
      }
    },
    jshint: {
      all: ['Gruntile.js','app/scripts/**/*.js']
    },
    imageoptim: {
      optimize: {
        src: ['app/images']
      },
      jpegs: {
        src: ['app/images/**/*.jpg', 'app/images/**/*.JPG']
      }
    },
    clean: ['dist'],
    copy: {
      main: {
        files: [
          {expand: false, src: ['app/styles/components/main.min.css'], dest: 'dist/assets/css/main.min.css'},
          {expand: false, src: ['app/styles/components/main.min.css.map'], dest: 'dist/assets/css/main.min.css.map'},
        ]
      }
    }
  });

  grunt.registerTask('default', ['sass', 'jshint', 'cssmin', 'clean', 'copy']);
};
