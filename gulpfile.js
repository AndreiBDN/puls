const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');


// Static server
gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });
    gulp.watch('src/*.html').on('change', browserSync.reload);
});
gulp.task('styles', function () {
    return gulp.src('src/sass/**/*.+(scss|sass|css)')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min"
        }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('minhtml', () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/'));
});
gulp.task('minimg', () => {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('icons', () => {
    gulp.src('src/icons/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/icons'))
});
gulp.task('script', () => {
    gulp.src('src/js/**/*.js')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/js'))
});
gulp.task('font', () => {
    gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
});







gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.+(scss|sass|css)', gulp.parallel('styles'));
    gulp.watch('src/*.html').on('change', gulp.parallel('minhtml'));

});



gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'minhtml', 'minimg', 'icons', 'script', 'font'));