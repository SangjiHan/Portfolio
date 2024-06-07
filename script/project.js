function project() {
    var totalarea = document.getElementById("total");
    totalarea.style.display = 'none';

    var aboutmeArea = document.getElementById("aboutmearea");
    aboutmeArea.innerHTML = '';

    var homeArea = document.getElementById("homearea");
    homeArea.innerHTML = '';

    var skillsArea= document.getElementById("skillsarea");
    skillsArea.innerHTML = '';

    var contactArea = document.getElementById("contactarea");
    contactArea.innerHTML = '';
    
    var projectContent = document.getElementById("project").innerHTML;
    var projectArea = document.getElementById("projectarea");
    projectArea.innerHTML = projectContent;
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });