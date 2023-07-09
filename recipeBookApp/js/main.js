
const API_KEY = "2e4fba6eb8c041e69be79df1a95c1d50";

const recipesListEl = document.getElementById("recipes-list");









function displayRecipes(recipes){
    recipesListEl.innerHTML = "";
    recipes.forEach((recipe)=>{
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        const recipeImage = document.createElement("img");
        recipeImage.src=recipe.image;
        recipeImage.alt="Recipe Image";
        
        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerHTML = recipe.title;
        
        const recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}
        `

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe"
        
        recipeItemEl.appendChild(recipeImage)
        recipeItemEl.appendChild(recipeTitleEl)
        recipeItemEl.appendChild(recipeIngredientsEl)
        recipeItemEl.appendChild(recipeLinkEl)
        recipesListEl.appendChild(recipeItemEl)
        
    })
}

async function getRecipes(){
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );
    const data =await response.json()
    return data.recipes;
}



async function init(){
const recipes = await getRecipes();
console.log(recipes);
displayRecipes(recipes)

}

init();