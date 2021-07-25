console.log(
  "boolean--------------------------------------------------------------------------------"
);
let bool: boolean = true;
console.log(typeof bool);
console.log(
  "Number--------------------------------------------------------------------------------"
);
let a: Number = 1;
console.log(typeof a);
console.log(
  "String--------------------------------------------------------------------------------"
);
let b: String = "1";
console.log(typeof b);
console.log(
  "Array--------------------------------------------------------------------------------"
);
// 正常定义
let c: String[] = ["1", "1"];
console.log(typeof c);
// 泛型定义
let d: Array<string> = ["1", "2"];
console.log(typeof d);
// 元组类型->每个下标值分别定义类型
console.log(
  "tuple--------------------------------------------------------------------------------"
);
let arr: [String, boolean, Object, Array<string>, Number] = [
  "1",
  true,
  {},
  ["1", "2"],
  2,
];
console.log(arr);
console.log(typeof d);
// 枚举类型->标识状态或者固定值
console.log(
  "enum--------------------------------------------------------------------------------"
);
enum Flag {
  success = 1,
  error = -1,
}
console.log(Flag.success); //1

//不赋值则获取下标值
enum Color {
  red,
  blue,
  green,
}
let co: Color = Color.red;
console.log(co); //0

//元素获取的值是根据其上一个值获取的
enum Phone {
  apple,
  samsung,
  lenovo,
  xiaomi = 9,
  meizu,
  huawei,
}
let phone: Phone = Phone.meizu;
console.log(phone); //10

console.log(
  "any--------------------------------------------------------------------------------"
);
let anyType: any = "23232";
console.log(typeof anyType);
anyType = 123;
console.log(typeof anyType);

console.log(
  "null and undefined--------------------------------------------------------------------------------"
);

let undef: Number | null | undefined; //不是Number就为undefined
console.log(undef);

//方法没有返回值 
console.log(
  "void--------------------------------------------------------------------------------"
);
function test():void{
  console.log('func');
}
test()

//按照接受类型返回
function retunTypeDynamic(str:any):any{
return str
}
console.log(retunTypeDynamic('123'));