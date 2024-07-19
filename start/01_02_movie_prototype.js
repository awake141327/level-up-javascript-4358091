class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in year ${this.releaseYear}. It received a rating of ${this.rating}.`;
  }

  get overview() {
    return this.getOverview();
  }
}

const Suzume = new Movie("Suzume", "Amaan", "Suspense", 2023, 8.4);
console.log(Suzume);
console.log(Suzume.overview);