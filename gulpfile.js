/*
 * To install dependencies, run the following commands from terminal:
 * 1. npm init
 * 2. npm install --save-dev gulp gulp-sass gulp-rename gulp-minify-css
 */

var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	rename 		= require('gulp-rename'),
	minifycss 	= require('gulp-minify-css')
;

// Watch
gulp.task('watch', function() {
    gulp.watch('./**/*.scss', ['sass']);
 });

// Sass
gulp.task('sass', function () {
	gulp.src('./demo/demo.scss')
		.pipe(sass())
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('./demo'));
 });

 // Default
 gulp.task('default', ['sass']);
