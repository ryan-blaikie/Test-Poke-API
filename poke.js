var link = "https://pokeapi.co/api/v2/pokemon/";
var pokemonName = document.getElementById("pokemonName").innerHTML;
var pokemonImg = document.getElementById("pokemon_img");
SearchButton.onclick = function(){
    var input = document.getElementById("input").value;
    apiUrl = link + input;
    fetch(apiUrl)
        .then(response => response.json())
        .then(function(currentPokemon){
            pokemonImg.src=currentPokemon.sprites["front_default"];
            document.getElementById("pokemonName").innerHTML = "Name: " + currentPokemon.species.name;
            document.getElementById("pokedexNum").innerHTML = "Pokedex Number: " + currentPokemon.id;
        }
        )
        apiUrl = link;
    }

