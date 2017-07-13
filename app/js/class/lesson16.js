/**
 * Created by benz on 2017/7/13.
 */
{
    /**
     *
     *   Decorator 修饰器是一个函数，修改类的行为
     *
     *   修饰器只在类中修改
     */
}

{
    /**
     * 基本定义
     *
     **/

    function testable(target) {
        target.isTestable = true;
    }

    @testable
    class MyTestableClass {}

    console.log(MyTestableClass.isTestable);
}

{
    /**
     *   设置作用为只读
     */
    let readonly = function(target,name,descriptor){
        descriptor.writable = false;
        return descriptor;
    }

    class Test{
        //设置了这个time方法为只读，并且不能修改
        @readonly
        time(){
            console.log('a');
        }
    }

    let test =new Test();

    // test.time = function(){
    //     console.log('x');
    // }


    console.log(test.time());

}


{
    /**
     *  对类进行修饰
     */
    let typename= function (target,name,descriptor){
        target.myname= 'hello'
    }

    @typename
    class Test{
    }
    console.log('类修饰符',Test.myname)
}

{
    /**
     * 第三方库修饰器的js库：core-decorators: npm install core-decorators
     */
}

{
    let log=(type)=>{
        return function (target,name,descriptor){
            let src_method = descriptor.value;
            descriptor.value =(...arg)=>{
                src_method.apply(target,arg);
                console.info(`log ${type}`);
            }
        }
    }

    class AD{
        @log('show')
        show(){
            console.info('ad is show');
        }
        @log('click')
        click(){
            console.info('ad is click');
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();
}