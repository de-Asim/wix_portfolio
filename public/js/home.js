
const skills = document.getElementById("skills");
const experience = document.getElementById('experience')
// console.log(skills);

const skillObj = [
  {
    name: "wix",
    main: "wix",
    percentage: 60,
  },
  {
    name: "wordpress",
    main: "wordpress",
    percentage: 30,
  },
  {
    name: "photoshop",
    main: "photoshop",
    percentage: 40,
  },
  {
    name: "javascript",
    main: "javascript",
    percentage: 80,
  },
  {
    name: "react",
    main: "react",
    percentage: 70,
  },
  {
    name: "node",
    main: "node.JS & Express",
    percentage: 80,
  },
  {
    name: "mongodb",
    main: "mongo db",
    percentage: 85,
  },
  {
    name: "htmlcss",
    main: "html & css",
    percentage: 90,
  },
];

const css = window.document.styleSheets[0];




function display() {
  skillObj.forEach((Element) => {
    skills.innerHTML += `  <div class="skillspan"><span>${Element.main}</span><div class ="barspan"><div class="bar" id="${Element.name}"></div><div class='per'>${Element.percentage}%</div></div></div>`;
    let widthid = document.getElementById(Element.name);
    css.insertRule(`
@keyframes ${Element.name}An {
  0%   { width: 0;}
  100% { width: ${Element.percentage}%; }
}`, css.cssRules.length);
widthid.style.animation=`${Element.name}An 2s forwards`;
  });
}

let options = {
  root: null,
  threshold: "0",
  rootMargin: "0px",
};
let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if(entry.target == skills){
      display();
      observer.unobserve(entry.target);
      }
      else if(entry.target == experience)
      {
        document.documentElement.style.setProperty('--lh', "lineheight 4s forwards")
        console.log(experience);
      }
    }
  });
}, options);
observer.observe(skills);
observer.observe(experience);

const con2 = document.getElementById('container2');
window.addEventListener('scroll',()=>{
  let offset = window.pageYOffset;
  con2.style.backgroundPositionY= 600+(offset*0.7)+"px";
  con2.style.backgroundSize='cover';
})
const con4 = document.getElementById('container4');
window.addEventListener('scroll',()=>{
  let offset = window.pageYOffset;
  con4.style.backgroundPositionY= (offset*0.7)+"px";
  con4.style.backgroundSize='cover';
})
