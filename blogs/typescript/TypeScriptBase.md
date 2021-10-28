---
title: TypeScript基础
categories: 
 - TypeScript
tags:
 - TypeScript
date: 2021-4-6
sidebar: 'auto'
---

## typeScritp基础
ts最大的特点就是给变量声明了类型，声明了类型之后，该变量的类型就无法再改变。类似于强类型语言。

### 数据类型定义

#### boolean     

```js
// 声明的类型就无法改变了
var bool:boolean = true
bool = 11 // error
```

#### number

```js
var num = 11 
num = Infinity 
num = NaN
num = 0xf00d // 支持二级制、八进制、十六进制
num = 22 // 这是可以的
num = 'aa' // error
```



#### string

```js
var str = 'bb'
str = 'cc' // 这是可以的
str = 22 // error
```



#### array

```js
var arr:number[] = [1,2,3] 

// 这个属于泛型
var newArr:Array<number /> = [1,2,3]
```



#### tuple（元祖）

```js
// 元祖和数组有点类似，就是声明一个数组，但是数组中可以存放不同的类型。
var tup:[number,string] = [1,'a'] // 顺序需要一致，声明多少个类型，就需要写多少类型，可以是任何类型

```



#### enum（枚举）

```js
// 枚举可以很方便的告诉我们是每一个类型对应的是什么，比如看到type1 我们就知道是奥迪，就是取一个看得懂的名字映射到type1上面	
var CAR_TYPE {
    type1 = '奥迪'，
    type2 = '奔驰'，
    type3 = '宝马'
}
console.log(CAR_TYPE.type1) // 奥迪

```



#### any（任意类型）

```js
// 可以是任何数据类型

var data:any = 11
data = 'aa'
data = []
```



#### void

```js
// void的意思是说在调用fn函数时，fn可以不返回任何值
function fn (num:number):void{
    console.log(num)
}
fn(1) 
fn('a') // error 应为声明了形参应该是一个数字类型

// 这里意思是在调用fn2函数时，fn2函数必须返回一个字符串，如果不返回字符创或者返回了其他类型的值，就会报错。
function fn2 (str:string):string{
    return str
}
fn2('vv')

```



#### null

```js
var n:null = null // 如果是null类型的话，那么变量只能是它本身
```



#### undefined

```js
var u:undefined = undefined // 和null一样，只能是它本身
```



#### never

```js
// never表示那些完全不存在类型,像这个函数一样，它是一个死循环，不可能有返回值
function fn ():never{
    while(true){
        console.log(1)
    }
}

```



#### object 

```js
// 其实和上面的用法差不多，但是一般函数定义一个object会使用interface定义
function fn (obj:object | null	):void {
    
}
fn({prop:1}) // ok
fn(null) // ok
fn(11) // error
fn('aa') // error
fn(true) // error
```



##### 接口

#### interface初识

```js
interface car {
    color:string,
    type:string,
    size:number,
    money?:number,   // 可选属性
    [propName:string]:any,   // 未来可能会加的属性，
    run():void
}
    
   function aodi (obj:interface) {
       
   }
    
  // car声明的属性类型，这里就需要怎么定义数据类型，键的名字也是需要一致的，但是car的键后面带问号的，就是可有可无。其他的都要写。
   const obj = {
       color:'red',
       type:'suv',
       size:10,
       run(){
           console.log('能跑')
       }
   } 
    
  aodi(obj)
    
    
```



#### 只读属性

readonly      一些对象属性只能在刚刚创建的时候修改，后面就无法再次修改，就可以在属性的前面加上 readonly

```js
interface Point {
    readonly x:number,
    readonly y:number
}
```

Point     如果通过对象字面量来声明对象话，并且里面的属性不希望被修改，可以声明Point

```js
let obj：Point = {
    x : 10,
    y : 20
}

obj.x = 30 // error


```



ReadonlyArray   如果创建的数组后，里边的值不希望被修改，可以声明 ReadonlyArray<T/> ，它和Array<T/>用法是一致的

```js
let arr:ReadonlyArray<number/> = [1,2,3,4]
arr[0] = 10 // error
arr.push(5) // error
```



const 和  readonly 的区别

contst 是使用在变量上，而 readonly 是使用在属性上



#### 类类型接口

定义类的接口是，需要使用implements关键字

```JS
interface ClockInterface {
    tiem:Data
}

class Clock implements ClockInterface {
    time:new Data()
	constructor(){}
}


```



#### 接口继承

接口继承的关键字是 extends ，并且是可以多继承的，多继承使用逗号分开

```js
interface Car {
    color : string,
    type : string 
}
interface Baoma {
   size：number
}
// 这里继承了Car 的color和type属性，还有继承了Baoma 的 size属性
interface Aodi extends Car, Baoma{
    money : number
}

function fn (car:Aodi) {
    
}

cosnt carObj = {
    color : 'red',
    type : 'suv',
    money : 1200000，
    size： 12
}

fn(carObj)

```

#### 接口继承类

关键字使用 extends

```js
class control {
    start : any 
}

interface SelectableControl extends control{
    
}
```



##### 类

#### 公有修饰符

public 构造函数中的属性或者方法，默认就是为public的，所以也就是说 public是可以不用写的。用了public修饰符修饰之后，该属性或方法就可以随意调用。

```js
class Animal {
    public name: string
    constructor (name:string) {
        this.name = name
    }
    pulice sayHi(){
        console.log('hello world')
    }
}

const a = new Animal('Tom')
a.name // Tom 
a.sayHi() // hello world

```





#### 私有修饰符/收保护修饰符

在属性或方法前面添加 private，表示该属性或方法为私有的，外界是访问不到的，子构造函数也是无法访问的。protected的用法和private是非常像，有一点是不同的，protected的属性或方法是可以在子狗赞函数中使用的，在外界还是一样的无法访问。

```js
class Animal {
  private name: string
  protected type: string
  constructor(name: string, type: string) {
    this.name = name
    this.type = type
  }
  returnName() {
    console.log(this.name)
  }
}

let b = new Animal('cat', 'Tom').returnName()
// console.log(b.name)  error 无法访问私有属性
// console.log(b.type) error 无法访问私有属性
class Cat extends Animal {
  constructor(type: string, name: string) {
    super(name, type)
  }
  sayName() {
     console.log(this.name) // error 无法访问Animal中的name属性
    console.log(this.type)
  }
}

new Cat('jack', 'cat')
}
```



#### 存取器

```js
class Access {
  _password: string
  get password(): string {
    console.log('这里是get')
    return this._password
  }
  set password(newPassword: string) {
    console.log('这里是set')
    this._password = newPassword
  }
}

let pwd = new Access() ’
pwd.password = 'haha' // 这里会触发set 函数 输出 ‘这里是set’
console.log(pwd.password) // 这里会触发get函数 输出 ‘这里是get’，然后在输出 ‘haha’
```



##### 泛型

#### 为什么要使用泛型？

请看下面例子，有时候我们定义一个函数，但是并不知道传入参数是什么类型，并且也不知道函数返回的值是什么类型。如果我们把参数和函数返回的值的类型都设置为any的话，就很有可能传入的形参和函数函数返回的值类型就不一致。这样显然就不够严谨。所以我们就可以使用泛型。

```js
function test(data:any):any{
    return data
}
```

这里做一个any和泛型的一个对比

```js
function test(data: any): any {
  console.log(data.length) // ok , just right
  return data	
}

function test1<T/>(data: T): T {
  console.log(data.length) //error   使用了泛型之后，就会严谨一些，因为data属性的类型是未知的，不一定就会有length属性，所以使用泛型之后就会报错。
  return data
}
```



#### 约束泛型

当我们的传入的值，是有条件时，此时，我们就需要约束参数。比如我们想传一个带有了length属性的值，实现方案如一下：

```js
interface Length{
    length:number
}

function getLength<T extends Length/>(arg:T):T{
    console.log(arg.length)// ok Just right 此时是可以访问length属性的
    return arg
}

getLength({length:10,value:'haha';}) // ok 
getLength(2)// error 我现在传入的参数，必须需要携带含有length属性的值。
```



传一个对象时，函数中需要用到对象中的某一个属性，泛型定义如下：

```js
interface res {
    status:number
    data:Array
}
function getList<T extends object,K extends keyof T/>(obj:T,key:k):Promise<res/>{
   console.log(obj[key]) // 12
   const res = getData(obj[key]) // 请求接口 ，获取数据
   return res
}

getList({id:12,value:'hello'},id)
```

