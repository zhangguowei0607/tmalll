let gulp = require('gulp');
let rename = require('gulp-rename');
let concat = require('gulp-concat');
let imagemin = require('gulp-imagemin');
let uglify = require('gulp-uglify');
let cssnano = require('gulp-cssnano');
let sass = require('gulp-sass');
let babel = require('gulp-babel');
//sass
gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
})
//js
gulp.task('js',()=>{
    gulp.src('./src/js/ES5/*.js')
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
})
//img
//购物车页图片 cart
gulp.task('imgC',()=>{
    gulp.src('./src/img/cart/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/cart'));
})
//主页图片 main
gulp.task('imgM',()=>{
    gulp.src('./src/img/main/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/main'));
})
//详情页图片 details
gulp.task('imgD',()=>{
    gulp.src('./src/img/details/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/details'));
})
//列表页图片 list
gulp.task('imgL',()=>{
    gulp.src('./src/img/list/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/list'));
})
//登录页图片 logon
gulp.task('imgLo',()=>{
    gulp.src('./src/img/logon/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/logon'));
})
//注册页图片 login
gulp.task('imgLi',()=>{
    gulp.src('./src/img/login/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/login'));
})

//ES6转ES5
gulp.task('es6',()=>{
    gulp.src('./src/js/ES6/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./src/js/ES5'))
})


//监听
gulp.task('default',()=>{
    gulp.watch(['./src/sass/*.scss'],['sass']);
    gulp.watch(['./src/js/ES5/*.js'],['js']);
    gulp.watch(['./src/js/ES6/*.js'],['es6']);
    
})