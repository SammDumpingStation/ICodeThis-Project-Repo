let librarianStorage = JSON.parse(localStorage.getItem('librarian') || []);

function librarianStore() {
  localStorage.setItem('librarian', JSON.stringify(librarianStorage));
}

