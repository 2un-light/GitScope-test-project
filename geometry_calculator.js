/**
 * 원의 반지름을 기반으로 면적과 둘레를 계산하는 Circle 클래스
 */
class Circle2 {
    // 생성자: 인스턴스가 만들어질 때 반지름(radius)을 설정
    constructor(radius) {
        if (radius < 0) {
            throw new Error("Radius cannot be negative.");
        }
        // 클래스의 속성(Property)으로 반지름 저장
        this.radius = radius;   
    }

    /**
     * 원의 면적을 계산하는 메서드 (Area = π * r^2)
     * @returns {number} 원의 면적
     */
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    /**
     * 원의 둘레를 계산하는 메서드 (Circumference = 2 * π * r)
     * @returns {number} 원의 둘레
     */
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// --- 사용 예시 ---
try {
    const testRadius = 5;
    // 반지름 5인 원 객체 생성
    const myCircle = new Circle(testRadius);

    // 면적 계산
    const area = myCircle.calculateArea();
    console.log(`반지름이 ${testRadius}인 원의 면적: ${area.toFixed(2)}`);

    // 둘레 계산
    const circumference = myCircle.calculateCircumference();
    console.log(`반지름이 ${testRadius}인 원의 둘레: ${circumference.toFixed(2)}`);

    // 잘못된 입력 예시 (객체 생성 시 오류 발생)
    // const badCircle = new Circle(-10);
} catch (error) {
    console.error(`Error: ${error.message}`);
}