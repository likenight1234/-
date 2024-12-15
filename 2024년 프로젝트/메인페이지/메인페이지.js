let points = 0;

function buttonClick(answer) {
    const correctAnswer = "90.0"; // 정답 설정
    let resultMessage = "";

    if (parseFloat(answer) === parseFloat(correctAnswer)) {
        resultMessage = "정답입니다! 100 포인트가 적립되었습니다.";
        points += 100; // 포인트 추가
        updatePointsDisplay(); // 포인트 업데이트
    } else {
        resultMessage = "오답입니다. 다시 시도하세요.";
    }

    // 팝업창에 메시지 설정 및 열기
    document.getElementById("popup-message").textContent = resultMessage;
    document.getElementById("popup-container").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup-container").classList.add("hidden");
}
