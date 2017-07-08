/**
 * Created by benz on 2017/7/6.
 */


//关于字符Unicode的表示方法
{
    console.log('a',`\u0061`);  //输出的是两个a
    console.log('s',`\u20BB7`);  //这样是不能正确显示的，正确显示看下面一行
    console.log('s',`\u{20BB7}`);
    
    let s='𠮷';
}


{
    let s='𠮷';
    console.log('length',s.length);
    console.log('0',s.charAt(0));//这个是取第一个字符
    console.log('1',s.charAt(1));//这是取第二个字符
    console.log('at0',s.charCodeAt(0)); //这个是取第一个码值
    console.log('at1',s.charCodeAt(1)); //这个是取第二个码值

    let s1='𠮷a';
    console.log('length',s1.length);
    console.log('code0',s1.codePointAt(0));
    console.log('code0',s1.codePointAt(0).toString(16)); //转化成16进制
}

{
    console.log(String.fromCharCode('0x20bb7'));
    console.log(String.fromCodePoint('0x20bb7'));
}
// includes 某个字符串中是否包含..
{
    let str="string";
    console.log('includes',str.includes('r'));
    console.log('startsWith',str.startsWith('str'));
    console.log('endsWith',str.endsWith('ing'));
}
//repeat 意思是打印两次
{
    let str = "abc";
    console.log(str.repeat(2));
}
//模板字符串 重点
{
    let name = "list";
    let info = "hello world";
    let m = `I am ${name} ${info}`;
    console.log(m);
}
{
    console.log('1'.padStart(2,'0')); //第一个参数是length，第二个是假如不够，在前面补什么
    console.log('1'.padEnd(2,'k'));  //这个是在后面补
}

//标签模板
{
    let user = {
        name:'list',
        info:'hello world'
    };
    console.log(abc`I am ${user.name},${user.info}`);
    function abc(s,v1,v2){
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}
