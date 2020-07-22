const body = document.querySelector('body');

function buildCard (data)  {
    let pic = data.sprites.back_default;
    let pokeName = data.name;
    let height = Math.floor(data.height / 10 * 3.28);
    let weight = Math.floor(data.weight / 10 * 2.2);
    let moves = data.moves;
    let solarBeam = moves[23].move.name;
    let types = data.types[0].type.name;

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    const image = document.createElement('img');
    image.src = pic;
    image.classList.add('card-img-top');
    image.alt = 'Charizard';
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const head5 = document.createElement('h5');
    head5.classList.add('card-title');
    let firstLetter = pokeName.charAt(0).toUpperCase();
    let otherLetters = pokeName.slice(1);
    head5.textContent = firstLetter + otherLetters;
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = `${height} feet tall, ${weight} pounds, main move is ${solarBeam}, and type is ${types}.`;
    const anchor = document.createElement('a');
    anchor.href = 'https://www.pokemon.com/us/pokedex/charizard';
    anchor.classList.add('btn', 'btn-primary');
    anchor.innerText = 'Check out more of Charizard';
    body.appendChild(card);
    card.appendChild(image);
    card.appendChild(cardBody);
    cardBody.appendChild(head5);
    cardBody.appendChild(cardText);
    cardBody.appendChild(anchor);
}


fetch('https://pokeapi.co/api/v2/pokemon/charizard')
.then(response => {
    return response.json();
})


/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */


.then(data => {

    console.log(data)

    buildCard(data);


})