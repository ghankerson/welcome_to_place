module.exports = function(grunt) {
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
    }
  });

  grunt.registerTask('default', ['sass']);
};
