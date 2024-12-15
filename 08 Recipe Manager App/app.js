const recipe_name = document.getElementById('recipe-name');
const ingredients_container = document.getElementById('ingredients-container');
const instr = document.getElementById('instructions');

const addRecipe = document.getElementById('addRecipe');



addRecipe.addEventListener('click', () => {
    event.preventDefault();
    let recipeName = recipe_name.value;
    let ingredients = [];
    let ingredientsTextArea = ingredients_container.querySelectorAll('textarea');
    ingredientsTextArea.forEach(textarea => {
        if (textarea.value.trim() !== '') {
            ingredients.push(textarea.value.trim());
        }
    })
    let inst = instr.value;
    listRecipe(recipeName, ingredients, inst);
    instr.value ="";
    recipe_name.value = "";
    ingredients_container.innerHTML = "";

});

function listRecipe(recipeName, ingredients, inst) {
    let recipes_list = document.getElementById('recipes-list');
    let recipeItem = document.createElement('li');

    recipeItem.classList.add('recipe-item');

    const recipe = `<h3>${recipeName}</h3>
                    <div class="ingredients">
                        <ul>
                        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <p class="instructions">${inst}</p>
                    <div class="actions">
                        <button class="edit-btn">Edit</button>
                        <button  class="delete-btn">Delete</button>
                    </div>`;
    recipeItem.innerHTML = recipe;
    recipes_list.appendChild(recipeItem);

    const editBtn = recipeItem.querySelector('.edit-btn');
    const deleteBtn = recipeItem.querySelector('.delete-btn');

    editBtn.addEventListener('click', function () {
        editBTN(recipeItem); 
    });
    deleteBtn.addEventListener('click', function () {
        deleteBTN(recipeItem); 
    });
}

function deleteBTN(recipeItem) {
    if (recipeItem) {
        recipeItem.remove(); 
    }
}

function editBTN(recipeItem) {
    const recipeName = recipeItem.querySelector('h3').textContent;
    const ingredients = Array.from(recipeItem.querySelectorAll('.ingredients ul li')).map(li => li.textContent);
    const instructions = recipeItem.querySelector('.instructions').textContent;

    recipe_name.value = recipeName;

    ingredients_container.innerHTML = ''; 
    ingredients.forEach(ingredient => {
        let textarea = document.createElement('textarea');
        textarea.classList.add('ingredient');
        textarea.placeholder = 'Enter an ingredient';
        textarea.value = ingredient;
        ingredients_container.appendChild(textarea);
    });

    instr.value = instructions;
}



const add_ingredient = document.getElementById('add-ingredient').addEventListener('click', () => {
    let ingredients_container = document.getElementById('ingredients-container');
    let ingredientsContHTML = `<textarea class="ingredient" placeholder="Enter an ingredient" required></textarea>`
    ingredients_container.insertAdjacentHTML('beforeend', ingredientsContHTML);
})