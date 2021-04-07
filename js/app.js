
function createBookEvent(event){
    event.preventDefault();
    //// get value from input
    const bookName =   document.querySelector('#bookId');
    const authorName = document.querySelector('#authorId');
    const startDate = document.querySelector('#startId');
    const endDate = document.querySelector('#endId');
    const prices = document.querySelector('#priceId');
    const select = document.querySelector("#selectId");
   
    /// Can not empty..
    if (bookName.value === ""){
        return confirm("Please enter your book name")
    }
    if (authorName.value === ""){
        return confirm("Please enter Author Name")
    }
    if (prices.value === ""){
        return confirm("please enter price of book")
    }
    if (startDate.value === ""){
        return confirm("Please entter First Date")
    }
    if (endDate.value === ""){
        return confirm("Please enter Last date")
    }

     /// convert date formate..
    const publishedDate = new Date(startDate.value);
    const purchaseDate = new Date(endDate.value);
    
    if (publishedDate.getTime() > purchaseDate.getTime()){
        
        return confirm("Last date most be greater than First date");
    }
    
    /// create card 
    const card = document.createElement('div');
    card.classList.add('card');

    // create book title
    const listBook = document.createElement('span');
    listBook.classList.add('book-title');
    listBook.textContent = bookName.value;

    // create authorName
    const author = document.createElement('span');
    author.classList.add('author');
    author.textContent = authorName.value;

    // create Start Date
    const startdate = document.createElement('span');
    startdate.classList.add('startdate');
    startdate.textContent = startDate.value;
 

    // create End date
    const enddate = document.createElement('span');
    enddate.classList.add('enddate');
    enddate.textContent = endDate.value;
    
    // create Price 
    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = prices.value;
    
    const selectBook = document.createElement('span');
    selectBook.classList.add('selectbook');
    selectBook.textContent = select.value;
    
    

    // create Delete book 
    const deleteBook = document.createElement('span');
    deleteBook.classList.add('delete');
    deleteBook.textContent= 'x';

    // add list book and delete into card
    card.appendChild(listBook);
    card.appendChild(author);
    card.appendChild(startdate);
    card.appendChild(enddate);
    card.appendChild(price);
    card.appendChild(selectBook);
    card.appendChild(deleteBook);
    

    // add card to CardContainer
    cardContainer.appendChild(card);
        
    bookName.value = "";
    authorName.value = "";
    startDate.value = "";
    endDate.value = "";
    prices.value= "";


}

function deleteBookevent (event){
    if (event.target.className === "delete"){
        const spandelete = event.target.parentElement;
        spandelete.remove();
    }
}

function searchBook (event){
    let text = btnSearch.value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    for (let book of cards){
        let title = book.firstElementChild.textContent.toLowerCase();
        if (title.indexOf(text)=== -1){
            book.style.display = 'none';
        }else{
            book.style.display = "";
        }
    }
}



const btnClick = document.querySelector('#createId');
btnClick.addEventListener('click',createBookEvent);

const cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click',deleteBookevent);

const btnSearch = document.querySelector('#searchId');
btnSearch.addEventListener('keyup',searchBook);
//Hhide show...
const formContainer = document.querySelector('.form-container');
const btnShow = document.querySelector('#showhideId');
btnShow.addEventListener('click',function(){
    formContainer.style.display = "block";
    btnShow.style.display = "none";
})
const btnHide = document.querySelector('#createId');
btnHide.addEventListener('click', function(){
    formContainer.style.display = "none";
    btnShow.style.display = "block";
})

