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
    //clean: ['dist'],
    copy: {
      main: {
        files: [
          {expand: false, src: ['app/styles/components/main.min.css'], dest: 'dist/assets/css/main.min.css'},
          {expand: false, src: ['app/styles/components/main.min.css.map'], dest: 'dist/assets/css/main.min.css.map'},
          {expand: false, src: ['app/scripts/main.js'], dest: 'dist/assets/js/main.js'},
          {expand: false, src: ['app/index.html'], dest: 'dist/index.html'},
          {expand: true, cwd: 'app/images', src: ['**'], dest: 'dist/assets/images/'},
        ]
      }
    },
    watch: {
      scripts: {
        files: ['./app/scripts/**/*.js'],
        tasks: ['jshint', 'newer:copy'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['./app/styles/**/*.scss'],
        tasks: ['sass', 'cssmin','newer:copy'],
        options: {
          livereload: true
        }
      },
      markup: {
        files: ['./app/index.html'],
        tasks: ['newer:copy']
      }
    },
    'http-server': {
      dev: {
        root: 'dist',
        port: 3000,
        host: '0.0.0.0',
        showDir: true,
        autoIndex: true,
        runInBackground: true
      }
    }
  });

  grunt.registerTask('default', ['newer:sass', 'newer:jshint', 'newer:cssmin', 'newer:copy']);
};
