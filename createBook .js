
//for creating new object using factory function we do not require this keyword to access the 
// title and author

// we use this keyword when we create a new object using new keyword 
// and constructor function

function createBook(title, author) {
  return {
    title: title,
    author: author,
    printInfo: () => {
      console.log("Book: " + title + ", Author: " + author);
    }
  };
}

const book = createBook("1984", "George Orwell");
book.printInfo();
