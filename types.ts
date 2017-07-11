let myNumber: number = 58;

myNumber = 'hello';


let myName: String = 'Jess';

myName = 'Carl';


let isHungry: Boolean = false;

isHungry = true;


// probably wont do "Object" because it results in problems later
let person: Object = {};

// Try to avoid "any" since it defreats the purpose of Typescript
let myAnything: any = {};
myAnything = 'Hello';
myAnything = 999;


let myEmptyThang: void = null;
myEmptyThang = undefined;


// ARRAYS

let myList: Array<String> = [ 'parmigianna', 'cordon bleu', 'chicken sandwich' ];

let myOtherList: String[] = [ 'eggplant parmigiana', 'hummus', 'chickpea curry' ];

// these two ways of specifying a typed array are THE SAME!

let myNumberList: Array<Number>;
let myOtherNumbers: Number[];

myOtherNumbers = [ 99, 88, 77, 11, true ];
