'use strict'

const searchUrl = 'https://api.spoonacular.com/recipes/findByIngredients';
const apiKey = '5ffab51cb7a44daea5ad92b78f6ef5f1';

function getRecipe (){
    const params = {
        api_key: apiKey,
        ingredients: ingredients,
    };

}

function displayResutls(responseJson) {
    console.log(responseJson);
    $('#results-list').append(
        ``
    )
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const ;s
        getRecipe();
    });
}

$(watchForm);