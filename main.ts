// STATIC TYPING

// khai báo kiểu cho biến => đảm bảo rằng không gán sai kiểu dữ liệu.(Khai báo bị bỏ qua editor sẽ tự phát hiện)

// Number, string, boolean,any, array(number[], string[]), object, void (trả về giá trị bất kì)

const lastName: string = "Thien",
  age: number = 21,
  relationship: boolean = false;

// editor sẽ cảnh bảo khi truyền sai tham số tới 1 hàm.

const speak = (food: string, energy: number): void => {
  console.log(`This is ${food}, it has ${energy}`);
};

speak(lastName, 12);

// INTERFACE

// Được sử dụng để  để kiểm tra xem dữ liệu có phù hợp với 1 kiểu dữ liệu nhất định không

interface Member {
  name: string;
  age: number;
}

function checkMember(mem: Member): void {
  console.log(`This is ${name}, he is ${age}`);
}

const member = {
  name: "Thien",
  age: 21,
};

// Chỉ cần truyền đủ số lượng, tên, kiểu dữ liệu còn lại thứ tự không quan trọng.

checkMember(member);

// Optional properties

interface SquareConfig {
  width?: number;
  color?: string;
}

function configSquare(square: SquareConfig): { color: string; area: number } {
  const newSquare = { color: "black", area: 100 };

  if (square.color) {
    newSquare.color = square.color;
  }

  return newSquare;
}

// Readonly properties

interface Point {
  readonly x: number;
  readonly y: number;
}

let a1: Point = { x: 1, y: 2 };

// a1.x = 5 (error: cannot assign to 'x' because it is a read-only property)

let a: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number> = a;

// ro[0] = 12; (error: cannot assign!)

// ro.push(5) (error: cannot push)

// Funtion type

interface searchFun {
  (source: string, subtitle: string): boolean;
}

const mySearch: searchFun = (src, sub) => {
  return src === sub;
};

// Indexable Types

// gán kiểu dữ liệu cho chỉ mục

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["BOb", "Fred"];

let myStr = myArray[0];

// ---------------------------
interface NumberDictionary {
  [index: string]: number;

  length: number;
  // name: string; (error, the type of 'name' is not a subtype of indexer)
}

interface NumberDictionary2 {
  [index: string]: number | string;

  length: number;
  name: string;
}

// Class types

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constuctor(h: number, m: number) {}
}

// Extending interfaces

interface Shape {
  color: string;
}

interface PenStrorke {
  penWidth: number;
}

interface Square extends Shape, PenStrorke {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// Hybrid types
interface Counter {
  (start: number): string;
  iternal: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.iternal = 123;
  counter.reset = function () {};

  return counter;
}

let c = getCounter();

c(10);
c.reset();
c.iternal = 5.0;

// Interface extending classes

class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {}
}
class TextBox extends Control {
  select() {}
}

class ImageControl implements SelectableControl {
  private state: any;
  select() {}
}
