function skills() {
    var totalarea = document.getElementById("total");
    totalarea.style.display = 'none';

    var aboutmeArea = document.getElementById("aboutmearea");
    aboutmeArea.innerHTML = '';

    var homeArea = document.getElementById("homearea");
    homeArea.innerHTML = '';

    var projectArea = document.getElementById("projectarea");
    projectArea.innerHTML = '';

    var contactArea = document.getElementById("contactarea");
    contactArea.innerHTML = '';
    
    var skillsContent = document.getElementById("skills").innerHTML;
    var skillsArea = document.getElementById("skillsarea");
    skillsArea.innerHTML = skillsContent;
}