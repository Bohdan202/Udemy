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


for (let i = 0; i < 2; i++){
const  a = prompt("Один из последних просмотреных фильмов?"),
  b = prompt("На сколько оцените его?");


if (a != null && b != null && a != "" && b!= "" && a.length < 50) {
  personalMovieDB.movies[a] = b;
} else {
  i--;
}
 
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка!");
}


console.log(personalMovieDB);
