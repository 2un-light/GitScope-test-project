/**
 * 원의 반지름을 기반으로 면적과 둘레를 계산하는 Circle 클래스
 */
class Circle {
  constructor(radius) {
    this.setRadius(radius);
  }

  /**
   * 반지름 설정 (유효성 검사 포함)
   * @param {number} radius 
   */
  setRadius(radius) {
    if (typeof radius !== "number" || isNaN(radius)) {
      throw new Error("Radius must be a valid number.");
    }
    if (radius < 0) {
      throw new Error("Radius cannot be negative.");
    }
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  /**
   * 원의 면적 (Area = πr²)
   */
  get area() {
    return Math.PI * this._radius ** 2;
  }

  /**
   * 원의 둘레 (Circumference = 2πr)
   */
  get circumference() {
    return 2 * Math.PI * this._radius;
  }
}

// --- 예시 ---
try {
  const circle = new Circle(5);

  console.log(`면적: ${circle.area.toFixed(2)}`);
  console.log(`둘레: ${circle.circumference.toFixed(2)}`);

} catch (e) {
  console.error(e.message);
}
