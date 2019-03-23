const gulp = require('gulp'),
	uglify = require('gulp-uglify'),	
	cssnano = require('gulp-cssnano'),
	sass =require('gulp-sass'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat');

gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/css'))
	
})
gulp.task('js',()=>{
	gulp.src('./src/js/*.js')
	.pipe(uglify())
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest('./dist/js'))
})
gulp.task('default',()=>{
	gulp.watch(['./src/sass/*.scss','./src/js/*.js'],['sass','js']);
})
