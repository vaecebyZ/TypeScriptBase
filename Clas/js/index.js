"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//定义
var Person = /** @class */ (function () {
    function Person(n, a, g) {
        if (n && a && g) {
            this.name = n;
            this.age = a;
            this.gender = g;
        }
    }
    Person.prototype.work = function () {
        console.log('im man');
    };
    Person.prototype.seyHellow = function () {
        console.log(this.name + "\u5411\u4F60\u95EE\u597D");
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (n) {
        this.name = n;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (n) {
        this.age = n;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.prototype.setGender = function (g) {
        this.gender = g;
    };
    Person.prototype.toString = function () {
        return "{name:" + this.name + ",age:" + this.age + ",Gender:" + this.gender + "}";
    };
    return Person;
}());
// static Funtion
Person.staticFunc = function () {
    console.log("这是静态方法");
};
var zhansan = new Person("zhansan", 18, "男");
zhansan.seyHellow();
console.log(zhansan.toString());
var lisi = new Person();
lisi.setName("lisi");
lisi.setAge(18);
lisi.setGender("man");
lisi.seyHellow();
console.log(lisi.toString());
// 继承
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.seyHellow = function () {
        // Person的属性开放给子类能够直接调用
        console.log("\u5F00\u53D1\u8005" + this.name + "\u5411\u4F60\u95EE\u597D");
    };
    Developer.prototype.work = function () {
        console.log('写程序');
    };
    return Developer;
}(Person));
// 使用父类的构造方法
var sanka = new Developer('sanka', 18, 'man');
// override重写父类方法
sanka.seyHellow();
// 就算不加override只要在子类中定义了就算是重写
sanka.work();
// 直接调用父类方法
console.log(sanka.toString());
