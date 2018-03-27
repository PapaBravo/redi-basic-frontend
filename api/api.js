console.log('Starting api games');

function setBooks(rawBooks) {
    var bookListEl = document.getElementById('bookList');
    bookListEl.innerHTML = ''; // deletes books from last search
    for (var i = 0; i < rawBooks.length; i++) {
        var bookEl = document.createElement('div');
        bookEl.className = 'book';
        bookEl.innerHTML = ` 
            <span class="title">${rawBooks[i].volumeInfo.title}</span>
            <span class="authors">${rawBooks[i].volumeInfo.authors}</span>
        `;
        bookListEl.appendChild(bookEl);
    }
}

function fetchBooks(url) {
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Problem fetching books.');
            }
            return res.json();
        })
        .then(res => {
            if (!res || res.totalItems === 0) {
                return;
            }
            setBooks(res.items);
        })
        .catch(err => {
            alert('Something was wrong: ' + err.message);
        });
}

function searchBooks() {
    var title = document.getElementById('searchTitle').value;
    var author = document.getElementById('searchAuthor').value;

    // https://www.googleapis.com/books/v1/volumes?q=inauthor:paul+intitle:math
    var url = 'https://www.googleapis.com/books/v1/volumes?q=';

    if (title) {
        url += `intitle:${title}`;
        if (author) {
            url += '+';
        }
    }
    if (author) {
        url += `inauthor:${author}`
    }
    fetchBooks(url);
}