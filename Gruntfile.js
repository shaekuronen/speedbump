module.exports = function(grunt) {

  grunt.initConfig({

    pagespeed: {
      options: {
        nokey: true,
        url: "https://206inc.com"
      },
      mobile: {
        options: {
          locale: "en_US",
          strategy: "mobile",
          threshold: 80
        }
      },
      desktop: {
        options: {
          locale: "en_US",
          strategy: "desktop",
          threshold: 80
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-pagespeed');

  grunt.registerTask('speed', [
    'pagespeed'
  ]);

};