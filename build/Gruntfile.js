/**
 * Precompile Script
 * Compile ember templates and components
 * Copyright (c) 2013 SweetLabs,Inc.
 * Author: Fontaine Shu
 *
 * SETUP:
 * 1) install Node.js from http://nodejs.org/download/
 *    You can try "$> node -v" to see if you already have it (v 0.8.0+)
 * 2) install dependencies: from the project root folder run "$> npm install"
 *
 * USAGE:
 * - to precompile now: from the build folder run "$> ./build"
 * - to rebuild on template file-change: "$> ./build run"
 *
 * NOTES: 
 * - this script uses v0.4+ of the popular Grunt task runner (http://gruntjs.com/)
 * - 'build' file in project root must have execution permissions: "$> chmod 755 ./build"
 */
module.exports = function(grunt) {
  	'use strict';

  	// Project configuration.
  	grunt.initConfig({
	    emberTemplates: {
	    	
	    	'default': {
	    		options: {
	  				templateBasePath: '../js/templates/'
				},
	        	files: {
	          		'../js/templates.js': '../js/templates/**/*.handlebars'
	        	}
	      	}
	    },

	    watch: {
	    	scripts: {
				files: ['../js/templates/*.handlebars', 
					'../js/templates/components/*.handlebars'], 
				tasks: [ 'build' ],
				options: {
					debounceDelay: 250
				}
			}
	    }
	});

	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("build", ['emberTemplates']);
	grunt.registerTask("run", ['emberTemplates','watch']);
	grunt.registerTask("default", ['build']);
};
