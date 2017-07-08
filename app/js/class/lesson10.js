/**
 * Created by benz on 2017/7/8.
 */
{
    /**
     * 3-11 set-map数据结构
     *      set数据类型的元素必须是唯一的，即不能重复，可以用来去重
     */
}

{
    let list = new Set();
    list.add(5);
    list.add(7);

    console.log('size', list.size); //利用size属性获取list的长度
}

//第二种定义方式
{
    let arr = [1, 2, 3, 4, 5, 6, 6];
    let list = new Set(arr);
    console.log('size', list.size); //6
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log('list', list);

}

{
    //可以用作去重
    let arr = [1, 2, 2, 1, 4, 3, 2];
    let list2 = new Set(arr);
    console.log('list2', list2);
}

//set的几个方法
{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    console.log('has', list.has('add'));//true
    console.log('delete', list.delete('add'), list);
    list.clear();
    console.log('list', list);
}

//set的遍历
{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    //set里面value和key是一样的,直接遍历list也行
    for (let key of list.keys()) {
        console.log('keys', key);
    }
    for (let value of list.values()) {
        console.log('values', value);
    }
    for (let value of list) {
        console.log('value', value);
    }
    for (let [key, value] of list.entries()) {
        console.log('entries', key, value);
    }

    //forEach
    list.forEach(function (item) {
        console.log(item);
    })
}

/**
 * WeakSet
 *
 * 1、与set的区别 （1）WeakSet支持的数据类型不一样,weakset元素必须是对象,不能是数值布尔值等等
 *              （2） weakset不会检测这个对象是不是在其他地方用过，weakset中添加对象，不是把对象
 *              拷过来，而是地址的引用
 *
 *
 **/
{
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);
    console.log('weakList', weakList);
}


// map

{
    let map = new Map();
    let arr = ['1234'];
    //set添加元素用add,map添加元素用set
    map.set(arr, 456); //第一个参数是key，第二个是value
    console.log('map', map, map.get(arr)); //map ,['1234']=>456 , 456
}

{
    let map = new Map([['a', 123], ['b', 345]]);
    console.log('map', map);
    console.log('size', map.size); //2
    console.log('delete', map.delete('a'), map);
    console.log('clear', map.clear(), map);
}

//WeakMap
{
    let weakmap = new WeakMap();
    let o = {};
    weakmap.set(o, 123);
    console.log(weakmap.get(o)); //123
}


{
    /**
     * 数据结构横向对比：增、删、改、查
     * map和array
     */
    let map = new Map();
    let array = [];
    //增
    map.set('t', 1);
    array.push({'t': 1});
    console.log('map-array-add', map, array);

    //查
    let map_exist = map.has('t');
    let array_exist = array.find(item => item.t)
    console.log('map-array-search', map_exist, array_exist);

    //改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.log('map-array-modify', map, array);

    //删
    map.delete('t');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.log('map-array-delete', map, array);
}

{
    /**
     * 数据结构横向对比：增、删、改、查
     * set和array
     */

    let set = new Set();
    let array = [];

    //增
    set.add({t: 1});
    array.push({t: 1});
    console.log('set-array', set, array);

    //查
    let set_exist = set.has({t: 1}); //false,因为这是引用
    let array_exist = array.find(item => item.t);
    console.log('set-array-find', set_exist, array_exist);

    //改
    set.forEach(item => item.t ? item.t = 2 : '');
    array.forEach(item => item.t ? item.t = 2 : '');
    console.log('set-array-change', set, array);

    //删
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.indexOf(item => item.t);
    array.splice(index, 1);
    console.log('set-array-delete', set, array);
}

{
    /**
     * map,set,obj对比
     *
     */
    let item = {t: 1};
    let map = new Map();
    let set = new Set();
    let obj = {};
    //增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;
    console.log('map-set-obj', map, set, obj);
    //查
    console.log({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obh_exist: 't' in obj
    })
    //改
    map.set('t', 2);
    item.t = 2;
    obj['t'] = 2;
    console.log('map-set-obj-modify', map, set, obj);
    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log('map-set-obj-delete', map, set, obj);
}

