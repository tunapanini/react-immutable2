import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Record } from 'immutable';

const Person = Record({
  name: '홍길동',
  age: 1
});


let person = Person();

console.log(person); 
// ▶Object {name: "홍길동", age: 1 }

console.log(person.name, person.age);
// "홍길동" 1

person = person.set('name', '김민준');
console.log(person.name); // 김민준


// 이건 오류 납니다: person.name = '철수';

// 값을 따로 지정해줄수도 있습니다.
person = Person({
  name: '영희',
  age: 10
});

const { name, age } = person; // 비구조화 할당도 문제없죠.
console.log(name, age); // "영희" 10

// 재생성 할 일이 없다면 이렇게 해도 됩니다.
const dog = Record({
  name: '멍멍이',
  age: 1
})()

console.log(dog.name); // 멍멍이


render(<App />, document.getElementById('root'));
