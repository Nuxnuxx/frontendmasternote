// EXO 1
//
var favoriteBooks = [];

function addFavoriteBook(bookName) {
	if (!bookName.includes("Great")) {
		favoriteBooks.push(bookName);
	}
}

function printFavoriteBooks() {
	console.log(`Favorite Books: ${String(favoriteBooks.length)}`);
	for (let bookName of favoriteBooks) {
		console.log(`${bookName}`);
	}
}

addFavoriteBook("A song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");

printFavoriteBooks();
