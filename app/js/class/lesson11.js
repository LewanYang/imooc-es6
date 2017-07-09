/**
 * Created by benz on 2017/7/8.
 */
{
    /**
     * Proxy和Reflect
     *      1、proxy reflect的方法是一模一样的
     *      2、proxy 相当于中间商一样，连接供应商和用户之间
     *
     */
}

{
    let obj = {
        time: '2017-03-09',
        name: 'net',
        _r: 123
    };
    let monitor = new Proxy(obj, {
        // 拦截对象属性的读取
        get (target, key){
            return target[key].replace('2017', '2018');//将属性值中的2017替换成2018，但是实际资源中的数据不变，只是我们看到的读取到的是变的
        },
        // 拦截对象设置属性
        set(target, key, value){
            if (key === 'name') { //只可以修改name属性  注意这里的引号不能漏掉，
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        // 拦截key in object 操作  判断对象是否拥有某个属性
        has(target, key){
            // 只能让用户知道有name这个属性
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }
        },
        //拦截 delete
        deleteProperty(target,key){
            //
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else{
                return target[key];
            }
        },
        //拦截 Object.key,Object.getOwnPropertySymbols,Object.getOwnPropertyNames()
        /**
         * Object.keys(a)的作用，a是数组的话返回Index,a是对象的话返回Key
         *
         */
        ownKeys(target){
            //这里的作用是过滤掉time这个属性
            return Object.keys(target).filter(item=>item!='time');
        }
    })
    //读取
    console.log('get', monitor.time);
    //进行修改
    monitor.time = 555;
    monitor.name = 'jay';
    console.log('set', monitor);
    //判断是否含有
    console.log('has-time', 'time' in monitor);
    console.log('has-name', 'name' in monitor);
    console.log('has-_r', '_r' in monitor);
    //删除
    // delete monitor.time;
    // console.log('delete-time',monitor);
    // delete monitor._r;
    // console.log('delete-_r',monitor);
    console.log('ownKeys',Object.keys(monitor));
}

{
    /**
     * reflect 以后操作object.data 对象要通过reflect,不要直接去改
     * @type {{time: string, name: string, _r: number}}
     */
    let obj = {
        time: '2017-03-09',
        name: 'net',
        _r: 123
    };
    //读取 Reflect.get
    console.log('Reflect get',Reflect.get(obj,'time'));
    //设置
    Reflect.set(obj,'name','kfc');
    console.log('Reflect set',obj);
    //是否拥有
    console.log('Reflect has',Reflect.has(obj,'_r'));
}

{
    /**
     * Reflect Proxy的实践
     * 1、用于数据校验功能
     *
     */
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                //先判断target是否含有这个key
                if(target.hasOwnProperty(key)){
                    let va = this._validator[key];
                    if(!!va(value)){
                        Reflect.set(target,key,value,proxy);
                    }else{
                        throw Error(`不能设置${key}到${value}`);
                    }

                }else{
                    throw Error(`${key}不存在`)
                }

            }

        })
    }

    //设置过滤选项，交验条件
    const personValidator = {
        name(val){
            return typeof val === 'string' ;
        },
        //这个就相当于
        //name:function(val){
        //          return ....
        //     }
        age(val){
            return typeof val === 'number' && val>18;
        }

    }

    //设置类
    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
            return validator(this,personValidator); //说明返回出去的是中间商，不是原供应商
        }
    }
    //设置对象
    const person = new Person('jay',32);

    console.log(person);

    person.name = true;

    console.log(person); //这里就会报错了，因为中间商那里已经设置了name不能为布尔型，要是字符串型
}

