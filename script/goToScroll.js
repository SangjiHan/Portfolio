function goToScroll(name) {
    var element = document.querySelector("#" + name);
    if (element) {
      var location = element.offsetTop;
      window.scrollTo({ top: location, behavior: 'smooth' });
    }
  }


let windowHeight = window.innerHeight


const aboutMe = ()=>{
    const abutMeArea = document.querySelector('#aboutmearea')


    if(abutMeArea.getBoundingClientRect().top < windowHeight-500){
        setTimeout(()=>{
            abutMeArea.style.animation = 'fadeInUp 2s'
            abutMeArea.style.opacity = 1
        },200) 
        window.removeEventListener('scroll',aboutMe)
    }
}
window.addEventListener('scroll',aboutMe)

const skills = ()=>{
    const skillsArea = document.querySelector('#skillsarea')
    console.log(skillsArea);

    if(skillsArea.getBoundingClientRect().top < windowHeight-600){
        setTimeout(()=>{
            skillsArea.style.animation = 'fadeInUp 2s'
            skillsArea.style.opacity = 1
        },200) 
        window.removeEventListener('scroll',skills)
    }
}
window.addEventListener('scroll',skills)

