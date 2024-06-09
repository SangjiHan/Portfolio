document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector("#texthidden");
    const content = text.textContent; // text 요소의 텍스트를 가져옵니다.
    const textshow = document.querySelector("#textshow")
    text.style.display = "inline-block";
    text.style.opacity = "0";
    
    console.log(content); // 텍스트의 텍스트를 콘솔에 출력합니다.

    let i = 0;
    const intervalId = setInterval(function() {
        if (i < content.length) {
            // 줄바꿈 처리
            if (content[i] === "\n") {
                textshow.innerHTML += "<br>";
            } else {
                textshow.innerHTML += content[i];
            }
            textshow.style.opacity = "1"; 
            i++;
        } else {
            clearInterval(intervalId); 
        }
    }, 100); 
});