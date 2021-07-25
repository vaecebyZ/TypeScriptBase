"use strict";
// 声明
function test() {
    return '123';
}
//无返回值
var fun = function func() {
    console.log(2);
};
fun();
//可选参数 可选参数永远最后一个
function sum(num, num2, num3) {
    if (num2) {
        console.log(num + num2);
    }
    else {
        console.log(num);
    }
}
sum(1);
//默认参数
function dsum(num, num2, num3) {
    if (num2 === void 0) { num2 = 100; }
    if (num2) {
        console.log(num + num2);
    }
    else {
        console.log(num);
    }
}
dsum(1);
//剩余参数
function ssum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    result.forEach(function (e) {
        console.log(e);
    });
}
ssum(1, 2, 3, 4, 5, 6, 7);
function css(config) {
}
css(1);
