/**
 * Created by benz on 2017/7/8.
 */
/**
 *  函数拓展
 **/

//默认值
{
    //这里要注意，当你的参数有默认值时，下一个参数一定要有默认值，否者的话会报错
    function test(x,y='world'){
        console.log('默认值',x,y);
    }
    test('hello');
    test('hello','bill');
}

//作用域
{
    let x='t';
    function test2(x,y=x){
        console.log('作用域',x,y);
    }
    test2('bill');  //最后输出是两个bill，这就是作用域的特点
}

{
    //当你不确认参数有多少的时候，下面把它变成数组了
    function test3(...arg){
        for(let v of arg){
            console.log('rest',v)
        }
    }
    test3(1,2,3,6,'a');
}

{
    console.log(...[12,3,4]);
    console.log('a',...[2,5,21,213]);
}


//箭头函数  most important!
{
    /**
     * 箭头函数的三个点： 1、函数名 2、参数，假如没有参数就用括号代替 3、函数返回值
     * @param v
     */
    let arrow = v => v*2;
    let arrow2 = () => 5;
    console.log('arrow',arrow(3));
    console.log('arrow2',arrow2());
}

//伪调用
{
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x);
    }
    fx(123);
}