const pokemonContainer= document.querySelector('.pokemon-container')


function fetchpokemon(id){
    fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then ((res) => res.json())
    .then ((data) => {
        createpokemon(data);
    })
}
function fetchpokemons(number){
    for (let i = 1; i <= number; i++){
        fetchpokemon(i);
    }
}
 function createpokemon (pokemon){

    const button = document.createElement('div');
    button.addEventListener("click",()=>{
        location.href="paginapokemon.html"
    })
    button.classList.add("button-vermas");
    button.textContent=`ver mas`;
    
    
  
    const card = document.createElement("div");
    card.classList.add("pokemon-block");

   
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement('img');
    sprite.src = sprite.src = pokemon.sprites.other.home.front_default;

  
    
    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement ('p');
    name.classList.add ('name');
    name.textContent = pokemon.name;

    
    const experience = document.createElement('p');
    experience.classList.add('base_experience');
    experience.textContent = `Experiencia ${pokemon.base_experience}`

    // const habita = document.createElement('p');
    // habita.classList.add('species');
    // habita.textContent = pokemon.species;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(experience)
    card.appendChild(button)
    // card.appendChild(habita)

    pokemonContainer.appendChild(card);
    
    

 }

 

 fetchpokemons(150
    );

const signupform= document.getElementById('signup-form')
signupform.addEventListener('submit', (e) => {
    e.preventDefault();

    const signupEmail= document.querySelector('#signup-email').value;
    const signupPasword= document.querySelector('#signup-pasword').value;



    
    auth
    .createUserWithEmailAndPassword(signupEmail,signupPasword)
    .then(userCredential =>{
        console.log()

    })
});


// const button = document.createElement('dvi');
// button.addEventListener("click",()=>{
//     location.href="paginapokemon.html"
// })
