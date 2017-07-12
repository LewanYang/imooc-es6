/**
 * Created by benz on 2017/7/12.
 */
{
    /**
     * Generator
     */
}
{
    // generator 基本定义
    let tell = function*() {
        yield 'a';
        yield 'b';
        return 'c';
    }

    let j = tell();

    console.log(j.next());
    console.log(j.next());
    console.log(j.next());
    console.log(j.next());
}

{
    //利用Generator 重新定义遍历器
    let obj = {};
    obj[Symbol.iterator] = function*() {
        yield 1;
        yield 2;
        yield 5;
    }

    for (let value of obj) {
        console.log(value);
    }
}

{
    /**
     * 状态机，假设某种物体只有三种状态，并且仅有三种状态，那么我们适合用generator
     */
    let air = function*() {
        //这里while 条件是1，所以会永远循环
        while (1) {
            yield 'a';
            yield 'b';
            yield 'c';
        }
    }

    let status = air();
    console.log(status.next());//一次只执行一个yield
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

// {
//     /**
//      * async 和上面星号一样 ，只是写法不一样
//      *
//      */
//     let air = async function () {
//         //这里while 条件是1，所以会永远循环
//         while (1) {
//             await 'a';
//             await 'b';
//             await 'c';
//         }
//     }
//
//     let status = air();
//     console.log(status.next());//一次只执行一个yield
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
// }

{
    /**
     * Generator 的实际应用
     * @param count
     */
    let draw = function(count){
        // 抽奖逻辑
        console.log(`还有${count}次抽奖机会`);
    }
    let residue = function* (count){
        while(count>0){
            count--;
            yield draw(count); //注意这里要有yield
        }
    }
    let start = residue(5);  //这个参数5一般要从服务器端进行传入
    let btn = document.createElement('button');
    btn.id= 'btn';
    btn.textContent='抽奖';
    document.body.appendChild(btn);
    document.getElementById('btn').addEventListener('click',function(){
        start.next();
    },false);
}

{
    //长轮询
    let ajax = function*(){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code:0})
            },200);
        })
    }
    let pull = function(){
        let generator =  ajax();
        let step = generator.next();
        step.value.then(function (d) {
            if(d.code!= 0){
                setTimeout(function(){
                    console.info('wait');
                    pull()
                },1000)
            }else{
                console.info(d);
            }
        })
    }
    pull();
}