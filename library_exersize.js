class library{
    constructor(booklist){
        this.bookList=booklist;
        this.issuedBooks={};
    }
    getBooklist(){
         this.bookList.forEach(element => {
             console.log(element);
         });
    }
    issueBook(bookName,user){
        if(this.issuedBooks[bookName]==undefined){
        this.issuedBooks[bookName]=user;}
        else{
            console.log("book is already issued");
        }
    }
    returnBook(bookName){
        delete this.issueBooks[bookName];
    }
}

/*
code for console
pranjal=new library(['pranjalchoudhary','rohan']);
pranjal.getBooklist()
pranjal.issueBook('rohan','papu')
pranjal.issueBook('rohan','singh')


*/
