/**
 * Created by benz on 2017/7/3.
 */
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
    return del(['server/public','server/views'])
})