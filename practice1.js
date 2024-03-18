// 변수 선언과 할당
let name = 'John';
let age = 30;
let num = 5;
// 반복문 (for 문)
for (let i = 0; i < 5; i++) {
  num = num + 5;
  console.log('Index:', num);
}

// 조건문 (if 문)
if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}

// 배열
let numbers = [1, 2, 3, 4, 5];

// 배열 순회 (for...of 문)
for (let num of numbers) {
  console.log('Number:', num);
}

// 배열 메소드 (forEach)
numbers.forEach((num, index) => {
  console.log('Index:', index, 'Number:', num);
});

// 알고리즘 (팩토리얼 계산)
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

// 문자열 다루기
let str = 'Hello, World!';

// 문자열 길이
console.log('Length:', str.length);

// 문자열 분리
let words = str.split(' ');
console.log('Words:', words);

// 문자열 합치기
let newStr = words.join('-');
console.log('New String:', newStr);

// 문자열 검색
let index = str.indexOf('World');
console.log('Index of "World":', index);

// 문자열 대체
let replacedStr = str.replace('World', 'JavaScript');
console.log('Replaced String:', replacedStr);
