class Book{
    constructor(bookname,author,type){
    
        this.name=bookname;
        this.author=author;
        this.type=type;
   }

}
class Display{
    add(book) {
        console.log('Adding to ui');
        let tablebody = document.getElementById('tableBody');
        let i = 0;
        let uisting = `
        <tr>
        <th scope="row">-</th>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>
        `;
        tablebody.innerHTML += uisting;
    
    }
    clear() {
        let l = document.getElementById('libraryForm');
        l.reset();
    }
    validation(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, Message) {
        let message = document.getElementById('message');
        let mess;
        if(type==='success'){
            mess='Success';
        }
        else{
            mess='Error';
        }
        message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      <strong>${mess}! </strong> ${Message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
        setTimeout(function () {
            message.innerHTML = '';
        }, 2000);
    }
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
//also preventing default behavior of form
function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('You Successfully submited library Form');
    let bookname = document.getElementById('inputbook').value;
    let author = document.getElementById('author').value;
    let type;


    let Hindi = document.getElementById('Hindi');
    let English = document.getElementById('English');
    let Other = document.getElementById('Other');
    if (Hindi.checked) {
        type = Hindi.value;
    }
    else if (English.checked) {
        type = English.value;
    }
    else if (Other.checked) {
        type = Other.value;
    }
    let book = new Book(bookname, author, type);
    console.log(book);
    let display = new Display();
    if (display.validation(book)) {
        display.add(book);
        localStorage.setItem("Book", book.name, book.author);
        display.clear();
        display.show('success', 'Book is succesfully added');
    }
    else {
        //show error to user
        display.show('danger', "Sorry,you can't add this book");
    }
}
