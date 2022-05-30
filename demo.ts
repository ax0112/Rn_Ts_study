/* 原始类型*/
let a:boolean;
let num:number;
let str:string;

/*特殊类型*/
function log(): void {
  console.log();
}
  /*null,undefined是所有类型的子类*/
  num = null;
  str = null;
  a = undefined;
  /*any不让ts进行检查，如js一样*/
  let usr: any;
  usr = 13;
  usr = "zhang";

/*非原始类型*/

  /*不会用 这个代表obj = new Object(),实际对象都有具体属性，这样无法使用其中的属性*/
  let obj: object;
  let obj1 = {
    name: "chen"
  }
  str =obj1.name;

  /*不会用,实际数组都有具体属性，这样无法使用其中的属性*/
  let userIds:[] = [];
  let userIds1: number[] = [1,2,3];
  let userNames: string[] = ["1", "2", "3"];

  /*元组*/
  let userInfo: [number,string,number];
  userInfo = [0,'admin',100]

  /*内敛类型*/
  let user: {
    id: string;
    name: string;
    age: number;
  } = {
    id: "1000",
    name: "zhang",
    age: 20
  }
  /*缺点使用user时候得把参数复制一份*/
  function getUserName(user:{
    id: string;
    name: string;
    age: number;
  }) {
    return user.name;
  }

/*枚举*/
  let genderType = {
    "0": "men",
    "1": "women"
  }
  enum Gender {
    Male,
    Female,
  }
  let gender = Gender.Female;

/*函数*/
  /*可以添加出入参数类型*/
  function add(x: number, y: number):number {
      return x + y;
  }
  /*匿名函数也可以ps.两种方法均可表示出入参数*/
  let add2= function(x:number, y:number):number {
    return x + y;
  };
  /*这个=>不是箭头函数*/
  let add3: (x: number, y: number) => number = function(x,y) {
    return x + y;
  };
  /*当入参没有强制指定个数时用？来确定哪个是可选参数的防止报错*/
  function add4(x: number, y?: number):number {
    if (y && y !== null && y !== undefined) {
      return x + y;
    }
    return x;
  }
  add4(10)

/*接口*/
  /*可以解决内敛类型*/
  interface Iuser{
      id: string;
      name: string;
      age: number;
  }
  let user1:Iuser = {
    id: "1000",
    name: "zhang",
    age: 20
  }

  /*特点一鸭子辩型法*/
  interface Animal {
    id: string;
    name: string;
    age: number;
  }
  let animal: Animal = {
    id: "1000",
    name: "zhang",
    age: 20
  };
  /*常理说使用的Iuser类型只能传入使用这个类型的变量，但是接口有特点鸭子辩型法即两个接口描述相同的属性就认为是同一个*/
  function getName(user: Iuser) {
    return user.name
  }
  getName(user1);
  getName(animal);

  /*特点二可选属性加？同可选参数*/
  interface Iuser1{
    id: string;
    name: string;
    age?: number;
  }
  let user2: Iuser1 ={
    id: "1000",
    name: "zhang"
  }

  /*特点三只读属性 例如用户id只能通过后台读取*/
  interface Iuser2{
    readonly id: string;
    name: string;
    age: number;
  }

  /*特点四可索引类型*/
  let user4:Iuser = {
    id: "4000",
    name: "zhang",
    age: 20
  }
  let user5:Iuser = {
    id: "5000",
    name: "zhang",
    age: 20
  }
  let user6:Iuser = {
    id: "6000",
    name: "zhang",
    age: 20
  }
  interface UserMap{
    [id:string]:Iuser;
  }
  let userMap:UserMap = {
      [user4.id]:user4,
      [user5.id]:user5,
      [user6.id]:user6,
  }

  /*特点五函数类型*/
  interface IUserF{
    id: string;
    name: string;
    age: number;
    say:(context:string)=>string;
  }
  let userFunction:IUserF ={
    id: "6000",
    name: "zhang",
    age: 20,
    say:function(context:string){
      return this.name+context;
    }
  }

  /*特点六继承*/
  interface IStaff extends Iuser{
    rule: string;
  }

  let staff: IStaff = {
    id: "6000",
    name: "zhang",
    age: 20,
    rule: "2"
  }

/*泛型*/
  /*特点一重用性约束性*/
  let arr: number[] = [0, 1, 2, 3];
  let arrStr:string[] = ['0', '1', '2', '3'];
  function reverse<T>(arr:T[]) {
    const _arr:T[] = [];
    for (let i = arr.length - 1; i > 0; i--) {
      _arr.push(arr[i])
    }
    return _arr;
  }
  const newArr = reverse(arr)
  const newArr1 = reverse(arrStr);

  /**/
