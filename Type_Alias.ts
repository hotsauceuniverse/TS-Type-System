// Type Alias

// Aliasing Union Type
let person: string | number = 0;
person = 'seyoung';

type StringOrNumber = string | number;

let another : StringOrNumber = 0;
another = 'Sam';


// Aliasing Tuple
let persons : [string, number] = ['Mark', 35];

type PersonTuple = [string, number];

let anothers : PersonTuple = ['Anna', 24];


// Aliasing Funuction
type EatType = (food: string) => void;

// Aliasing과 Interface의 차이? => 타입으로서의 목적의 유무(O: Interface / X: Aliasing)