/**
 * Created by benz on 2017/7/8.
 */
/**
 * 3-7 数组拓展
 */
{
    let arr = Array.of(1,4,32,43,12);
    console.log('arr',arr);

    let empty=Array.of();
    console.log('empty',empty);
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent);//输出标签内容,textContent是原生js中找标签文本内容
    });

    console.log(Array.from([1,3,5],function(item){
        return item*2
    })) //这里是Array.from的第二种用法，输出结果是2,6,10 相当于遍历了数组并对其每个数组进行了更改
}

//填充数组
{
    console.log('fill-7',[1,'l',undefined].fill(7)); //把数组中的每一项换成7；
    console.log('fill,pos',[1,3,45,2].fill(7,1,3)); //第一个参数是要换成的值，第二个是被换的起始位置，第三个是结束位置，注意结束位置不替换，只替换的结束位置的前一位
}
{
    //取索引
    for (let index of ['1','c','ks'].keys()){
        console.log('keys',index);
    };
    //取值
    for (let value of ['1','c','ks'].values()){
        console.log('vlaues',value);
    };
    //同时取两
    for (let [index,value] of ['1','c','ks'].entries()){
        console.log('value',index,value)
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4));
}

//find findIndex
{
    console.log([1,2,3,4,5,6].find(function(item){return item>3})); //找出大于3的，但只找第一个
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3})) //这个是返回索引
}

{
    console.log('number',[1,2,NaN].includes(1));
    console.log('number',[1,2,NaN].includes(NaN));
}