// 덧셈 함수
function add(a, b) {
  return a + b;
}

// 뺄셈 함수
function subtract(a, b) {
  return a - b;
}

// 곱셈 함수
function multiply(a, b) {
  return a * b;
}

// 나눗셈 함수
function divide(a, b) {
  // 0으로 나누는 경우를 처리합니다.
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

// --- 사용 예시 ---

const num1 = 10;
const num2 = 5;
const num3 = 0;

console.log(`덧셈 (${num1} + ${num2}): ${add(num1, num2)}`);         // 출력: 15
console.log(`뺄셈 (${num1} - ${num2}): ${subtract(num1, num2)}`);      // 출력: 5
console.log(`곱셈 (${num1} * ${num2}): ${multiply(num1, num2)}`);     // 출력: 50
console.log(`나눗셈 (${num1} / ${num2}): ${divide(num1, num2)}`);    // 출력: 2

// 0으로 나누는 예시
console.log(`나눗셈 (${num1} / ${num3}): ${divide(num1, num3)}`);    // 출력: Error: Cannot divide by zero