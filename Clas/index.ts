//定义
class Person {
  name: string | undefined;
  age: number | undefined;
  gender: string | undefined;
  static staticFunc: () => void;

  work(): void {
    console.log('im man');
  }

  seyHellow() {
    console.log(`${this.name}向你问好`);
  }

  getName(): string | undefined {
    return this.name;
  }

  setName(n: string) {
    this.name = n;
  }

  getAge(): number | undefined {
    return this.age;
  }

  setAge(n: number) {
    this.age = n;
  }

  getGender(): string | undefined {
    return this.gender;
  }

  setGender(g: string) {
    this.gender = g;
  }

  constructor(n?: string, a?: number, g?: string) {
    if (n && a && g) {
      this.name = n;
      this.age = a;
      this.gender = g;
    }
  }

  toString(): string {
    return `{name:${this.name},age:${this.age},Gender:${this.gender}}`;
  }
}
// static Funtion
Person.staticFunc = () => {
  console.log("这是静态方法");
};

let zhansan = new Person("zhansan", 18, "男");
zhansan.seyHellow();
console.log(zhansan.toString());

let lisi = new Person();
lisi.setName("lisi");
lisi.setAge(18);
lisi.setGender("man");
lisi.seyHellow();
console.log(lisi.toString());


// 继承
class Developer extends Person {

  override seyHellow(){
    // Person的属性开放给子类能够直接调用
    console.log(`开发者${this.name}向你问好`);
  }
  work(){
    console.log('写程序');
  }
}
// 使用父类的构造方法
let sanka = new Developer('sanka',18,'man')
// override重写父类方法
sanka.seyHellow()
// 就算不加override只要在子类中定义了就算是重写
sanka.work()
// 直接调用父类方法
console.log(sanka.toString());
// 今天没啥写的画条鱼吧 <*)))>{ QAQ...
