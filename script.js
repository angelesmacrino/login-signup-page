const navBar = `
<a href="./index.html" class="navigation mx-5 me-auto p-2 text-decoration-none" >Home</a>
<a href="./login.html" class="navigation mx-5 p-2 text-decoration-none" >Login</a>
<a href="./signup.html" class="navigation mx-5 p-2 text-decoration-none" >Signup</a>
`;

const gente = [
    {
        "url": "./images/Abby_Savage.jpg",
        "alt": "Redhead man with beard and lumberjack shirt, out in the woods. Photo by Abby Savage on Unsplash",
        "quote": "It's cool.",
        "name":"Jeff, California."

    },

    {
        "url": "./images/allef-vinicius.jpg",
        "alt": "asd",
        "quote": "asd",
        "name":"asd"

    },

    {
        "url": "./images/bbh-singapore.jpg",
        "alt": "asd",
        "quote": "asd",
        "name":"asd"

    },

    {
        "url": "./images/brooke-cagle.jpg",
        "alt": "asd",
        "quote": "asd",
        "name":"asd"

    }
];


$(document).ready(() => {  
    var cards = gente.map(persona => 
        $(`<div class="card">
                <img src="${persona.url}" class="card-img-top" alt="${persona.alt}">
                <div class="card-body">
                    <blockquote class="card-text text-center">"${persona.quote}"</blockquote>
                    <footer>
                        — <cite class="author">${persona.name}</cite>
                    </footer>
                </div>
            </div>`)
        );
    $(".testimonials .grid").append(cards);
    $("nav").append(navBar);
});