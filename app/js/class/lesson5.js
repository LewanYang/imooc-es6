/**
 * Created by benz on 2017/7/8.
 */
/**
 * 3-6 数值拓展
 */
{
    console.log('B',0b111110111); //二级制
    console.log(0o767);  //八进制
}

{
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite('1/0')); //false
    console.log('NaN',Number.isNaN(NaN));//true
    console.log('0',Number.isNaN(0));  //false
}

// 判断整数
{
    console.log('25',Number.isInteger(25)); //true
    console.log('25.0',Number.isInteger(25.0)); //true
    console.log('25.1',Number.isInteger(25.1));  //false
    console.log('25字符串',Number.isInteger('25')); //false
}
//判断范围 不超过js的最大范围
{
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10)); //true
    console.log('a',Number.isSafeInteger('a')); //false
}

//取整数部分，并且不向上取整和向下取整
{
    console.log('4.1',Math.trunc(4.1)); //4
    console.log('4.9',Math.trunc(4.9));  //4
}

//判断正数负数还是零
{
    console.log('-5',Math.sign(-5)); //-1
    console.log('0',Math.sign(0));  //0
    console.log('5',Math.sign(5));   //1
    console.log('"50"',Math.sign('50'));  //1
    console.log('foo',Math.sign('foo'));  //NaN
}

//立方根
{
    console.log('-1',Math.cbrt(-1)); //-1
    console.log('8',Math.cbrt(8));  //2
}