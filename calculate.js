/**
 * operator 인자에 따라 덧셈, 뺄셈, 곱셈, 나눗셈을 처리하는 범용 함수
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 * @param {string} operator 사용할 연산자 ('+', '-', '*', '/')
 * @returns {number | string} 계산 결과 또는 오류 메시지
 */
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      // 0으로 나누는 경우 예외 처리
      if (b === 0) {
        return "Error: Cannot divide by zero";
      }
      return a / b;
    default:
      return "Error: Invalid operator";
  }
}

// --- 사용 예시 ---

const num1 = 10;
const num2 = 5;
const num3 = 0;

console.log(`덧셈 (${num1} + ${num2}): ${calculate(num1, num2, '+')}`); // 출력: 15
console.log(`뺄셈 (${num1} - ${num2}): ${calculate(num1, num2, '-')}`); // 출력: 5
console.log(`곱셈 (${num1} * ${num2}): ${calculate(num1, num2, '*')}`); // 출력: 50
console.log(`나눗셈 (${num1} / ${num2}): ${calculate(num1, num2, '/')}`); // 출력: 2

// 0으로 나누는 예시
console.log(`나눗셈 (${num1} / ${num3}): ${calculate(num1, num3, '/')}`); // 출력: Error: Cannot divide by zero
console.log(`잘못된 연산자: ${calculate(num1, num2, '%')}`); // 출력: Error: Invalid operator