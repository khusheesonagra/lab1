const movies = [
    { title: "singham", genre: "Action Thriller", rating: 8.8, releaseYear: 2010 },
    { title: "singham returns", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "3 idiots", genre: "Comedy", rating: 8.6, releaseYear: 2014 }
];
const addMovie = (collection, movie) => {
    collection.push(movie);
};

addMovie(movies, { title: "Genius", genre: "Action", rating: 7.5, releaseYear: 2020 });

const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};

console.log(listMoviesByGenre(movies, "Sci-Fi"));
const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};

console.log(findHighestRatedMovie(movies));
const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};

console.log(getMovieTitles(movies));
const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};

console.log(moviesAfterYear(movies, 2010));
movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});