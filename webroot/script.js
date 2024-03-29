const works = [
  {
    title: 'Ethereum Transaction',
    description:
      'This application displays the list of the ethereum transactions depending on the given wallet address and block.<br/ <br/>In this app, React is used to visualize the data on the page and useContext is used to manage the states. To retrieve data an API from Etherscan.io is used to get all the transactions. However, the token balance by the given date and wallet address is retrieved by using Web3.js.<br/> </br>By applying all of that, my knowledge in React is strengthened especially in using some helper libraries in React. Moreover, I acquired knowledge in using Web3.js and learned the basics about how blockchain works.',
    screenshot: './images/ethereum-transaction.webp',
    screenshotMobile: './images/ethereum-transaction.webp',
    figma: null,
    link: 'https://ethereum-transaction.netlify.app/',
    code: 'https://github.com/voromahery/ethereum-transaction',
    date: '11/12/2020',
    skill: ['React', 'Web3.js'],
  },
  {
    title: 'Learn Malagasy App',
    description:
     `This project is built with react native. It is an application that helps people to learn both English and Malagasy. Find it on <a href="https://play.google.com/store/apps/details?id=com.learngasy&hl=en&gl=US">google play store</a> and start learning!<br/><br/>
     By teaming with three other developers, I built some UI and components, using a storybook in order to test the components. Redux is used to manage the state in order to make the code maintainable and easy to work with other people.`,
    screenshot: './images/learn-malagasy.webp',
    screenshotMobile: './images/learn-malagasy-mobile.webp',
    figma: 'https://www.figma.com/file/EjoxoV3NBCmOHSQHni7hU2/Malagasy-App?node-id=0%3A1',
    link: 'https://play.google.com/store/apps/details?id=com.learngasy&hl=en&gl=US',
    code: 'https://github.com/onja-org/malagasy-rn-Mercury',
    date: '25/06/2021',
    skill: ['React Native'],
  },
  {
    title: 'Country quiz',
    description:
      "This application can be used to learn about a country's capital and flag; this is useful for promoting your knowledge about a country and can help raise geographical awareness. <br/> <br/> In this project, I used React with global state management (useContext) which was necessary to simplify the code and keep it DRY. As my first major project with React, I put effort into making the code and components I wrote easy to understand and reuse. <br/> <br/> In this way, I solidified my knowledge of the context API, as well as fetching and randomising data from an API. While I am happy with the outcome, one thing to improve for my future projects would be to use compound components.",
    screenshot: './images/country-quiz.png',
    screenshotMobile: './images/country-quiz-mobile.png',
    figma: 'https://www.figma.com/file/Gw0ZNBbYN8asqFlZWy3jG1',
    link: 'http://country-quiz.daniel.onja.org/',
    code: 'https://github.com/voromahery/country-quiz',
    date: '12/11/2020',
    skill: ['CSS', 'React'],
  },
  {
    title: 'Birthday App',
    description:
      "A single page application that prevents the user from forgetting a birthday ever again! (Even if I haven't done that yet, of course) <br/> <br/> I built the foundation of this website using HTML and CSS, while most of the visual components are generated using JavaScript. To retrieve and store data I used a mixture of API fetching and local storage. <br/> <br/> By doing this project, I improved my skills at using multiple filters in unison as well as manipulating complex date formats. Overall, I am happy with the organised approach I used to tackle this project which enabled me to produce a highly satisfying result.",
    screenshot: './images/birthday-app.png',
    screenshotMobile: './images/birthday-app-mobile.webp',
    figma: null,
    link: 'http://birthday.daniel.onja.org/',
    code: 'https://github.com/voromahery/birthday-app',
    date: '11/12/2020',
    skill: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Photograf',
    description:
      "This website is suitable for photographers who want to show their work to the world.<br/> <br/> I built this with SASS, HTML and JavaScript. Completing this project enhanced my skills at using CSS frameworks such as SASS as well as applying functionality to an image slider with JavaScript.<br/> <br/> A similar project is the prototype website I built for a hypothetical software company called <a href='https://edie-homepage-daniel.netlify.app/'>Edie</a>",
    screenshot: './images/photograph.webp',
    screenshotMobile: './images/photograf-mobile.webp',
    figma:
      'https://www.figma.com/file/QDZhke3UJVjXjNwFKqsWDR/Laaqiq-1-Portfolio-detail-Responsive-Copy',
    link: 'http://photograph.daniel.onja.org/',
    code: 'https://github.com/voromahery/photograf',
    date: 'dd',
    skill: ['HTML', 'SASS', 'JavaScript'],
  },
]

const section = document.querySelector('.section__projects')
const projects = document.querySelector('.projects')

function myPortofolio() {
  const myHtml = works
    .map((item) => {
      const skills = item.skill
        .map((item) => `<li class="skills__list--item">${item}</li>`)
        .join('')

      return `
          <div class="section__projects--wrapper">
            <article>
                <a href="${item.link}" class="project__link">
                <picture>
                  <source
                  class="projects__image"
                  srcset="${item.screenshot}"
                  media="(min-width: 800px)"
                  />
                  <img src=${item.screenshotMobile} class="projects__image" alt="">
                </picture>
                </a>
               <div class="article__wrapper">
                  <h2 class="projects__title">${item.title}</h2>
                  <p class="projects__description">${item.description}</p>
                  <ul class="skills__list">
              ${skills}
                  </ul>
                  <ul class="projects__list">
                  <li class="project__list--item">
                      <a
                          href="${item.code}" class="project__link code__link">
                          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16 fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                      </a>
                  </li>
                  <li class="project__list--item">
                      <a href="${item.link}" class="project__link demo__link">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16 fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                      </a>
                  </li>
                  </ul>
               </div>
            </article>
        </div>
        `
    })
    .join('')

  projects.innerHTML = myHtml
}
myPortofolio()

const scrollButton = document.querySelector('.scroll-up__container')

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.right = '0'
  } else {
    scrollButton.style.right = '-100px'
  }
}

// When the button is clicked, it will go to the top of document
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// Activate the button
scrollButton.addEventListener('click', topFunction)
