let contrastToggle = false;
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove('dark-theme')
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_2em29tg',
            'template_9uumvxq',
            event.target,
            'bAUtINrrPb6oEmrac'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                "The email service is temporarily unavailable. Please contact me directly."
            );
        })
}

let isModalOpen = false;
function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open')

    }
    isModalOpen = true;
    //toggle modal 
    document.body.classList += " modal--open"
}

const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container')

    projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <button class="close-btn" type="button">&#x2715;</button>
                        <h1 class="project-title">${data.name}</h1>
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" class="btn">github</a>
                        <a href="${data.live}" class="btn">see live</a>
                    </div>
                </div>
            </div>
    `;
}

let projectData = [
    {
        name: 'Google Clone',
        detail: 'A Google search engine clone built using React and the Google API. Allows users to search the web and view results in a familiar interface.',
        github: 'https://github.com/JaredKlopstein/google-clone',
        live: 'https://clone-9a18f.web.app/',
        tags: '#react, #javascript, #html, #css'
    },
    {
        name: 'JS30',
        detail: 'A collection of 30 vanilla JavaScript challenges created by Wes Bos, covering topics such as animations, APIs, and web components. Helps improve JS skills without frameworks or libraries.',
        github: 'https://github.com/JaredKlopstein/JS30',
        live: '#',
        tags: '#javascript, #fullstack, #css'
    },
    {
        name: 'LinkedIn Clone',
        detail: 'A LinkedIn clone built using React and Redux. Features so far include posting on timeline',
        github: 'https://github.com/JaredKlopstein/linkedin-clone',
        live: '',
        tags: '#javascript, #fullstack, #css'
    },
    {
        name: 'Slack Clone',
        detail: 'A Slack clone built using React and Firebase. Features real-time messaging, user authentication, and data storage on the cloud.',
        github: 'https://github.com/JaredKlopstein/slack-clone',
        live: '#',
        tags: '#javascript, #fullstack, #css'
    },
    {
        name: 'Portfolio Website',
        detail: 'A portfolio website built using vanilla JavaScript. Includes features such as responsive design, smooth scrolling, and dynamic content loading.',
        github: 'https://github.com/JaredKlopstein/Advanced-Portfolio',
        live: '#',
        tags: '#javascript, #html, #css'
    },
    {
        name: 'AI Avatar Generator',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: 'https://github.com/JaredKlopstein/AI-Avatar',
        live: '#',
        tags: '#javascript, #fullstack, #css'
    },
    {
        name: 'ExplAInBot',
        detail: 'A React application that uses AI to explain complex topics in simple terms. Users can input a topic and receive a simplified explanation using natural language processing and machine learning.',
        github: 'https://github.com/JaredKlopstein/GPT3-Writer',
        live: '#',
        tags: '#javascript, #fullstack, #ai, #css'
    },
    {
        name: 'ExplAInBot Chrome Extension',
        detail: 'This is a Chrome extension for the ExplAInBot Project',
        github: 'https://github.com/JaredKlopstein/GPT3-Writer-Extension',
        live: '#',
        tags: '#javascript, #fullstack, #css, #ai, #react'
    },
    {
        name: 'Cinema Central',
        detail: 'A React application similar to Netflix, built using React and incorporating TMDB API for movie data. Features include user authentication, browsing, and searching.',
        github: 'https://github.com/JaredKlopstein/cinema-central',
        live: '#',
        tags: '#javascript, #fullstack, #css, #react'
    },
    {
        name: 'Treact Webpage Clone',
        detail: `A clone of Treact's website layout using HTML, CSS, and JavaScript. Includes responsive design, animations, and interactive components.`,
        github: 'https://github.com/JaredKlopstein/Treact-Clone',
        live: '#',
        tags: '#html, #css'
    },
    {
        name: 'Library - Book Store',
        detail: 'A book store application that allows users to browse, search, and purchase books. Features include a shopping cart, checkout process, and payment integration. Built using React.',
        github: 'https://github.com/JaredKlopstein/Book-Store',
        live: '#',
        tags: '#javascript, #fullstack, #css, #react'
    },
    {
        name: 'FullStackOpen',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: 'https://github.com/JaredKlopstein/fullstackopen',
        live: '#',
        tags: '#javascript, #fullstack, #css, #react'
    }
]

projectData.forEach(data => createProjectCards(data));

// project cards open and close functions

let projects = document.querySelectorAll('.project-card');

projects.forEach((card, index) => {
    let closeBtn = card.querySelector('.close-btn');

    closeBtn.addEventListener('click', () => {
        projects.forEach((item, i) => {
            item.classList.remove('blur')
        })
        card.classList.remove('active');
    })

    card.addEventListener('click', (e) => {
        if(e.target != closeBtn){
            projects.forEach((item, i) => {
                if(i != index){
                    item.classList.add('blur')
                }
            })
            card.classList.add('active')
        }
    })

})

// project filter function

const tags = document.querySelectorAll('.filter-btn');

tags.forEach(btn => {
    btn.addEventListener('click', () => {
        projects.forEach(card => {
            if(btn.innerHTML.toLowerCase() == 'all'){
                card.style.display = 'block';
            } else{
                if(card.getAttribute('data-tags').includes(btn.innerHTML.toLowerCase())){
                    card.style.display = 'block';
                } else{
                    card.style.display = 'none';
                }
            }
        })

        tags.forEach(item => item.classList.remove('active'));
        btn.classList.add('active')
    })
})