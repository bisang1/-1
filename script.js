const questions = [
    "업무에 대한 열정이 점점 사라지고 있다고 느낍니다.",
    "아침에 일어나기가 점점 힘들어집니다.",
    "작은 일에도 쉽게 짜증이 납니다.",
    "업무 성과가 예전만 못하다고 느낍니다.",
    "일에 대한 집중력이 떨어졌습니다.",
    "퇴근 후에는 완전히 지쳐있는 느낌입니다.",
    "업무 중에 자주 피로감을 느낍니다.",
    "일이 즐겁지 않고 의미 없게 느껴집니다.",
    "주변 사람들과 대화하기 싫어졌습니다.",
    "잠을 자도 피로가 회복되지 않습니다.",
    "이전보다 실수가 많아졌습니다.",
    "업무에 대한 자신감이 떨어졌습니다.",
    "퇴사를 자주 생각합니다.",
    "주말이 끝나는 게 두렵습니다.",
    "직장에서 소외감을 느낍니다.",
    "업무량이 감당하기 힘들 정도입니다.",
    "일과 삶의 균형이 깨졌다고 느낍니다.",
    "건강이 나빠진 것 같습니다.",
    "미래가 불안합니다.",
    "나의 발전 가능성이 보이지 않습니다."
];

let currentQuestion = 0;
let score = 0;

function initTest() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('question-text').textContent = 
            `${currentQuestion + 1}. ${questions[currentQuestion]}`;
        document.getElementById('progress').style.width = 
            `${(currentQuestion / questions.length) * 100}%`;
    } else {
        showResult();
    }
}

function selectOption(value) {
    score += value;
    currentQuestion++;
    showQuestion();
}

function showResult() {
    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;
    
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    let resultText = '';
    let solution = '';
    
    if (percentage >= 75) {
        resultText = "심각한 번아웃 상태입니다.";
        solution = `
            <h3>권장 솔루션:</h3>
            <ul>
                <li>전문가의 상담을 받아보세요.</li>
                <li>당분간 휴식이 필요합니다.</li>
                <li>업무 조정을 요청하세요.</li>
                <li>규칙적인 운동과 충분한 수면을 취하세요.</li>
            </ul>
        `;
    } else if (percentage >= 50) {
        resultText = "번아웃 초기 증상이 있습니다.";
        solution = `
            <h3>권장 솔루션:</h3>
            <ul>
                <li>업무와 휴식의 균형을 찾으세요.</li>
                <li>취미 활동을 시작해보세요.</li>
                <li>동료들과 대화를 나누세요.</li>
                <li>주기적인 운동을 시작하세요.</li>
            </ul>
        `;
    } else {
        resultText = "건강한 상태입니다.";
        solution = `
            <h3>권장 솔루션:</h3>
            <ul>
                <li>현재의 좋은 상태를 유지하세요.</li>
                <li>스트레스 관리를 계속하세요.</li>
                <li>정기적인 자기 점검을 하세요.</li>
            </ul>
        `;
    }
    
    document.getElementById('score-text').textContent = resultText;
    document.getElementById('solution-text').innerHTML = solution;
}

function restartTest() {
    document.getElementById('test-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    initTest();
}

// 테스트 시작
initTest();

