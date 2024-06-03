function aboutme() {
    // total 영역을 숨깁니다.
    var totalarea = document.getElementById("total");
    totalarea.style.display = 'none';

    var homeArea = document.getElementById("homearea");
    homeArea.innerHTML = '';

    // home 영역의 내용을 homearea로 옮깁니다.
    var aboutmeContent = document.getElementById("aboutme").innerHTML;
    var aboutmeArea = document.getElementById("aboutmearea");
    aboutmeArea.innerHTML = aboutmeContent;
}