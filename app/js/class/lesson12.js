/**
 * Created by benz on 2017/7/9.
 */
{
    /**
     *  3-14 类和对象
     */
}

{
    //基本定义和生成实例
    class Parent{
        constructor(name='jay'){
            this.name = name;
        }
    }
    let v_parent =  new Parent('v');
    console.log('构造函数和实例',v_parent);
}

{
    //继承
    class Parent{
        constructor(name='jay'){
            this.name = name;
        }
    }
    class Child extends Parent{

    }
    console.log('继承',new Child());
}

{
    //继承并传递参数
    class Parent{
        constructor(name='jay'){
            this.name = name;
        }
    }
    class Child extends Parent{
        constructor(name='child'){
            super(name);  //这个一定要放在构造函数里面的第一行，说明覆盖啦前面的参数
            this.type = 'ac';
        }
    }
    console.log('继承传递参数',new Child('kfc'));
}

{
    //getter ,setter
    class Parent{
        constructor(name='jay'){
            this.name = name;
        }

        // 注意这个是个属性，不是方法
        get longName(){
            return 'haha'+this.name
        }

        set longName(value){
            this.name = value;
        }
    }

    let v = new Parent();
    console.log('getter',v.longName);  //hahajay
    v.longName = 'boll';  //这里就在上面的set中起作用了
    console.log('setter',v.longName);   //hahaboll
}

{
    //静态方法：注意：静态方法通过类去调用，而不是通过类的实例去调用
    class Parent{
        constructor(name='jay'){
            this.name = name;
        }
        //静态方法通过static 来声明
        static tell(){
            console.log('good moring');
        }
    }

    Parent.tell();
}

{
    //静态属性 静态属性直接在类定义完后用最原始的方法来定义
    class Parent{
        constructor(name='jay'){
            this.name = name;
        }
        //静态方法通过static 来声明
        static tell(){
            console.log('good moring');
        }
    }
    Parent.type = 'aaa';
    console.log('静态属性',Parent.type)
}