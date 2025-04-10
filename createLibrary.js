

function createLibrary(){
  let library = [];
  let libobj = {
    addBook: function (book){
      library.push(book)
    },
    removeBook: function (title){
      library.splice(library.findIndex(item => item.title === title , 1))
      
    },
    listBooks : function(){
      for(let i=0;i<library.length;i++){
        library[i].details();
      }
    }
  }
  return libobj;
}

function Book(title, author){
  let book = {
    title : title,
    author : author,
    details : function(){
      console.log(`Title: ${title}, Author: ${author}`)
    }
  }
  
  return book;
}
const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();

library.removeBook("1984");
library.listBooks();

