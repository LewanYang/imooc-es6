/**
 * Created by benz on 2017/7/2.
 */
import yargs from 'yargs';

const args = yargs
    //是在线上还是有这个开发环境
    .option('production', {
        boolean: true,
        default: false, //默认false就是开发环境
        describe: 'min all script'
    })

    //要不要监听我修改文件，要不要自动编译
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })

    //日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })

    .option('sourcemaps', {
        describe: 'force the creation of sroucemaps'
    })

    //设置端口
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv

export default args;

