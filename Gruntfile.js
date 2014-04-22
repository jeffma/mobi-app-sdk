'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js'
      ]
    },
    coffeelint: {
      mobi_app:['mobi_app/**/*.coffee']
    },
    ember_handlebars: {
      mobi_app: {
        options: {
          processName: function(fileName) {
            var arr = fileName.split("."),
              path = arr[arr.length - 2].split("/"),
              name = path[path.length - 1],
              isComponents = path.indexOf('components') > -1;
            if(isComponents) {
              return 'components/' + name;
            }
            else {
              return name;
            }
          }
        },
        files: {
          "mobi_app/debug/templates.js": ["mobi_app/templates/*.hbs","mobi_app/templates/components/*.hbs"]
        }
      }
    },
    coffee:{
      mobi_app:{
        files:{
          "mobi_app/debug/app.js":"mobi_app/app.coffee",
          "mobi_app/debug/store.js":"mobi_app/store.coffee",
          "mobi_app/debug/models.js":"mobi_app/models/*.coffee",
          "mobi_app/debug/controllers.js":"mobi_app/controllers/*.coffee",
          "mobi_app/debug/views.js":"mobi_app/views/*.coffee",
          "mobi_app/debug/helpers.js":"mobi_app/helpers/*.coffee",
          "mobi_app/debug/router.js":"mobi_app/router.coffee",
          "mobi_app/debug/routes.js":"mobi_app/routes/*.coffee",
          "mobi_app/debug/init.js":"mobi_app/init.coffee"
        }
      }
    },
    concat:{
      vendor:{
        src:[
          "bower_components/jquery/dist/jquery.js",
          "bower_components/modernizr/modernizr.js",
          "bower_components/foundation/js/foundation.js",
          "bower_components/handlebars/handlebars.js",
          "bower_components/ember/ember.js",
          "bower_components/ember-data/ember-data.js"
        ],
        dest:"mobi_app/debug/lib.js"
      },
      mobi_app_only:{
        src:["mobi_app/debug/app.js",
             "mobi_app/debug/store.js",
             "mobi_app/debug/models.js",
             "mobi_app/debug/controllers.js",
             "mobi_app/debug/views.js",
             "mobi_app/debug/helpers.js",
             "mobi_app/debug/templates.js",
             "mobi_app/debug/routes.js",
             "mobi_app/debug/router.js",
             "mobi_app/debug/init.js"],
        dest:"mobi_app/debug/mobi_app_only.js"
      },
      mobi_app:{
        src:["mobi_app/debug/lib.js",
             "mobi_app/debug/mobi_app_only.js"],
        dest:"mobi_app/debug/mobi_app.js"
      }
    },
    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'mobi_themes/debug/default/main.css': 'mobi_themes/src/default/main.scss'
        }
      }
    },
    connect:{
      mobi_app:{
        options:{
          port: 9000,
          base: 'mobi_app/debug'
        }
      }
    },
    watch:{
      mobi_app_coffee:{
        files:'mobi_app/debug/**/*.coffee',
        tasks:['coffeelint','coffee:mobi_app','concat:mobi_app']
      },
      mobi_app_handlebars:{
        files:'mobi_app/templates/**/*.hbs',
        tasks:['ember_handlebars:mobi_app','concat:mobi_app']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-ember-handlebars');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.registerTask('default', ['jshint','coffeelint','ember_handlebars:mobi_app', 'coffee:mobi_app','concat:vendor','concat:mobi_app_only','concat:mobi_app', 'sass', 'connect:mobi_app', 'watch']);
};
