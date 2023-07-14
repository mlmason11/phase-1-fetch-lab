

const OPTIONS = {
  headers: {
      'Accept': 'application/json'
  }
}

function renderBooks(books) {
  // const books = renderBooks(books);
  // return booksList;
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const books = fetch("https://anapioficeandfire.com/api/books", OPTIONS)
  .then((resp) => resp.json())
  .then((books) => renderBooks(books))
}

addEventListener("DOMContentLoaded", () => {
  fetchBooks()
})