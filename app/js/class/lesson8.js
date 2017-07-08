/**
 * Created by benz on 2017/7/8.
 */
/**
 * 3-9 对象拓展
 **/

//简介表示法
{
    let o = 1;
    let k = 2;
    let es5 = {
        o: o,
        k: k
    };
    let es6 = {
        o, k
    };
    console.log(es5, es6);

    //方法
    let es5_method={
        hello:function(){
            console.log('hello');
        }
    };
    let es6_method={
        hello(){
            console.log('hello');
        }
    };
    console.log(es5_method.hello(),es6_method.hello());
}


//属性表达式
{
    let a='b';
    let es5_obj={
        a:'c',
        b:'c'
    };
    let es6_obj={
        [a]:'c'// 这里用方括号括起来是表达式，即这个就是b
    }
    console.log(es5_obj,es6_obj);
}

//新增API
{
    //判断两个字符串是否相等
    console.log('字符串',Object.is('abc','abc'), 'abc'==='abc');
    console.log('数组',Object.is([],[]),[]===[]); //由于数组是引用类型，好比指针，所以两个空数组是不一样的

    //拷贝
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));//两个对象变成一个对象

    //entries
    let test={k:123,o:324};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }
}

//拓展运算符
{
    let {a,b,...c} = {a:'test',b:1,c:'kfc',d:'air'};
    // c={
    //     c:'kfc',
    //     d:'air'
    // }
}