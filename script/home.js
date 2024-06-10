document.addEventListener("DOMContentLoaded", function() {
    const content = "Hi, I'm Sangji. \n Front-end developer.";
    const text = document.querySelector("#text");
    let i = 0;

    function typing(){
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i >= content.length) {
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(typing, 180);
});


setTimeout(() => {
    const element = document.querySelector('#blink');
    element.style.opacity = '0'; 
}, 8000);