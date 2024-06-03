function home() {
    var totalarea = document.getElementById("total");
    totalarea.style.display = 'none';

    var aboutmeArea = document.getElementById("aboutmearea");
    aboutmeArea.innerHTML = '';
    
    var homeContent = document.getElementById("home").innerHTML;
    var homeArea = document.getElementById("homearea");
    homeArea.innerHTML = homeContent;
}