function home() {
    var totalarea = document.getElementById("total");
    totalarea.style.display = 'none';

    var aboutmeArea = document.getElementById("aboutmearea");
    aboutmeArea.innerHTML = '';

    var skillsArea = document.getElementById("skillsarea");
    skillsArea.innerHTML = '';

    var projectArea = document.getElementById("projectarea");
    projectArea.innerHTML = '';

    var contactArea = document.getElementById("contactarea");
    contactArea.innerHTML = '';
    
    var homeContent = document.getElementById("home").innerHTML;
    var homeArea = document.getElementById("homearea");
    homeArea.innerHTML = homeContent;
}