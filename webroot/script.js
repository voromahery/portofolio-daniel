const works = [
  {
    title: "Photograf",
    description:
      "This website is suitable for a photographer who want to wants to display his or her works online, thisis a site I created using Sass and a little javascript",
    screenshot: "./images/photograf.webp",
    figma:
      "https://www.figma.com/file/QDZhke3UJVjXjNwFKqsWDR/Laaqiq-1-Portfolio-detail-Responsive-Copy",
    link: "https://voromahery.github.io/front-end-finals/",
    code: "https://github.com/voromahery/front-end-finals",
    date: "dd",
    skill: ["Html5", "Sass", "Css3"],
  },
  {
    title: "Edie home page",
    description: "A responsive project using Sass.",
    screenshot: "./images/edie.webp",
    figma:
      "https://www.figma.com/file/ahnGupP4JjTdVJDTRfMRF2/edie-homepage?node-id=0%3A1",
    link: "https://edie-homepage-daniel.netlify.app/",
    code: "https://github.com/voromahery/edie-homepage",
    date: "19/11/2020",
    skill: ["Html5", "Sass", "Css3"],
  },
  {
    title: "Birthday App",
    description:
      "This is a week project I made when I first learned vanilla javascript",
    screenshot: "./images/birthday-app.webp",
    figma: "",
    link: "https://birthday-app-daniel.netlify.app/",
    code: "https://github.com/voromahery/birthday-app",
    date: "11/12/2020",
    skill: ["Html5", "Css3", "Javascript"],
  },
  {
    title: "Country quiz",
    description:
      "The first game I have built which is used to learn the capital of a city and their flags, built with react.",
    screenshot: "./images/country-quiz.webp",
    figma: "https://www.figma.com/file/Gw0ZNBbYN8asqFlZWy3jG1",
    link: "https://country-quiz-daniel.netlify.app/",
    code: "https://github.com/voromahery/country-quiz",
    date: "12/11/2020",
    skill: ["Css3", "React"],
  },
  {
    title: "OnjaBook",
    description:
      "Simple clone of facebook in order to learn about reducer in react.",
    screenshot: "./images/onjabook.webp",
    figma: "",
    link: "https://onjabook-daniel.netlify.app/",
    date: "05/12/2020",
    skill: ["Css3", "React"],
  },
];

console.log(works);
const section = document.querySelector(".section__projects");
const projects = document.querySelector(".projects");

function myPortofolio() {
  const myHtml = works
    .map((item) => {
      const skills = item.skill
        .map((item) => `<span class="skills__list--item">${item}</span>`)
        .join("");

      return `
    <div class="section__projects--wrapper">
            <article>
            <img src="${item.screenshot}" class="projects__image" alt="">
                <h2 class="projects__title">${item.title}</h2>
                <p class="projects__description">${item.description}</p>
               <ul class="skills__list">
               ${skills}
               </ul>
            </article>
            <ul class="projects__list">
            <li class="project__list--item">
                <a
                    href="${item.code}" class="project__link code__link">Code link
                </a>
            </li>
            <li class="project__list--item">
                <a href="${item.link}" class="project__link demo__link">Demo</a>
            </li>
            </ul>
        </div>
        `;
    })
    .join("");

  section.insertAdjacentHTML("afterend", myHtml);
}
myPortofolio();
