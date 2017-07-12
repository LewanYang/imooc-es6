/**
 * Created by benz on 2017/7/12.
 */
{
    /**
     * lierator 和 for...of 循环
     *
     * for of 循环 ：不断调用lierator这个接口，不同的数据类型通过for of这种形式来达到循环这个目标
     */
}

{
    let arr = ['hello', 'world'];
    //调用iterator 这个接口 ,数组内部已经实现了这个接口，map有一个方法叫.next()
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    let obj = {
        start: [1, 23, 352],
        end: [22, 123, 351, 32],
        // 对象自定义Symbol.iterator方法
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return {
                next(){
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }

        }
    }
    for( let key of obj){
        console.log(key);
    }
}

{
    let arr= ['jay','muller'];
    for(let value of arr){
        console.log(value);
    }
}