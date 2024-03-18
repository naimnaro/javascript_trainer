const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printMultiplicationTable() {
    rl.question("구구단 중 출력할 단을 입력하세요: ", (answer) => {
        const number = parseInt(answer);

        // 입력된 값이 유효한지 확인
        if (isNaN(number) || number < 1 || number > 9) {
            console.log("1부터 9까지의 정수를 입력해주세요.");
            rl.close();
            return;
        }

        console.log(`${number}단을 출력합니다:`);
        
        // 구구단 출력
        for (let i = 1; i <= 9; i++) {
            console.log(`${number} * ${i} = ${number * i}`);
        }

        rl.close();
    });
}

// 구구단 출력 함수 호출
printMultiplicationTable();
