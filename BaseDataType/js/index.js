"use strict";
console.log("boolean--------------------------------------------------------------------------------");
var bool = true;
console.log(typeof bool);
console.log("Number--------------------------------------------------------------------------------");
var a = 1;
console.log(typeof a);
console.log("String--------------------------------------------------------------------------------");
var b = "1";
console.log(typeof b);
console.log("Array--------------------------------------------------------------------------------");
// 正常定义
var c = ["1", "1"];
console.log(typeof c);
// 泛型定义
var d = ["1", "2"];
console.log(typeof d);
// 元组类型->每个下标值分别定义类型
console.log("tuple--------------------------------------------------------------------------------");
var arr = [
    "1",
    true,
    {},
    ["1", "2"],
    2,
];
console.log(arr);
console.log(typeof d);
// 枚举类型->标识状态或者固定值
console.log("enum--------------------------------------------------------------------------------");
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
console.log(Flag.success); //1
//不赋值则获取下标值
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
var co = Color.red;
console.log(co); //0
//元素获取的值是根据其上一个值获取的
var Phone;
(function (Phone) {
    Phone[Phone["apple"] = 0] = "apple";
    Phone[Phone["samsung"] = 1] = "samsung";
    Phone[Phone["lenovo"] = 2] = "lenovo";
    Phone[Phone["xiaomi"] = 9] = "xiaomi";
    Phone[Phone["meizu"] = 10] = "meizu";
    Phone[Phone["huawei"] = 11] = "huawei";
})(Phone || (Phone = {}));
var phone = Phone.meizu;
console.log(phone); //10
console.log("any--------------------------------------------------------------------------------");
var anyType = "23232";
console.log(typeof anyType);
anyType = 123;
console.log(typeof anyType);
console.log("null and undefined--------------------------------------------------------------------------------");
var undef; //不是Number就为undefined
console.log(undef);
//方法没有返回值 
console.log("void--------------------------------------------------------------------------------");
function test() {
    console.log('func');
}
test();
//按照接受类型返回
function retunTypeDynamic(str) {
    return str;
}
console.log(retunTypeDynamic('123'));
