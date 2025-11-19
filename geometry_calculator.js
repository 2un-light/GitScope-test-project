/**
 * 원의 면적과 둘레를 계산하는 함수들입니다.
 * PI 값은 Math.PI (내장 상수)를 사용합니다.
 */

// 원의 면적을 계산하는 함수 (Area = π * r^2)
function calculateCircleArea(radius) {
  if (radius < 0) {
    return "Error: Radius cannot be negative.";
  }
  // Math.PI는 파이(π) 값, Math.pow(r, 2)는 r의 제곱입니다.
  return Math.PI * Math.pow(radius, 2);
}

// 원의 둘레를 계산하는 함수 (Circumference = 2 * π * r)
function calculateCircleCircumference(radius) {
  if (radius < 0) {
    return "Error: Radius cannot be negative.";
  }
  return 2 * Math.PI * radius;
}

// --- 사용 예시 ---
const testRadius = 5;

// 원의 면적 계산
const area = calculateCircleArea(testRadius);
console.log(`반지름이 ${testRadius}인 원의 면적: ${area.toFixed(2)}`); // 소수점 둘째 자리까지 출력

// 원의 둘레 계산
const circumference = calculateCircleCircumference(testRadius);
console.log(`반지름이 ${testRadius}인 원의 둘레: ${circumference.toFixed(2)}`); // 소수점 둘째 자리까지 출력

// 잘못된 입력 예시 (음수)
console.log(calculateCircleArea(-10));