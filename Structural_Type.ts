// structural type system - 구조가 같으면, 같은 타입 - TypeScript방식

interface IPerson {
  name: string;
  age: number;
  speak(): string;
}

type PersonType = {
  name: string;
  age: number;
  speak(): string;
};

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;


// nominal type system - 구조가 같아도 이름이 다르면, 다른 타입
type PersonID = string & {readonly brand: unique symbol};
function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonById(id: PersonID) {}
getPersonById(PersonID('id-aaa'));
getPersonById('id-aaa') // PersonID로 치환된 타입만 넣을 수 있다.
// error - string형식의 인수는 PersonID형식의 매개변수에 할당될수 없고 {readonly brand: unique symbol} 형식에 할당 할 수 없다.






