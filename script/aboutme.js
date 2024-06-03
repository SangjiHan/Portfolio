function aboutme() {
    var totalarea = document.getElementById("total");
    totalarea.style.display = 'none';

    var homeArea = document.getElementById("homearea");
    homeArea.innerHTML = '';

    var skillsArea = document.getElementById("skillsarea");
    skillsArea.innerHTML = '';

    var projectArea = document.getElementById("projectarea");
    projectArea.innerHTML = '';

    var contactArea = document.getElementById("contactarea");
    contactArea.innerHTML = '';
    
    var aboutmeContent = document.getElementById("aboutme").innerHTML;
    var aboutmeArea = document.getElementById("aboutmearea");
    aboutmeArea.innerHTML = aboutmeContent;
}