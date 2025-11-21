/**
 * operator 인자에 따라 덧셈, 뺄셈, 곱셈, 나눗셈을 처리하는 범용 함수
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 * @param {string} operator 사용할 연산자 ('+', '-', '*', '/')
 * @returns {number | string} 계산 결과 또는 오류 메시지
 */
function calculate(a, b, operator) {
  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => (y === 0 ? 'Error: Cannot divide by zero' : x / y),
  };

  const operation = operations[operator];
  return operation ? operation(a, b) : 'Error: Invalid operator';
}

// --- 사용 예시 ---
console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 5, '/')); // 2
console.log(calculate(10, 0, '/')); // Error: Cannot divide by zero
console.log(calculate(10, 5, '%')); // Error: Invalid operator
