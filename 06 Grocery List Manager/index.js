const addBTN = document.getElementById('addBTN');
const addInput = document.getElementById('new-item-name');
const grocery_list = document.getElementById('grocery-list');
const inputOpt = document.getElementById('inputOpt');
const filter_section = document.getElementById('filter-section');
const searchInput = document.getElementById('searchByName');  // Added search input element

let listFruit = [];
let listDairy = [];
let listVeg = [];
let listAll = [];

addBTN.addEventListener('click', additem);


filter_section.addEventListener("change", show);
searchInput.addEventListener('input', show);

function show() {
    let filter = filter_section.value;
    let searchQuery = searchInput.value.trim().toLowerCase();  
    grocery_list.innerHTML = '';  

    let listToDisplay = [];
    if (filter === 'all') {
        listToDisplay = listAll.filter(item => item.name.toLowerCase().includes(searchQuery));
    } else {
        listToDisplay = listAll
            .filter(item => item.category === filter && item.name.toLowerCase().includes(searchQuery));
    }

    listToDisplay.forEach((item, index) => {
        createListItem(item, filter, index);
    });
}

function additem() {
    const item = addInput.value.trim();
    const category = inputOpt.value;

    if (!item) {
        alert('Please enter an item.');
        return;
    }

    if (category === 'fruits') {
        listFruit.push(item);
    } else if (category === 'vegetables') {
        listVeg.push(item);
    } else if (category === 'dairy') {
        listDairy.push(item);
    }
    listAll.push({ name: item, category });

    addInput.value = ''; 
    show();
}

function createListItem(item, category, index) {
    const li = document.createElement('li');
    li.classList.add('grocery-item');

    const span = document.createElement('span');
    span.textContent = item.name;

    const editB = document.createElement('button');
    editB.classList.add('editB');
    editB.innerText = 'Edit';
    editB.addEventListener('click', () => editItem(index));

    const removeB = document.createElement('button');
    removeB.classList.add('removeB');
    removeB.innerText = 'Remove';
    removeB.addEventListener('click', () => removeItem(index));

    li.appendChild(span);
    li.appendChild(editB);
    li.appendChild(removeB);

    grocery_list.appendChild(li);
}

function editItem(index) {
    const newItem = prompt('Edit item:', listAll[index].name);
    if (newItem) {
        const oldCategory = listAll[index].category;
        listAll[index].name = newItem.trim();

        syncCategoryLists(oldCategory);
        show();
    }
}

function removeItem(index) {
    const removedCategory = listAll[index].category;
    listAll.splice(index, 1);

    syncCategoryLists(removedCategory);
    show();
}

function syncCategoryLists(category) {
    const updatedItems = listAll
        .filter(item => item.category === category)
        .map(item => item.name);

    if (category === 'fruits') listFruit = updatedItems;
    if (category === 'vegetables') listVeg = updatedItems;
    if (category === 'dairy') listDairy = updatedItems;
}
