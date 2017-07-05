/**
 * Created by benz on 2017/7/3.
 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

//clean一定是放在最前面的
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));