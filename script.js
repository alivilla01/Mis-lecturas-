const shelf = document.getElementById('shelf');
const form = document.getElementById('addBookForm');
const titleInput = document.getElementById('title');
const imageInput = document.getElementById('image');

// Cargar libros guardados en localStorage al iniciar
document.addEventListener('DOMContentLoaded', () => {
  const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
  savedBooks.forEach(addBookToShelf);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const image = imageInput.value.trim();

  if (title && image) {
    const book = { title, image };
    addBookToShelf(book);
    saveBook(book);

    form.reset();
  }
});

function addBookToShelf(book) {
  const bookDiv = document.createElement('div');
  bookDiv.className = 'book';

  const img = document.createElement('img');
  img.src = book.image;
  img.alt = book.title;

  const title = document.createElement('div');
  title.className = 'book-title';
  title.textContent = book.title;

  bookDiv.appendChild(img);
  bookDiv.appendChild(title);

  shelf.appendChild(bookDiv);
}

function saveBook(book) {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}
