/**
 * Array Functions
 */
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

// push()
console.log(iveMembers.push("코드팩토리"));
console.log(iveMembers);

console.log("------------------");
// pop()
console.log(iveMembers.pop());
console.log(iveMembers);

console.log("------------------");
// shift()
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);

console.log("------------------");
// splice()
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

console.log("------------------");
// concat()
console.log(iveMembers.concat("코드팩토리"));
console.log(iveMembers);

console.log("------------------");
// slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator
let iveMembers2 = [...iveMembers];
console.log(iveMembers2);

let iveMembers3 = [iveMembers];
console.log(iveMembers3);

console.log("------------------");
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([...iveMembers] === iveMembers);

// join()
console.log(iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면(뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면(앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

// map()
console.log("------------------");
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  })
);
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
/**
 * 1) 초기값이 0이 p에 입력된다.
 * 2) numbers 어레이의 첫번째 값인 1이 n에 입력된다.
 * 3) p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4) 3에서 반환한 값(1)이 p에 입력된다.
 * 5) 어레이의 두번째 값인 8이 n에 입력된다.
 * 6) p + n 즉, 1 + 8의 결과값인 9가 반환된다.
 * 7) 6에서 반환한 값(9)가 p에 입력된다.
 * 8) numbers 리스트의 모든 값들을 다 순회할때까지 반복
 *    결국 모든 값을 다 더한 25가 반환된다.
 */
