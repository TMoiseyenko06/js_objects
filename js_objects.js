function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.display = function () {
    console.log(`Book Title: ${this.title}, Book Author: ${this.author}`);
  };
}

let books = [];

const addBook = (title, author, pages) => {
  books.push(new Book(title, author, pages));
};

const searchTitle = (title) => {
  books.forEach((book) => {
    if (book.title === title) {
      console.log(book);
    }
  });
};

const searchAuthor = (author) => {
  books.forEach((book) => {
    if (book.author === author) {
      console.log(book);
    }
  });
};

const filterHundred = (books) => {
  console.log(books.filter((book) => book.pages <= 100));
};

const addMarking = (books) => {
  books = books.map((book) => {
    book.title = `Title: ${book.title}`;
    book.author = `Author: ${book.author}`;
    return book;
  });
};
