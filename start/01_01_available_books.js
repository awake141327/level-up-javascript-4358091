class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of Stock";
    } else if (this.numCopies < 10) {
      return "Low Stock";
    } else {
      return "In Stock";
    }
  }

  get availability() {
    return this.getAvailability();
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

const GameOfThrones = new Book("GOT", "Amaan", "1334252", 5);
console.log(GameOfThrones.availability);

GameOfThrones.restock(5);
console.log(GameOfThrones.availability);

GameOfThrones.sell(10);
console.log(GameOfThrones.availability);