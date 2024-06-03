function contact() {
    var totalarea = document.getElementById("total");
    totalarea.style.display = 'none';

    var aboutmeArea = document.getElementById("aboutmearea");
    aboutmeArea.innerHTML = '';

    var homeArea = document.getElementById("homearea");
    homeArea.innerHTML = '';

    var skillsArea = document.getElementById("skillsarea");
    skillsArea.innerHTML = '';

    var projectArea = document.getElementById("projectarea");
    projectArea.innerHTML = '';
    
    var contactContent = document.getElementById("contact").innerHTML;
    var contactArea = document.getElementById("contactarea");
    contactArea.innerHTML =contactContent;
}