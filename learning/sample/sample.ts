function hello(name: string): void {
    console.log('Hello ' + name + '!');
}
let your_name: string = 'Yamada';
hello(your_name);

let v_bool: boolean = true;
let v_num: number = 123;
let v_str: string = 'ABCDEFG';
let v_null: null = null;
let v_undef: undefined = undefined;

let v_arr1: string[] = ['Red', 'Green', 'Blue'];
let v_arr2: Array<String> = ['Red', 'Green', 'Blue'];
let v_tuple: [string, number] = ['Yamada', 26];

let v_obj: object = {'name': 'yamada', 'age': 26};

enum Color {Red, Green, Blue};
let v_enm: Color = Color.Green;

class MyClass { name: String; }
var val_class: MyClass = new MyClass();

function log(msg: string): void {
    console.log(msg);
}

function error(msg: string): never {
    throw new Error(msg);
}

// type assertion
interface Person {
    name: string;
    age: number;
}
let foo = <Person>{}
foo.name = 'Yamada';
let bar = {} as Person
bar.name = 'Yamada';

// type alias
type bool = boolean;
let flag: bool = true;

function increment(num: number) {
    return num + 1;
}

console.log(increment(999));
