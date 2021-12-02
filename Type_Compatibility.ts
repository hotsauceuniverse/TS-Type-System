// Type_Compatibility
// 서브 타입 - 슈퍼타입에 포함되는 타입
// 슈퍼 타입 - 다른 한 타입을 포함하는 타입
// => 타입스크립트의 경우, 한 타입이 다른 한 타입의 값을 모두 포함하고 있으면 그 타입을 포함한다고 합니다.

// sub1 타입은 sup1 타입의 서브 타입이다.
// sup1 타입은 sub1 타입의 슈퍼 타입이다.
let sub1: 1 = 1;
let sup1: number = sub1;
sub1 = sup1; // error - number형식은 1형식에 할당할 수 없습니다.

// sub2 타입은 sup2 타입의 서브 타입이다.
// sup2 타입은 sub2 타입의 슈퍼 타입이다.
let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2; // error - {}형식에 number[] 형식의 length, pop, pushm concat외 28개 속성이 없습니다.

// sub3 타입은 sup3 타입의 서브 타입이다.
// sup3 타입은 sub3 타입의 슈퍼 타입이다.
let sub3: [number, number] = [1, 2]; // Tuple
let sup3: number[] = sub3; // Array
sub3 = sup3; // error - number[]형식은 [number, number]형식에 할당할 수 없습니다. 대상에 2개 요소가 필요하지만, 소스에 더 적게 있을 수 있습니다.

// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;


// 1. 같거나 서브 타입인 경우, 할당이 가능하다. => 공변
// primitive type
let sub5: string = '';
let sup5: string | number = sub5;

// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub6: { a: string; b: number } = { a: '', b: 1 };
let sup6: { a: string | number; b: number } = sub6;

// array - object 와 마찬가지
let sub7: Array<{ a: string; b: number }> = [{ a: '', b: 1 }];
let sup7: Array<{ a: string | number; b: number }> = sub7


// 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. => 반병
class Person {}
class Developer extends Person {
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer();
});

// Developer => Developer 에다가 Person(슈퍼타입) => Developer 를 할당하는 경우
tellme(function pToD(d: Person): Developer {
  return new Developer();
});

// 특수한 케이스
// Developer => Developer 에다가 StartipDeveloper => Developer 를 할당하는 경우
tellme(function sToD(d: StartupDeveloper): Developer {
  return new Developer();
});
// 코드자체에는 문제가 없지만 tellme함수의 f자리에는 맞지 않는다. (Developer형태이기 때문에 burning을 모르는 상황이다.)






