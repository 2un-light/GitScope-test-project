function calculate(a, operator, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
    case '×':
      return a * b;
    case '/':
    case '÷':
      if (b === 0) throw new Error("0으로 나눌 수 없습니다!");
      return a / b;
    default:
      throw new Error("지원하지 않는 연산자입니다!");
  }
}

// 테스트
console.log(calculate(10, '+', 5)); // 15
console.log(calculate(10, '-', 5)); // 5
console.log(calculate(10, '*', 5)); // 50
console.log(calculate(10, '/', 2)); // 5
