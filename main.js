/* Первое задание  */

let numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?");

/* Второе задание */

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false 
};

/* Третье задание */

let a = prompt("Один из последних просмотреных фильмов?"),
    b = +prompt("На сколько оцените его?"),
    c = prompt("Один из последних просмотреных фильмов?"),
    d = +prompt("На сколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);