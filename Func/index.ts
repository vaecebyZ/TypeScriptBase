// 声明
function test():String{
    return '123'
}
//无返回值
let fun = function func():void{
    console.log(2);
}
fun()

//可选参数 可选参数永远最后一个
function sum(num:number,num2?:number,num3?:number){
  if(num2){
    console.log(num + num2);
  }else{
    console.log(num);
    
  }
}
sum(1)

//默认参数
function dsum(num:number,num2:number=100,num3?:number){
  if(num2){
    console.log(num + num2);
  }else{
    console.log(num);
  }
}
dsum(1)

//剩余参数
function ssum(...result:number[]){
  result.forEach(e=>{
    console.log(e); 
  })
}
ssum(1,2,3,4,5,6,7)

//函数重载
function css(config:number):void;

function css(config:string,nums?:number):void;

function css(config:any):void{

}

css(1)
