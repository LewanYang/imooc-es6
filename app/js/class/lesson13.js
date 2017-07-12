/**
 * Created by benz on 2017/7/9.
 */
{
    /**
     *  Promise
     *
     */
}

// {
//     //基本定义
//     // 这里是基本的回调函数，利用callback
//     let ajax = function(callback){
//         console.log('执行');
//         setTimeout(function(){
//             callback && callback.call();
//         },3000)
//     }
//
//     ajax(function(){
//         console.log('timeout1');
//     })
// }
//
// {
//     //Promise基本的调用
//     let ajax = function(){
//         console.log('执行');
//         return new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 resolve();
//             },8000)
//         })
//     }
//
//     ajax().then(function(){
//         console.log('Promise','timeout2');
//     })
// }

// {
//     //多重then
//     let ajax = function(){
//         console.log('执行');
//         return new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 resolve();
//             },2000)
//         })
//     }
//     ajax()
//         //这里的function就是上面promise里的resolve，下面同理
//         .then(function(){
//             console.log('执行2');
//             //在return 一个promise 下面then啦
//             return new Promise(function(resolve,reject){
//                 setTimeout(function(){
//                     resolve();
//                 },4000)
//             })
//         })
//         .then(function(){
//             console.log('执行3')
//         })
// }

{
    /**
     * 捕获异常错误
     */
    let ajax = function(num){
        console.log('执行（捕获异常）');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve();
            }else{
                throw new Error('出错了');
            }
        })
    }

    ajax(3).then(function(){
        console.log('num 大于5 ');
    }).catch(function(err){
        console.log(err);
    })
}

{
    /**
     *  Promise.all 应用
     *  所有图片加载完后再添加到页面
     */
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src= src;
            //onload事件在图片加载完后立即执行
            img.onload = function(){
                resolve(img);
            };
            img.onerror = function(err){
                reject(err)
            }
        })
    }

    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }

    // 要全部运行完, 生成一个新的promise实例，再运行then后面的方法
    Promise.all([
        loadImg('http://img.newyx.net/newspic/image/201704/13/8e55946810.jpg'),
        loadImg('http://img.newyx.net/newspic/image/201704/13/be72c12387.jpg'),
        loadImg('http://img.newyx.net/newspic/image/201704/13/8149423829.jpg')
    ]).then(showImgs)
}

{
    // 先到先得，哪个图片先出现加载那个图片
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src= src;
            //onload事件在图片加载完后立即执行
            img.onload = function(){
                resolve(img);
            };
            img.onerror = function(err){
                reject(err)
            }
        })
    }

    function showImg(img){
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p)
    }

    //在这个实例中，只要有一个成功就执行then
    Promise.race([
        loadImg('http://img.newyx.net/newspic/image/201704/13/8e55946810.jpg'),
        loadImg('http://img.newyx.net/newspic/image/201704/13/be72c12387.jpg'),
        loadImg('http://img.newyx.net/newspic/image/201704/13/8149423829.jpg')
    ]).then(showImg)

}
