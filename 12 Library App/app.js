const addBookForm = document.getElementById('add-book-form');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookList = document.getElementById('book-list');

addBookForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let bookAuthorName = bookAuthor.value.trim();
    let bookName = bookTitle.value.trim();

    if (bookName && bookAuthorName) {
        let liItem = document.createElement('li');
        liItem.classList.add('book-item');
        liItem.innerHTML = `
                <span><strong>Title:</strong> ${bookName} <strong>Author:</strong> ${bookAuthorName} </span>
                <button class="remove-book">Remove</button>
        `;
        bookList.appendChild(liItem);

        let removeBtn = liItem.querySelector('.remove-book');
        removeBtn.addEventListener('click', function () {
            liItem.remove();
        });

        bookAuthor.value = "";
        bookTitle.value = "";
    } else {
        alert("Enter something in form first!");
    }

});