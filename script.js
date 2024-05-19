import projectsJson from "./projects.json" with { type: 'json' };
/** @type {HTMLDivElement} */ 
const projListDiv = document.querySelector('.container')
/** @type {HTMLDivElement} */
const descDiv = document.querySelector('.discription')

const projectsArray = projectsJson.projects;
projectsArray.forEach(project => { genProjectDiv(project) });

function genProjectDiv(project) {
    const projectDiv = document.createElement("div");
    projListDiv.appendChild(projectDiv);
    const img = document.createElement("img");
    img.src = project.imgSrc;
    const liveLink = document.createElement('a');
    liveLink.href = project.liveURL;
    liveLink.textContent = project.name;
    const githubLink = document.createElement('a');
    githubLink.href = project.githubURL;
    githubLink.textContent = "Github";
    projectDiv.append(img,liveLink,document.createElement('br'),githubLink);
    projectDiv.addEventListener('mouseenter', () => {updateDescription(project.desc,project.languages)})
}

function updateDescription(descText, langArray) {
    descDiv.textContent = descText + ' -- [' + langArray + ']';
}
