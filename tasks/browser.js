/**
 * Created by benz on 2017/7/3.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    /**
     * 下面这里解释一下：
     * 当你改变源程序app里面的js、ejs、css文件的时候，通过task里面的scripts.js、pagss.js、css.js的构建加载，并把它写在server目录下
     */
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
});
