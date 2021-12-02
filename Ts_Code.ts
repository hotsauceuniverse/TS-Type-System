// 타입 시스템
// 1) 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
// 2) 컴파일러가 자동으로 타입을 추론하는 시스템

// 타입스크립트의 타입 시스템
// 1) 타입을 명시적으로 지정할 수 있다.
// 2) 타입을 명시적으로 지정하지 않으면, 타입스트립트 컴파일러가 자동으로 타입을 추론

// 타입스크립드의 추론에 의지하는 경우
// a의 타입을 멸시적으로 지정하지 않은 경우이기 때문에 a는 any로 추론이 된다.
// 함수의 리턴 타입은 number로 추론된다.(NaN도 number의 하나이다.)
function f1(a) {
  return a * 38;
}

console.log(f1(10)); //380
console.log(f1('A') + 5); //NaN

// a가 any로 추론되기 때문에 위험한 형태이다.  
// => noImplicitAny 옵션을 사용
// 타입을 명시적으로 지정하지 않은 경우 타입스크립트가 'any'라고 판단하게되면 컴파일 에러를 발생


// noImplicitAny사용하게 되면 Error가 발생하여 사용자의 코드를 실행할 수 없다.
function f2(a) {
  return a * 38;
}

console.log(f1(10)); 
console.log(f1('A') + 5);


// Number 타입으로 추론된 리턴 타입
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number로 추론이 된다.
function f3(a: number) {
  if (a > 0) {
    return a * 38;
  }
}

// 해당 함수의 리턴 타입은 number이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 있다.
// 하지만 실제 undefined + 5가 실행 되어 NaN이 출력된다.
console.log(f3(5)); //190
console.log(f3(-5) + 5); //NaN

// => strictNullChecks 옵션을 사용
// 모든 타입에 자동으로 포함되어 있는 'null'과 'undefined' 를 제거해준다.


// 매개변수의 타입은 명시적으로 지정했다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number | undefined로 추론이 된다.
function f4(a: number) {
  if (a > 0) {
    return a * 38;
  }
}

// 해당 함수의 리턴 타입은 number | undefined이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 없다.
console.log(f4(5)); //number | undefined이기 때문에 실행은 못하지만 잘못된것은 아니다.
console.log(f4(-5) + 5); //error


// 매개변수의 타입과 함수의 리턴 타입을 명시적으로 지정할 때
function f5(a: number): number {
  if (a > 0) {
    return a * 38;
  }
} // if부분만 리턴되기 때문에 if가 아닌 부분에 대해 error발생

// => noImplicitReturn 옵션을 사용
// 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생시킨다.


// 매개변수에 object가 들어오는 경우 - object literal type
function f6(a: {name: string, age: number}): string {
  return `이름은 ${a.name} 이고, 나이는 ${a.age}살 입니다.`;
}

console.log(f6({name: 'Seyoung', age: 27})); // 이름은 Seyoung이고, 나이는 27살 입니다. 
console.log(f6('A')) //error - string형식의 인수는 {name: string, age: number}형식의 매개 변수에 할당될 수 없다.


// 나만의 타입 만드는 법
interface PersonInterface {
  name: string;
  age: number;
}

function f7(a: PersonInterface): string {
  return `이름은 ${a.name} 이고, 나이는 ${a.age}살 입니다.`;
}

console.log(f7({name: 'Seyoung', age: 27})); // 이름은 Seyoung이고, 나이는 27살 입니다. 