let gulp=require('gulp');
let stylus=require('gulp-stylus');

gulp.task('default',()=>{
  console.log('Hola este es mi primer task con Gulp');
});



gulp.task('style',()=>{
  gulp.src('./src/css/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./build/css'))
});
