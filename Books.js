export class Book {
  
    constructor (title, author, description, pages,currentPage=1){
      this.title=title;
      this.author=author;
      this.description=description;
      this.pages=pages;
      this.currentPage= currentPage;
      this.read=false ;
    }
  
    readBook(page) { 

        if( (page <1 ) || (page > this.pages) ) return 0 ; 
        if( (page >= 1)  && (page < this.pages) ){
          this.currentPage= page;  
          return 1 ;
        }
        if(page === this.pages){
          this.currentPage = page;
          this.read=true;
          return 1 ;
        }
        return page+this.currentPage;
      
  }

 
  
  
  
 

  }
  
  let book1 = new Book("l'art de la guerre", "Sun tzu", "lorem ipsum", 301, 0)
  let book2 = new Book("Alice dans le monde des merveuilles", "unknown", "lorem ipsum", 296, 0)
  let book3 = new Book("The wolf", "unknown", "lorem ipsum", 117, 0)

  book1.readBook(3)
  book2.readBook(296)
  book3.readBook(117)
  
  export const books = [book1, book2, book3];
 
