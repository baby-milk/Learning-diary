    function fn1() {console.log(1)}
        function fn2() {console.log(2)}
        fn1.call(fn2); // 1
        fn1.call.call(fn2); //2 不管前边有多少call，他执行的是最后一个call方法
        Function.prototype.call(fn1); // 不输出
        Function.prototype.call.call(fn1); // 1
        // 如果出现两个及以上call，那最后运行的就是传进去的函数