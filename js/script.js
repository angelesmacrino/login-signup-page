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
        "alt": "Smiling brunette woman with a hat. Photo by Allef Vinicius on Unsplash",
        "quote": "I feel more comfortable knowing that I can rely on this page",
        "name":"Maria, Bucharest"

    },

    {
        "url": "./images/bbh-singapore.jpg",
        "alt": "Smiling white haired woman sitting outside. Photo by BBH Singapore on Unsplash",
        "quote": "A professional page for a professional woman",
        "name":"Binita, Pune"

    },

    {
        "url": "./images/brooke-cagle.jpg",
        "alt": "Short haired person with glasses, sitting on a couch with a computer on their lap. Photo by Brooke Cagle on Unsplash",
        "quote": "The future is now",
        "name":"Ash, Edinburgh"

    }
];

$(function() {
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



