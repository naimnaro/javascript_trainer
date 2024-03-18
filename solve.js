function factorial(n) {
    if (n === 0) {
      return 0;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // 사용자로부터 정수 입력 받기
  const number = parseInt(prompt("정수를 입력하세요:"));
  
  // 입력된 정수의 팩토리얼 출력
  console.log(`${number}의 팩토리얼은 ${factorial(number)}입니다.`);
  