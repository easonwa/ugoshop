const gulp = require('gulp'),
	uglify = require('gulp-uglify'),	
	cssnano = require('gulp-cssnano'),
	sass =require('gulp-sass'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat');
const babel =require('gulp-babel');
const imagemin =require('gulp-imagemin');


gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())																																																																																																												  
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/css'))
	
})
gulp.task('es6',()=>{
	 gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./src/es5'))
})
gulp.task('js',()=>{
	gulp.src('./src/es5/*.js')
	.pipe(uglify())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/js'))
})
gulp.task('image',()=>
	gulp.src('./dist/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/images'))
)
gulp.task('default',()=>{
	gulp.watch(['./src/sass/*.scss','./src/es5/*.js','./src/js/*.js'],['sass','es6']);
})
