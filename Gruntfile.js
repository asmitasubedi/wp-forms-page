module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // Watch task config
        watch: {
            sass: {
                files: "styles/*.scss",
                tasks: ["sass"],
            },
        },

        // Sass task config
        sass: {
            dev: {
                files: {
                    "styles/styles.css": "styles/styles.scss",
                }
            }
        },
        
    });
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["sass"]);
};
