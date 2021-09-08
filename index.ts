// Basic types 

let id: number = 5 
let company: string = 'Basmach co ltd'
let isPublsihed: boolean = true 
let x: any = 'Hello'
let age: number 

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuple 
let person: [number, string, boolean] = [3, 'Dimon', true] 

// Tuple array 
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Chuck'],
]


// Union 
let pid: number | string = 22
pid = '22'

// Enum 
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// console.log(Direction1.Up);

// Objects 
type User = {
    id: number,
    name: string 
}

const user: User = {
    id: 1,
    name: 'John'
}

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'John'
// }

// Type assertion 
let sid: any = 1
// let customerId = <number>sid 
let customerId = sid as number 

// functions 
function addNum(x: number, y: number): number {
    return x + y
}

// void function
function log(message: string | number): void {
    console.log(message);   
}

// Interfaces 
interface UserInterface {
   readonly id: number,
    name: string,
    age?: number // optional
}

const user1: UserInterface = {
    id: 1,
    name: "Basmach"
}

type Point = number | string 
const p1: Point = 1 

interface MathFunc {
    (x: number, y: number): number 
}

const sub: MathFunc = (x: number, y: number): number => x - y

// classes 
class Person {
   private id: number // private can be used only with this class
  // protected name: string // protected can be used only with this class or class that can be extended with this class
name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const john = new Person(1, 'john Travolta')
const brad = new Person(2, 'Brad Travesry')

console.log(john.register());


// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position 
    }
}

const emp = new Employee(3, 'Shawn', 'Developer') 

// console.log(emp.name);

// Generics  - reusable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3,4]) 
let strArray = getArray<string>(['Brad', 'John', 'Jill'])

// numArr.push('hello')
// strArray.push(2)





