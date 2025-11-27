// area.js
// 다양한 도형의 넓이를 계산하는 유틸리티 모듈
//Git Flow 테스트!!!2222


export const Area = {
  // 원
  circle(radius) {
    if (radius < 0) throw new Error("반지름은 0 이상이어야 합니다.");
    return Math.PI * radius * radius;
  },

  // 직사각형
  rectangle(width, height) {
    if (width < 0 || height < 0) throw new Error("가로/세로는 0 이상이어야 합니다.");
    return width * height;
  },

  // 정사각형
  square(side) {
    if (side < 0) throw new Error("변의 길이는 0 이상이어야 합니다.");
    return side * side;
  },

  // 삼각형 (밑변 × 높이 / 2)
  triangle(base, height) {
    if (base < 0 || height < 0) throw new Error("밑변/높이는 0 이상이어야 합니다.");
    return (base * height) / 2;
  },

  // 평행사변형 (밑변 × 높이)
  parallelogram(base, height) {
    if (base < 0 || height < 0) throw new Error("밑변/높이는 0 이상이어야 합니다.");
    return base * height;
  },

  // 사다리꼴 ((윗변 + 아랫변) × 높이 / 2)
  trapezoid(top, bottom, height) {
    if (top < 0 || bottom < 0 || height < 0)
      throw new Error("변/높이는 0 이상이어야 합니다.");
    return ((top + bottom) * height) / 2;
  },

  // 타원 (π × 긴반지름 × 짧은반지름)
  ellipse(a, b) {
    if (a < 0 || b < 0) throw new Error("반지름은 0 이상이어야 합니다.");
    return Math.PI * a * b;
  }
};
