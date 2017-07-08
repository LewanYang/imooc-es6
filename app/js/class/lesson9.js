/**
 * Created by benz on 2017/7/8.
 */
/**
 * 3-10 Symbol用法
 *      申明的变量永远不可能相等
 **/

//1.声明
{
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);  //false;

    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3 === a4); //true 这里不是很理解
}

//2.什么情况时候
{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]: 123,
        'abc': 345,
        'c': 456
    } //这样两个abc就不冲突，一个是Symbol的abc,一个是abc
    console.log(obj);
    //同时要注意，在用symbol做key值时，用for in 是拿不到他的属性的
    for (let [key, value] of Object.entries(obj)) {
        console.log('let of ', key, value);
    }

    //用下面方法拿到symbol
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]); //拿到的是数组，所以不能用点
    })
    //同时拿到普通key和symbol
    Reflect.ownKeys(obj).forEach(function(item){
        console.log('ownKeys', item, obj[item]);
    })

}